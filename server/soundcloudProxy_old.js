// server/soundcloudProxy.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const SOUND_CLOUD_PUBLIC_CLIENT_ID =
  process.env.SOUND_CLOUD_PUBLIC_CLIENT_ID || process.env.SOUND_CLOUD_CLIENT_ID;

if (!SOUND_CLOUD_PUBLIC_CLIENT_ID) {
  console.error("Missing SoundCloud client id in .env");
  process.exit(1);
}

const WIDGET_BASE = "https://api-widget.soundcloud.com";

function createError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

function withQuery(urlString, params = {}) {
  const url = new URL(urlString);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
}

async function resolveWithWidget(targetUrl, trackAuth) {
  const resolveUrl = new URL(`${WIDGET_BASE}/resolve`);
  resolveUrl.searchParams.set("url", targetUrl);
  resolveUrl.searchParams.set("format", "json");
  resolveUrl.searchParams.set("client_id", SOUND_CLOUD_PUBLIC_CLIENT_ID);
  if (trackAuth) {
    resolveUrl.searchParams.set("track_authorization", trackAuth);
  }

  const resp = await fetch(resolveUrl.toString());
  if (!resp.ok) {
    const body = await resp.text().catch(() => "");
    console.error("SoundCloud widget resolve error", {
      status: resp.status,
      body,
    });
    throw createError(resp.status, `SoundCloud resolve error: ${resp.status}`);
  }

  return resp.json();
}

async function fetchTrackDetails(trackId, trackAuth) {
  if (!trackId) return null;
  const url = `https://api.soundcloud.com/tracks/${trackId}`;
  return resolveWithWidget(url, trackAuth);
}

async function resolveTranscodingUrl(transcodingUrl, trackAuth) {
  const urlWithParams = withQuery(transcodingUrl, {
    client_id: SOUND_CLOUD_PUBLIC_CLIENT_ID,
    track_authorization: trackAuth,
  });

  const resp = await fetch(urlWithParams);
  if (!resp.ok) {
    const errBody = await resp.text().catch(() => "");
    console.error("SoundCloud transcoding upstream error", {
      status: resp.status,
      body: errBody,
    });

    if (resp.status === 429) {
      const retryAfterHeader = resp.headers.get("Retry-After");
      const err = createError(429, "SoundCloud transcoding rate-limited");
      err.retryAfter = Number(retryAfterHeader) || undefined;
      throw err;
    }

    throw createError(
      resp.status,
      `SoundCloud transcoding error: ${resp.status}`
    );
  }

  const data = await resp.json();
  if (!data || !data.url) {
    throw createError(502, "SoundCloud transcoding response missing url");
  }

  return data.url;
}

function pickTranscoding(track) {
  const list =
    track?.media && Array.isArray(track.media.transcodings)
      ? track.media.transcodings
      : [];

  if (!list.length) return null;

  const progressive = list.find(
    (t) => t?.format && t.format.protocol === "progressive"
  );

  return progressive || list[0];
}

