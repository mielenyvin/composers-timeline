<template>
  <section class="radio">
    <div class="radio__card">
      <header class="radio__header">
        <div class="radio__title-row">
          <h1 class="radio__title">{{ radioContent.title }}</h1>
          <a class="sc-powered" href="https://soundcloud.com" target="_blank" rel="noopener noreferrer"
            aria-label="Powered by SoundCloud">
            <img class="sc-powered__img" src="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png"
              alt="Powered by SoundCloud" />
          </a>
        </div>
      </header>

      <div class="radio__filters">
        <div class="radio__filter">
          <div class="radio__filter-label">{{ radioContent.playlistModeLabel }}</div>
          <div class="radio__filter-options">
            <button type="button" class="radio__filter-pill" :class="{ 'is-active': playlistMode === 'hits' }"
              :aria-pressed="playlistMode === 'hits'" @click="playlistMode = 'hits'">
              {{ radioContent.playlistModeHits }}
            </button>
            <button type="button" class="radio__filter-pill" :class="{ 'is-active': playlistMode === 'all' }"
              :aria-pressed="playlistMode === 'all'" @click="playlistMode = 'all'">
              {{ radioContent.playlistModeAll }}
            </button>
          </div>
        </div>

        <div class="radio__filter">
          <div class="radio__filter-label">{{ radioContent.playOrderLabel }}</div>
          <div class="radio__filter-options">
            <button type="button" class="radio__filter-pill" :class="{ 'is-active': playOrder === 'shuffle' }"
              :aria-pressed="playOrder === 'shuffle'" @click="playOrder = 'shuffle'">
              {{ radioContent.playOrderShuffle }}
            </button>
            <button type="button" class="radio__filter-pill" :class="{ 'is-active': playOrder === 'sequence' }"
              :aria-pressed="playOrder === 'sequence'" @click="playOrder = 'sequence'">
              {{ radioContent.playOrderSequence }}
            </button>
          </div>
        </div>

        <div class="radio__filter">
          <div class="radio__filter-label">{{ radioContent.eraLabel }}</div>
          <div class="radio__filter-options radio__filter-options--wrap">
            <label v-for="era in eraOptions" :key="era.id" class="radio__filter-check">
              <input v-model="selectedEras[era.id]" type="checkbox" />
              <span>{{ era.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="radio__controls">
        <button type="button" class="radio__button radio__button--primary" :disabled="!isReady"
          :aria-label="isPlaying ? radioContent.pause : radioContent.play"
          :title="isPlaying ? radioContent.pause : radioContent.play" @click="togglePlay">
          <svg v-if="!isPlaying" class="radio__icon" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="8,5 20,12 8,19" />
          </svg>
          <svg v-else class="radio__icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        </button>
        <button type="button" class="radio__button" :disabled="!hasActiveTrack" :aria-label="radioContent.stop"
          :title="radioContent.stop" @click="stopPlayback">
          <svg class="radio__icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        </button>
        <button type="button" class="radio__button" :disabled="!canPrev" :aria-label="radioContent.prev"
          :title="radioContent.prev" @click="prevTrack">
          <svg class="radio__icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="5" width="3" height="14" />
            <polygon points="19,5 19,19 8,12" />
          </svg>
        </button>
        <button type="button" class="radio__button" :disabled="!canNext" :aria-label="radioContent.next"
          :title="radioContent.next" @click="nextTrack">
          <svg class="radio__icon" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="5,5 16,12 5,19" />
            <rect x="17" y="5" width="3" height="14" />
          </svg>
        </button>
        <div class="radio__meta" v-if="trackCount">
          {{ radioContent.trackCountLabel }}: {{ trackCount }}
        </div>
      </div>

      <div style="display: none;" class="radio__status"
        :class="{ 'radio__status--error': hasLoadError || hasPlaybackError }">
        <span v-if="isLoading">{{ radioContent.loading }}</span>
        <span v-else-if="hasLoadError">{{ radioContent.error }}</span>
        <span v-else-if="hasPlaybackError">{{ radioContent.audioError }}</span>
      </div>

      <!--
      <div class="radio__now" v-if="hasActiveTrack && currentTrack">
        <span class="radio__now-label">{{ radioContent.nowPlaying }}</span>
        <span class="radio__now-title">{{ currentTrackLabel }}</span>
      </div>
      -->

      <div class="radio__list sc-player" ref="trackListEl">
        <div class="sc-track-list">
          <button v-for="(track, index) in tracks" :key="track.id || `${track.title}-${index}`" type="button"
            class="sc-track radio__track" :class="{ 'is-active': index === currentIndex }"
            :aria-pressed="index === currentIndex" @click="playTrackAt(index)"
            :ref="(el) => setTrackRef(el, index)">
            <span class="sc-track__title" :class="{ 'is-playing': index === currentIndex && isPlaying }">
              <span class="sc-track__title-text">
                <span v-if="getTrackComposerLabel(track)" class="sc-track__composer">
                  {{ getTrackComposerLabel(track) }}
                </span>
                <span v-if="getTrackComposerLabel(track)" class="sc-track__separator">—</span>
                <span class="sc-track__work">{{ track.title }}</span>
              </span>
              <span v-if="track.duration" class="sc-track__duration">
                {{ formatDuration(track.duration) }}
              </span>
            </span>
          </button>
        </div>
      </div>

      <audio ref="audioEl" class="radio__audio" preload="none" aria-hidden="true" @play="handlePlay"
        @pause="handlePause" @ended="handleEnded" @error="handleAudioError"></audio>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { composers as timelineComposers, ERAS } from "../timeline-core";

const props = defineProps({
  language: {
    type: String,
    default: "en",
  },
  composerNames: {
    type: Object,
    default: () => ({}),
  },
  useProxy: {
    type: Boolean,
    default: false,
  },
});

const RADIO_CONTENT = {
  en: {
    title: "Radio",
    play: "Play",
    pause: "Pause",
    stop: "Stop",
    prev: "Previous",
    next: "Next",
    loading: "Loading playlists...",
    error: "Radio playlist is unavailable right now.",
    audioError: "Audio is unavailable. Try another track.",
    nowPlaying: "Now playing:",
    trackCountLabel: "Tracks",
    playlistModeLabel: "Playlist mode",
    playlistModeHits: "Only popular",
    playlistModeAll: "All works",
    playOrderLabel: "Playback order",
    playOrderShuffle: "Shuffle",
    playOrderSequence: "In order",
    eraLabel: "Eras",
    eraLabels: {
      baroque: "Baroque",
      classical: "Classical",
      romantic: "Romantic",
      twentieth: "20th Century",
    },
  },
  de: {
    title: "Radio",
    play: "Abspielen",
    pause: "Pause",
    stop: "Stopp",
    prev: "Zurück",
    next: "Weiter",
    loading: "Playlists werden geladen...",
    error: "Die Radio-Playlist ist gerade nicht verfügbar.",
    audioError: "Audio ist nicht verfügbar. Probieren Sie einen anderen Track.",
    nowPlaying: "Jetzt läuft:",
    trackCountLabel: "Titel",
    playlistModeLabel: "Playlistmodus",
    playlistModeHits: "Nur Hits",
    playlistModeAll: "Alle Werke",
    playOrderLabel: "Wiedergabereihenfolge",
    playOrderShuffle: "Zufall",
    playOrderSequence: "Der Reihe nach",
    eraLabel: "Epochen",
    eraLabels: {
      baroque: "Barock",
      classical: "Klassik",
      romantic: "Romantik",
      twentieth: "20. Jahrhundert",
    },
  },
  ru: {
    title: "Радио",
    play: "Плей",
    pause: "Пауза",
    stop: "Стоп",
    prev: "Предыдущий",
    next: "Следующий",
    loading: "Загружаем плейлисты...",
    error: "Радио сейчас недоступно.",
    audioError: "Аудио недоступно. Выберите другой трек.",
    nowPlaying: "Сейчас играет:",
    trackCountLabel: "Треков",
    playlistModeLabel: "Режим",
    playlistModeHits: "Только популярные",
    playlistModeAll: "Все",
    playOrderLabel: "Порядок воспроизведения",
    playOrderShuffle: "Вперемешку",
    playOrderSequence: "По порядку",
    eraLabel: "Эпохи",
    eraLabels: {
      baroque: "Барокко",
      classical: "Классицизм",
      romantic: "Романтизм",
      twentieth: "XX век",
    },
  },
};

const PLAYLIST_FILES = timelineComposers.map((composer) =>
  slugifyForPlaylist(composer.name)
);

const SOUND_CLOUD_PROXY_BASE = (
  import.meta.env.VITE_SOUND_CLOUD_PROXY ||
  import.meta.env.VITE_SOUNDCLOUD_PROXY ||
  import.meta.env.SOUND_CLOUD_PROXY ||
  import.meta.env.SOUNDCLOUD_PROXY ||
  ""
).replace(/\/$/, "");

const shouldUseSoundCloudAudioProxy = computed(() => props.useProxy);

const radioContent = computed(() => RADIO_CONTENT[props.language] || RADIO_CONTENT.en);
const playlists = ref([]);
const playlistMode = ref("all");
const playOrder = ref("shuffle");
const shuffleSeed = ref(Date.now());
const selectedEras = reactive(
  ERAS.reduce((acc, era) => {
    acc[era.id] = true;
    return acc;
  }, {})
);
const isLoading = ref(false);
const hasLoadError = ref(false);
const hasPlaybackError = ref(false);
const currentIndex = ref(null);
const loadingIndex = ref(null);
const audioEl = ref(null);
const currentTrackId = ref(null);
const isPlaying = ref(false);
const trackListEl = ref(null);
const trackRefs = ref([]);

const eraOptions = computed(() => {
  const labels = radioContent.value.eraLabels || {};
  return ERAS.map((era) => ({
    id: era.id,
    label: labels[era.id] || era.label || era.id,
  }));
});

const baseTracks = computed(() => {
  const activeEraIds = new Set(
    Object.entries(selectedEras)
      .filter(([, isOn]) => isOn)
      .map(([id]) => id)
  );

  if (activeEraIds.size === 0) {
    return [];
  }

  const list = [];
  playlists.value.forEach((playlist) => {
    if (activeEraIds.size && !activeEraIds.has(playlist.eraId)) {
      return;
    }
    const items =
      playlistMode.value === "hits"
        ? playlist.tracks.slice(0, 3)
        : playlist.tracks;
    items.forEach((track) => list.push(track));
  });
  return list;
});

const tracks = ref([]);
const trackCount = computed(() => tracks.value.length);
const isReady = computed(() => !isLoading.value && trackCount.value > 0);
const hasActiveTrack = computed(() => currentTrackId.value !== null);
const canPrev = computed(
  () => isReady.value && currentIndex.value !== null && currentIndex.value > 0
);
const canNext = computed(
  () =>
    isReady.value &&
    currentIndex.value !== null &&
    currentIndex.value < trackCount.value - 1
);
const currentTrack = computed(() =>
  currentIndex.value === null ? null : tracks.value[currentIndex.value] || null
);
const currentTrackLabel = computed(() => {
  if (!currentTrack.value) return "";
  if (currentTrack.value.playlistTitle) {
    return `${currentTrack.value.playlistTitle} - ${currentTrack.value.title}`;
  }
  return currentTrack.value.title;
});

const setCurrentIndex = (index) => {
  if (typeof index !== "number") return;
  if (index < 0 || index >= trackCount.value) return;
  currentIndex.value = index;
};

async function loadPlaylists() {
  isLoading.value = true;
  hasLoadError.value = false;
  try {
    const results = await Promise.allSettled(
      PLAYLIST_FILES.map((slug) => fetchPlaylist(slug))
    );
    const merged = [];
    results.forEach((result, index) => {
      if (result.status !== "fulfilled") {
        const reason = result.reason;
        if (reason?.status && reason.status === 404) {
          return;
        }
        console.error("Failed to load playlist", PLAYLIST_FILES[index], reason);
        return;
      }
      const playlist = result.value;
      const slug = PLAYLIST_FILES[index];
      const playlistTitle = playlist?.title || slugToTitle(slug);
      const composer = getComposerBySlug(slug);
      const eraId = getEraIdForLifeSpan(composer?.birth, composer?.death);
      const normalized = normalizeSoundCloudTracks(playlist?.tracks || []);
      const tracksForPlaylist = normalized.map((track) =>
        compactTrack(track, playlistTitle, composer?.name || "")
      );
      if (tracksForPlaylist.length) {
        merged.push({
          slug,
          title: playlistTitle,
          eraId,
          composerName: composer?.name || "",
          tracks: tracksForPlaylist,
        });
      }
    });
    playlists.value = merged;
    if (!merged.length) {
      hasLoadError.value = true;
    }
  } catch (err) {
    console.error("Radio playlists load failed", err);
    hasLoadError.value = true;
  } finally {
    isLoading.value = false;
  }
}

async function fetchPlaylist(slug) {
  const resp = await fetch(`/playlists/${slug}.json`);
  const contentType = resp.headers.get("content-type") || "";
  if (!resp.ok || !contentType.includes("application/json")) {
    const err = new Error(`Playlist fetch error: ${resp.status}`);
    if (!resp.ok) {
      err.status = resp.status;
    } else {
      err.status = 404;
    }
    throw err;
  }
  return resp.json();
}

function normalizeSoundCloudTracks(tracks = []) {
  if (!Array.isArray(tracks)) return [];
  return tracks
    .map((track, idx) => {
      if (!track) return null;
      const fallbackTitle = `Track ${idx + 1}`;
      const titleCandidates = [
        track.title,
        track.publisher_metadata?.release_title,
        track.permalink,
        track.permalink_url,
        track.id ? String(track.id) : null,
      ]
        .map((value) => (typeof value === "string" ? value.trim() : ""))
        .filter(Boolean);
      const title = titleCandidates[0] || fallbackTitle;
      return { ...track, title };
    })
    .filter(Boolean);
}

function compactTrack(track, playlistTitle, composerName) {
  return {
    id: track.id,
    title: track.title,
    duration: track.duration,
    track_authorization: track.track_authorization,
    media: track.media,
    publisher_metadata: track.publisher_metadata,
    user: track.user,
    playlistTitle,
    composerName,
  };
}

function slugToTitle(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeName(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeNameForLookup(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugifyForPlaylist(text) {
  return normalizeName(text)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getLocalizedComposerName(name) {
  const normalized = normalizeNameForLookup(name);
  return props.composerNames?.[normalized] || name;
}

function getTrackComposerLabel(track) {
  if (!track) return "";
  const name = track.composerName || track.playlistTitle || "";
  if (!name) return "";
  return getLocalizedComposerName(name);
}

function setTrackRef(el, index) {
  if (el) {
    trackRefs.value[index] = el;
    return;
  }
  trackRefs.value[index] = null;
}

function scrollActiveTrackToTop(behavior = "smooth") {
  const container = trackListEl.value;
  const index = currentIndex.value;
  if (!container || index === null) return;
  const trackEl = trackRefs.value[index];
  if (!trackEl) return;
  const containerRect = container.getBoundingClientRect();
  const trackRect = trackEl.getBoundingClientRect();
  const offset = container.scrollTop + (trackRect.top - containerRect.top);
  if (typeof container.scrollTo === "function") {
    container.scrollTo({ top: offset, behavior });
  } else {
    container.scrollTop = offset;
  }
}

function formatDuration(durationMs) {
  const totalSeconds = Math.max(0, Math.floor((durationMs || 0) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value) => String(value).padStart(2, "0");
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${minutes}:${pad(seconds)}`;
}

function getComposerBySlug(slug) {
  const normalized = normalizeName(String(slug || "").replace(/-/g, " "));
  const match = timelineComposers.find(
    (composer) => normalizeName(composer.name) === normalized
  );
  return match || null;
}

function getEraIdForLifeSpan(birth, death) {
  if (!birth || !death) return null;
  let bestEraId = null;
  let bestOverlap = -Infinity;
  ERAS.forEach((era) => {
    const start = Math.max(era.from, birth);
    const end = Math.min(era.to, death);
    const overlap = Math.max(0, end - start);
    if (overlap > bestOverlap) {
      bestOverlap = overlap;
      bestEraId = era.id;
    }
  });
  return bestEraId;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleTracks(list, seed) {
  const result = list.slice();
  const rand = mulberry32(seed);
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildProxyUrl(path) {
  if (!path) return SOUND_CLOUD_PROXY_BASE;
  if (!SOUND_CLOUD_PROXY_BASE) return path;
  if (SOUND_CLOUD_PROXY_BASE.endsWith("/") && path.startsWith("/")) {
    return SOUND_CLOUD_PROXY_BASE + path.slice(1);
  }
  if (!SOUND_CLOUD_PROXY_BASE.endsWith("/") && !path.startsWith("/")) {
    return `${SOUND_CLOUD_PROXY_BASE}/${path}`;
  }
  return SOUND_CLOUD_PROXY_BASE + path;
}

async function resolveSoundCloudStreamUrl(track) {
  if (!track) {
    throw new Error("No track provided");
  }

  const transcodings =
    track.media && Array.isArray(track.media.transcodings)
      ? track.media.transcodings
      : [];

  if (transcodings.length) {
    let chosen = transcodings.find(
      (item) => item && item.format && item.format.protocol === "progressive"
    );

    if (!chosen) {
      chosen = transcodings[0];
    }

    if (chosen && chosen.url) {
      try {
        return await fetchSoundCloudTranscodingUrl(
          chosen.url,
          track.track_authorization
        );
      } catch (err) {
        console.error("SoundCloud transcoding failed, falling back", err);
      }
    }
  }

  if (!track.id) {
    throw new Error("No track id provided");
  }

  return fetchSoundCloudStreamUrl(track.id, track.track_authorization);
}

async function fetchSoundCloudTranscodingUrl(
  transcodingUrl,
  trackAuthorization
) {
  const params = new URLSearchParams();
  params.set("url", transcodingUrl);
  if (trackAuthorization) {
    params.set("track_authorization", trackAuthorization);
  }
  if (shouldUseSoundCloudAudioProxy) {
    params.set("proxy", "1");
  }
  const url = buildProxyUrl("/api/soundcloud/transcoding") + `?${params.toString()}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    const err = new Error(`SoundCloud transcoding error: ${resp.status}`);
    err.status = resp.status;
    throw err;
  }
  const data = await resp.json();
  if (!data?.url) {
    throw new Error("Transcoding response missing url");
  }
  return data.url;
}

async function fetchSoundCloudStreamUrl(trackId, trackAuthorization) {
  const params = new URLSearchParams();
  if (trackAuthorization) {
    params.set("track_authorization", trackAuthorization);
  }
  if (shouldUseSoundCloudAudioProxy) {
    params.set("proxy", "1");
  }
  const query = params.toString();
  const url =
    buildProxyUrl(`/api/soundcloud/streams/${trackId}`) +
    (query ? `?${query}` : "");
  const resp = await fetch(url);
  if (!resp.ok) {
    const err = new Error(`SoundCloud stream error: ${resp.status}`);
    err.status = resp.status;
    throw err;
  }
  const data = await resp.json();
  if (!data?.url) {
    throw new Error("Stream response missing url");
  }
  return data.url;
}

async function playTrackAt(index, { auto = false } = {}) {
  if (!isReady.value || loadingIndex.value !== null) return;
  const audio = audioEl.value;
  if (!audio) return;
  const track = tracks.value[index];
  if (!track) return;

  if (!auto && currentIndex.value === index && !audio.paused) {
    audio.pause();
    return;
  }

  setCurrentIndex(index);
  hasPlaybackError.value = false;
  loadingIndex.value = index;

  try {
    const trackId = track.id ?? index;
    if (currentTrackId.value === trackId && audio.src) {
      await audio.play();
    } else {
      const streamUrl = await resolveSoundCloudStreamUrl(track);
      if (!streamUrl) throw new Error("No stream URL returned");
      audio.src = streamUrl;
      await audio.play();
    }
    currentTrackId.value = trackId;
    updateMediaSessionMetadata(track);
  } catch (err) {
    console.error("Failed to play track", err);
    hasPlaybackError.value = true;
  } finally {
    loadingIndex.value = null;
  }
}

async function togglePlay() {
  if (!isReady.value) return;
  const audio = audioEl.value;
  if (!audio) return;

  if (!audio.paused) {
    audio.pause();
    return;
  }

  if (currentIndex.value === null) {
    setCurrentIndex(0);
  }
  await playTrackAt(currentIndex.value, { auto: true });
}

function stopPlayback() {
  const audio = audioEl.value;
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  isPlaying.value = false;
  currentTrackId.value = null;
}

function nextTrack() {
  if (!isReady.value) return;
  if (currentIndex.value === null) {
    setCurrentIndex(0);
    void playTrackAt(0, { auto: true });
    return;
  }
  const nextIndex = Math.min(currentIndex.value + 1, trackCount.value - 1);
  if (nextIndex === currentIndex.value) return;
  void playTrackAt(nextIndex, { auto: true });
}

function prevTrack() {
  if (!isReady.value) return;
  if (currentIndex.value === null) {
    setCurrentIndex(0);
    return;
  }
  const prevIndex = Math.max(currentIndex.value - 1, 0);
  if (prevIndex === currentIndex.value) return;
  void playTrackAt(prevIndex, { auto: true });
}

function handlePlay() {
  isPlaying.value = true;
}

function handlePause() {
  isPlaying.value = false;
}

function handleEnded() {
  isPlaying.value = false;
  if (currentIndex.value === null) return;
  const nextIndex = currentIndex.value + 1;
  if (nextIndex < trackCount.value) {
    void playTrackAt(nextIndex, { auto: true });
  }
}

function handleAudioError() {
  hasPlaybackError.value = true;
  isPlaying.value = false;
}

function updateMediaSessionMetadata(track) {
  if (!("mediaSession" in navigator) || typeof MediaMetadata === "undefined") return;
  const title = track?.title || "Classical Music";
  const artist =
    track?.publisher_metadata?.artist ||
    track?.user?.username ||
    track?.user?.full_name ||
    "";
  const album = track?.publisher_metadata?.album_title || track?.playlistTitle || "";
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist,
    album,
    artwork: [
      {
        src: "/images/about_music_logo_padding.png",
        type: "image/png",
      },
    ],
  });
}

function safeSetMediaSessionAction(action, handler) {
  if (!("mediaSession" in navigator)) return;
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (err) {
    // Ignore unsupported actions.
  }
}

function registerMediaSessionHandlers() {
  if (!("mediaSession" in navigator)) return;

  safeSetMediaSessionAction("play", () => {
    if (audioEl.value && audioEl.value.paused) {
      void togglePlay();
    }
  });
  safeSetMediaSessionAction("pause", () => {
    if (audioEl.value && !audioEl.value.paused) {
      void togglePlay();
    }
  });
  safeSetMediaSessionAction("stop", () => {
    stopPlayback();
  });
  safeSetMediaSessionAction("previoustrack", () => {
    prevTrack();
  });
  safeSetMediaSessionAction("nexttrack", () => {
    nextTrack();
  });
  safeSetMediaSessionAction("seekbackward", () => {
    prevTrack();
  });
  safeSetMediaSessionAction("seekforward", () => {
    nextTrack();
  });
}

function clearMediaSessionHandlers() {
  [
    "play",
    "pause",
    "stop",
    "previoustrack",
    "nexttrack",
    "seekbackward",
    "seekforward",
  ].forEach((action) => {
    safeSetMediaSessionAction(action, null);
  });
}

onMounted(() => {
  void loadPlaylists();
  registerMediaSessionHandlers();
});

onBeforeUnmount(() => {
  stopPlayback();
  clearMediaSessionHandlers();
});

watch(
  () => [baseTracks.value, playOrder.value, shuffleSeed.value],
  ([next, order]) => {
    const ordered = Array.isArray(next) ? next.slice() : [];
    if (order === "shuffle") {
      tracks.value = shuffleTracks(ordered, shuffleSeed.value);
    } else {
      tracks.value = ordered;
    }
  },
  { immediate: true }
);

watch(playOrder, (next) => {
  if (next === "shuffle") {
    shuffleSeed.value = Date.now();
  }
});

watch(
  () => tracks.value,
  (next) => {
    if (!next.length) {
      stopPlayback();
      currentIndex.value = null;
      if (trackListEl.value) {
        trackListEl.value.scrollTop = 0;
      }
      return;
    }
    if (currentTrackId.value !== null) {
      const nextIndex = next.findIndex(
        (track) => (track.id ?? null) === currentTrackId.value
      );
      if (nextIndex !== -1) {
        currentIndex.value = nextIndex;
        return;
      }
    }
    stopPlayback();
    currentIndex.value = 0;
    if (trackListEl.value) {
      trackListEl.value.scrollTop = 0;
    }
  }
);

watch(
  () => currentIndex.value,
  async (next) => {
    if (next === null) return;
    await nextTick();
    scrollActiveTrackToTop();
  }
);

watch(
  () => tracks.value,
  async (next) => {
    if (!next.length || currentIndex.value === null) return;
    await nextTick();
    scrollActiveTrackToTop("auto");
  }
);
</script>

<style scoped>
.radio,
.radio * {
  font-family: "Source Sans 3";
}

.radio {
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 0 0px;
  display: flex;
  justify-content: center;
  background: #ffffff;
}

.radio__card {
  width: min(980px, 100%);
  padding: 0 36px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
  min-height: 0;
}

.radio__header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.radio__title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.radio__title {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #101419;
}

.sc-powered {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
}

.sc-powered__img {
  height: 28px;
  display: block;
}

.radio__filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio__filter {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio__filter-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.radio__filter-options {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
}

.radio__filter-options--wrap {
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background: #f8fafc;
  max-width: 450px;
  padding: 8px 8px;
  width: 100%;
}

.radio__filter-pill {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #f8fafc;
  color: #111827;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, background-color 0.12s ease,
    border-color 0.12s ease;
}

.radio__filter-pill.is-active {
  background: #111827;
  color: #ffffff;
  border-color: transparent;
}

.radio__filter-check {
  display: inline-flex;
  align-items: center;
  gap: 0px;
  padding: 0px 0px;
  /* border-radius: 999px; */
  /* background: #f8fafc; */
  /* border: 1px solid rgba(0, 0, 0, 0.08); */
  font-size: 14px;
  color: #111827;
}

.radio__filter-check input {
  accent-color: #111827;
}

.radio__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.radio__button {
  width: 42px;
  height: 42px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #f8fafc;
  color: #111827;
  border-radius: 10px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease,
    background-color 0.12s ease, border-color 0.12s ease;
}

.radio__button:disabled {
  opacity: 0.45;
  cursor: default;
}

.radio__button:active:not(:disabled) {
  transform: translateY(1px);
}

.radio__button--primary {
  background: #111827;
  color: #ffffff;
  border-color: transparent;
}

.radio__meta {
  margin-left: auto;
  font-size: 13px;
  color: #6b7280;
}

.radio__status {
  min-height: 20px;
  font-size: 14px;
  color: #111827;
}

.radio__status--error {
  color: #b91c1c;
}

.radio__now {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.radio__now-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.radio__now-title {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.radio__list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: scroll;
  scrollbar-gutter: auto;
  padding-bottom: 0px;
  box-sizing: border-box;
  scroll-padding-bottom: 24px;
  scrollbar-width: auto;
}

.radio__list::-webkit-scrollbar {
  width: 10px;
}

.radio__list::-webkit-scrollbar-track {
  background: none;
}

.radio__list::-webkit-scrollbar-thumb {
  background: #101827;
  border-radius: 999px;
  border: 2px solid #f1f5f9;
}

.radio__track {
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  background: transparent;
  cursor: pointer;
}

.radio__track:first-child {
  border-top: 1px solid #ddd;
}

.radio__track.is-active {
  background: #dfe0e1;
}

.sc-track__title {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  overflow: hidden;
}

.sc-track__title-text {
  flex: 1 1 auto;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transform: translateX(0);
}

.sc-track__title.is-playing .sc-track__title-text {
  animation: track-marquee 6s ease-in-out infinite alternate;
}

.sc-track__composer {
  font-weight: 600;
  color: #111827;
}

.sc-track__separator {
  color: #6b7280;
}

.sc-track__work {
  color: #111827;
}

.sc-track__duration {
  margin-left: auto;
  font-size: 12px;
  color: #6b7280;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  background: #ffffff;
  z-index: 100;
  padding: 0px 5px;
}

.radio__track:focus-visible {
  outline: 2px solid #0f172a;
  outline-offset: 2px;
}

.radio__icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.radio__audio {
  display: none;
}

@keyframes track-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-28px);
  }
}

@media (max-width: 900px) {
  .radio__card {
    padding: 0 20px 24px;
  }
}
</style>
