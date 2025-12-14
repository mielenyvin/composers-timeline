// server/soundcloudProxy.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const SOUND_CLOUD_PUBLIC_CLIENT_ID =
  process.env.SOUND_CLOUD_PUBLIC_CLIENT_ID ||
  process.env.SOUND_CLOUD_CLIENT_ID;

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
    throw createError(
      502,
      "SoundCloud transcoding response missing url"
    );
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
          (track.title && String(track.title).trim() && track.media?.transcodings?.length)
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
      console.error(
        "SoundCloud streams proxy: no suitable stream URL",
        track
      );
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

    res.json({ url: finalUrl });
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