// 0) Stream audio through our domain to bypass ISP/CDN blocks.
// Supports Range requests (required for <audio> and seeking).
app.get("/api/soundcloud/audio/:trackId", async (req, res) => {
  try {
    const trackId = req.params.trackId;
    const trackAuth = req.query.track_authorization;

    if (!trackId) {
      return res.status(400).json({ error: "Missing trackId" });
    }

    // Resolve track and pick a transcoding
    const trackUrl = `https://api.soundcloud.com/tracks/${trackId}`;
    const track = await resolveWithWidget(trackUrl, trackAuth);
    const candidate = pickTranscoding(track);

    if (!candidate?.url) {
      return res.status(502).json({ error: "No suitable stream URL found" });
    }

    // Get final signed media URL from SoundCloud
    const finalUrl = await resolveTranscodingUrl(
      candidate.url,
      trackAuth || track?.track_authorization
    );

    // Forward Range header if present (important for audio playback)
    const headers = {};
    if (req.headers.range) headers["Range"] = req.headers.range;

    const upstream = await fetch(finalUrl, { headers });

    // If SoundCloud/CDN responds with error - pass it through
    if (!upstream.ok && upstream.status !== 206) {
      const body = await upstream.text().catch(() => "");
      console.error("SoundCloud audio upstream error", {
        status: upstream.status,
        body: body?.slice?.(0, 300),
      });
      return res
        .status(upstream.status)
        .json({ error: `SoundCloud audio upstream error: ${upstream.status}` });
    }

    // Copy key headers for browser audio element
    const passHeaders = [
      "content-type",
      "content-length",
      "accept-ranges",
      "content-range",
    ];
    passHeaders.forEach((h) => {
      const v = upstream.headers.get(h);
      if (v) res.setHeader(h, v);
    });

    // Keep caching conservative (optional)
    res.setHeader("Cache-Control", "no-store");

    // Status 206 for ranged responses, 200 otherwise
    res.status(upstream.status);

    // Stream body
    upstream.body.pipe(res);
  } catch (err) {
    console.error("SoundCloud audio proxy error", err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal server error" });
  }
});

// 3) Проксируем media.transcodings (получение финального URL по transcoding.url)
app.get("/api/soundcloud/transcoding", async (req, res) => {
  try {
    const transcodingUrl = req.query.url;
    const trackAuth = req.query.track_authorization;
    if (!transcodingUrl) {
      return res.status(400).json({ error: "Missing url parameter" });
    }

    const finalUrl = await resolveTranscodingUrl(transcodingUrl, trackAuth);
    res.json({ url: finalUrl });
  } catch (err) {
    console.error("SoundCloud transcoding proxy error", err);
    if (err.status === 429) {
      res.set("Retry-After", err.retryAfter || 60);
      return res
        .status(429)
        .json({ error: "SoundCloud request rate-limited, try again shortly" });
    }
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal server error" });
  }
});

// 1) Проксируем resolve плейлиста/трека
app.get("/api/soundcloud/playlist", async (req, res) => {
  try {
    const playlistUrl = req.query.url;
    if (!playlistUrl) {
      return res.status(400).json({ error: "Missing url parameter" });
    }

    const data = await resolveWithWidget(playlistUrl);

    if (Array.isArray(data?.tracks) && data.tracks.length) {
      const tracks = [];
      for (const track of data.tracks) {
        if (
          !track ||
          (track.title &&
            String(track.title).trim() &&
            track.media?.transcodings?.length)
        ) {
          tracks.push(track);
          continue;
        }

        try {
          const resolved = await fetchTrackDetails(
            track?.id,
            track?.track_authorization
          );
          tracks.push(resolved || track);
        } catch (err) {
          console.error("SoundCloud track detail fetch failed", err);
          tracks.push(track);
        }
      }
      data.tracks = tracks;
    }

    res.json(data);
  } catch (err) {
    console.error("SoundCloud playlist proxy error", err);
    if (err.status === 429) {
      res.set("Retry-After", err.retryAfter || 60);
      return res
        .status(429)
        .json({ error: "SoundCloud request rate-limited, try again shortly" });
    }
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal server error" });
  }
});

// 2) Проксируем /tracks/{id}/streams и возвращаем финальный URL для <audio>
app.get("/api/soundcloud/streams/:trackId", async (req, res) => {
  try {
    const trackId = req.params.trackId;
    const trackAuth = req.query.track_authorization;
    if (!trackId) {
      return res.status(400).json({ error: "Missing trackId" });
    }

    const trackUrl = `https://api.soundcloud.com/tracks/${trackId}`;
    const track = await resolveWithWidget(trackUrl, trackAuth);
    const candidate = pickTranscoding(track);

    if (!candidate || !candidate.url) {
      console.error("SoundCloud streams proxy: no suitable stream URL", track);
      return res.status(502).json({
        error: "No suitable stream URL found in SoundCloud response",
      });
    }

    const finalUrl = await resolveTranscodingUrl(
      candidate.url,
      trackAuth || track?.track_authorization
    );

    console.log("SoundCloud streams proxy final URL", {
      trackId,
      candidate: candidate.url,
      finalUrl,
    });

    const auth = encodeURIComponent(
      trackAuth || track?.track_authorization || ""
    );
    const proxied = `/api/soundcloud/audio/${trackId}?track_authorization=${auth}`;
    res.json({ url: proxied });
  } catch (err) {
    console.error("SoundCloud streams proxy error", err);
    if (err.status === 429) {
      res.set("Retry-After", err.retryAfter || 60);
      return res
        .status(429)
        .json({ error: "SoundCloud request rate-limited, try again shortly" });
    }
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`SoundCloud proxy listening on http://localhost:${PORT}`);
});
