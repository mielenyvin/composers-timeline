<template>
  <div class="app">
    <!-- Top bar -->
    <header class="topbar">
      <button class="menu-button" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="menu-icon"></span>
      </button>
      <img class="logo" src="/favicon.png" alt="Logo" @click="returnToTitle" />
      <div class="app-title" role="button" @click="returnToTitle">The Story of Classical Music in Time
      </div>
    </header>

    <!-- Side menu -->
    <aside class="side-menu" :class="{ 'side-menu--open': isMenuOpen }">
      <nav class="menu-nav">
        <button class="menu-item" :class="{ 'menu-item--active': currentView === 'composers' }"
          @click="selectView('composers')">
          Composers
        </button>
        <button class="menu-item" :class="{ 'menu-item--active': currentView === 'about' }"
          @click="selectView('about')">
          About
        </button>
      </nav>
    </aside>

    <!-- Backdrop for mobile when menu is open -->
    <div v-if="isMenuOpen" class="backdrop" @click="closeMenu"></div>

    <!-- Main content -->
    <main class="content">
      <section v-if="currentView === 'composers'">
        <div class="filter-dock">
          <div class="control-stack control-pill" role="group" aria-label="Timeline controls">
            <div v-if="!isFilterOpen" class="nav-controls" role="group" aria-label="Timeline navigation">
              <button
                type="button"
                class="control-btn"
                :disabled="isAtTimelineStart"
                @click="goToStart"
                aria-label="Jump to start of timeline"
              >
                ⇤
              </button>
              <button
                type="button"
                class="control-btn"
                :disabled="isAtTimelineEnd"
                @click="goToEnd"
                aria-label="Jump to end of timeline"
              >
                ⇥
              </button>
            </div>

            <div v-if="!isFilterOpen" class="scale-controls" role="group" aria-label="Adjust timeline size">
              <button
                type="button"
                class="control-btn"
                :disabled="isAtMinHeight"
                @click="adjustSizes(-1)"
                aria-label="Make timeline blocks smaller"
              >
                −
              </button>
              <button
                type="button"
                class="control-btn"
                :disabled="isAtMaxHeight"
                @click="adjustSizes(1)"
                aria-label="Make timeline blocks larger"
              >
                +
              </button>
            </div>

            <button
              class="filter-dock__toggle control-btn control-primary"
              :aria-expanded="isFilterOpen"
              aria-controls="filter-panel"
              @click="toggleFilters"
              aria-label="Filter composers"
            >
              <svg class="filter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z"></path>
              </svg>
            </button>

            <transition name="fade">
              <div
                v-if="isFilterOpen"
                id="filter-panel"
                class="filter-panel"
                role="dialog"
                aria-label="Composer filters"
              >
                <div class="filter-panel__options">
                  <label
                    v-for="group in filterGroups"
                    :key="group.id"
                    class="filter-panel__item"
                  >
                    <input
                      v-model="filterState[group.id]"
                      type="checkbox"
                      class="filter-panel__checkbox"
                      :aria-label="`Toggle ${group.label}`"
                    />
                    <span class="filter-panel__label">{{ group.label }}</span>
                  </label>
                </div>
                <div class="filter-panel__actions">
                  <button type="button" class="filter-panel__ok control-btn" @click="closeFilters" aria-label="Close filters">
                    OK
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <ComposersTimeline :composers="sortedComposers" :settings="timelineSettings" />
      </section>

      <section v-else-if="currentView === 'about'" class="about">
        <div class="about__card">
          <p class="about__eyebrow">About</p>
          <h1 class="about__title">Understand classical music by ear</h1>
          <p class="about__text">
            Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart -
            it can be hard to tell immediately.
          </p>
          <p class="about__text">
            This site is designed to help you hear the character of each era and each composer, compare their stories
            and musical voices, and never get lost in the names again.
          </p>

          <div class="about__author">
            <img class="about__photo" src="/images/dk3-min.jpg" alt="Dmitrii Kotikov" loading="lazy" />
            <div class="about__author-body">
              <div class="about__author-label">Project creator and author</div>
              <div class="about__author-name">Dmitrii Kotikov</div>
              <a class="about__link" href="https://www.linkedin.com/in/dmitrykotikov/" target="_blank" rel="noreferrer">
                Check out Dmitrii Kotikov’s profile on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Composer modal -->
    <transition name="fade">
      <div v-if="isModalOpen" class="composer-modal" @click.self="closeModal">
        <div class="composer-modal__content">
          <header class="composer-modal__header">
            <div class="composer-modal__titles">
              <h2 class="composer-modal__name">{{ currentComposer?.name }}</h2>
              <p class="composer-modal__dates" v-if="currentComposer">
                {{ currentComposer.birth }} — {{ currentComposer.death }}
              </p>
            </div>
            <button class="composer-modal__close" @click="closeModal" aria-label="Close composer details">×</button>
          </header>

          <div class="composer-modal__body">
            <div v-if="currentImage" class="composer-modal__hero">
              <img class="composer-modal__photo" :src="currentImage" :alt="currentComposer?.name" />

              <div class="composer-modal__nav composer-modal__nav--overlay">
                <button class="composer-modal__arrow" @click="prevComposer" :disabled="!hasPrev" aria-label="Previous">
                  ←
                </button>
                <span class="composer-modal__position">
                  {{ (currentIndex ?? 0) + 1 }} / {{ sortedComposers.length }}
                </span>
                <button class="composer-modal__arrow" @click="nextComposer" :disabled="!hasNext" aria-label="Next">
                  →
                </button>
              </div>

              <div class="composer-modal__hero-meta">
                <div class="composer-modal__name-small">{{ currentComposer?.name }}</div>
                <div class="composer-modal__dates-small" v-if="currentComposer">
                  {{ currentComposer.birth }} — {{ currentComposer.death }}
                </div>
              </div>
            </div>

            <div class="composer-modal__description">
              <ul v-if="currentDescription" class="composer-modal__facts">
                <li v-for="(line, i) in currentDescription.split('\n')" :key="i">
                  <span class="composer-modal__fact-text">{{ line }}</span>
                </li>
              </ul>
              <p v-else class="composer-modal__muted">No description yet.</p>
            </div>

            <div class="composer-modal__playlist">
              <div class="composer-modal__playlist-title">Playlist placeholder</div>
              <div class="composer-modal__playlist-box">Embed your playlist here</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import ComposersTimeline from "./components/ComposersTimeline.vue";
import { composers, getComposerImage } from "./timeline-core";
import composerFactsRaw from "../composers.md?raw";

const isMenuOpen = ref(false);
const currentView = ref("composers");

const MIN_BAR_HEIGHT = 25;
const MAX_BAR_HEIGHT = 150;
const MIN_WIDTH_FACTOR = 0.2; // убран экстремально маленький масштаб
const MAX_WIDTH_FACTOR = 1.5; // длиннее на ~1.5x на максимуме
const WIDTH_CURVE = 0.35; // степень, чтобы 50px было близко к базовому 1
const FONT_MAX_SMALL = 1.7;
const FONT_MIN_LARGE = 0.95;
const FONT_CURVE = 0.6;
const SIZE_STEPS = [30, 40, 50, 70, 100]; // две меньше, одна текущая, две больше
const DEFAULT_SIZE_INDEX = 2;

function clamp(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function computeWidthScale(height) {
  const normalized = clamp(
    (height - MIN_BAR_HEIGHT) / (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT),
    0,
    1
  );
  const curved = Math.pow(normalized, WIDTH_CURVE);
  const raw =
    MIN_WIDTH_FACTOR + (MAX_WIDTH_FACTOR - MIN_WIDTH_FACTOR) * curved;
  return clamp(raw, MIN_WIDTH_FACTOR, MAX_WIDTH_FACTOR);
}

function computeFontScale(height) {
  const normalized = clamp(
    (height - MIN_BAR_HEIGHT) / (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT),
    0,
    1
  );
  const curved = Math.pow(normalized, FONT_CURVE);
  const raw = FONT_MAX_SMALL - (FONT_MAX_SMALL - FONT_MIN_LARGE) * curved;
  return clamp(raw, FONT_MIN_LARGE, FONT_MAX_SMALL);
}

const filterGroups = [
  {
    id: "essentials",
    label: "Essential Icons",
    composers: [
      "Johann Sebastian Bach",
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Pyotr Ilyich Tchaikovsky",
      "Frédéric Chopin",
      "Antonio Vivaldi",
      "Johannes Brahms",
      "Giuseppe Verdi",
      "Claude Debussy",
    ],
  },
  {
    id: "core",
    label: "Core Classics",
    composers: [
      "Joseph Haydn",
      "George Frideric Handel",
      "Franz Schubert",
      "Felix Mendelssohn",
      "Robert Schumann",
      "Franz Liszt",
      "Antonín Dvořák",
      "Edvard Grieg",
      "Maurice Ravel",
      "Giacomo Puccini",
      "Gustav Mahler",
      "Sergei Rachmaninoff",
      "Domenico Scarlatti",
      "Camille Saint-Saëns",
      "Georges Bizet",
    ],
  },
  {
    id: "expanded",
    label: "Extended Classics",
    composers: [
      "Niccolò Paganini",
      "Hector Berlioz",
      "Mikhail Glinka",
      "Johann Strauss II",
      "Alexander Borodin",
      "Jacques Offenbach",
      "Modest Mussorgsky",
      "Nikolai Rimsky-Korsakov",
      "Alexander Scriabin",
      "Erik Satie",
      "Sergei Prokofiev",
      "Dmitri Shostakovich",
    ],
  },
];

const filterState = ref(
  filterGroups.reduce((acc, group) => {
    acc[group.id] = true;
    return acc;
  }, {})
);

const isFilterOpen = ref(false);
const timelineSettings = reactive({
  barHeight: SIZE_STEPS[DEFAULT_SIZE_INDEX],
  widthScale: computeWidthScale(SIZE_STEPS[DEFAULT_SIZE_INDEX]),
  fontScale: computeFontScale(SIZE_STEPS[DEFAULT_SIZE_INDEX]),
});
const sizeIndex = ref(DEFAULT_SIZE_INDEX);

const isAtMinHeight = computed(() => sizeIndex.value <= 0);
const isAtMaxHeight = computed(() => sizeIndex.value >= SIZE_STEPS.length - 1);
const isAtTimelineStart = ref(true);
const isAtTimelineEnd = ref(false);

function applySize(index) {
  const clampedIndex = clamp(index, 0, SIZE_STEPS.length - 1);
  sizeIndex.value = clampedIndex;
  const height = SIZE_STEPS[clampedIndex];
  timelineSettings.barHeight = height;
  timelineSettings.widthScale = computeWidthScale(height);
  timelineSettings.fontScale = computeFontScale(height);
}

function adjustSizes(direction) {
  const delta = direction > 0 ? 1 : -1;
  applySize(sizeIndex.value + delta);
}

function updateScrollFlags() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;
  const maxScrollX = Math.max(0, timeline.scrollWidth - timeline.clientWidth);
  const maxScrollY = Math.max(0, timeline.scrollHeight - timeline.clientHeight);
  isAtTimelineStart.value = timeline.scrollLeft <= 1 && timeline.scrollTop <= 1;
  isAtTimelineEnd.value =
    timeline.scrollLeft >= maxScrollX - 1 && timeline.scrollTop >= maxScrollY - 1;
}

function goToStart() {
  if (window.timeline && typeof window.timeline.goToStart === "function") {
    window.timeline.goToStart();
  }
  updateScrollFlags();
}

function goToEnd() {
  if (window.timeline && typeof window.timeline.goToEnd === "function") {
    window.timeline.goToEnd();
  }
  updateScrollFlags();
}

const enabledComposerNames = computed(() => {
  const enabledIds = filterGroups
    .map((g) => g.id)
    .filter((id) => filterState.value[id]);
  const set = new Set();
  enabledIds.forEach((id) => {
    const group = filterGroups.find((g) => g.id === id);
    group?.composers?.forEach((name) => set.add(name));
  });
  return set;
});

const filteredComposers = computed(() => {
  const allowed = enabledComposerNames.value;
  if (!allowed.size) return [];
  return composers.filter((composer) => allowed.has(composer.name));
});

const sortedComposers = computed(() =>
  [...filteredComposers.value].sort((a, b) => a.birth - b.birth)
);

const descriptionsByKey = parseComposerFacts(composerFactsRaw);
const currentIndex = ref(null);

const isModalOpen = computed(() => currentIndex.value !== null);
const currentComposer = computed(() =>
  currentIndex.value === null ? null : sortedComposers.value[currentIndex.value]
);
const currentImage = computed(() =>
  currentComposer.value ? getComposerImage(currentComposer.value.name) : null
);
const currentDescription = computed(() =>
  currentComposer.value
    ? getComposerDescription(currentComposer.value.name)
    : ""
);
const hasPrev = computed(() => (currentIndex.value ?? 0) > 0);
const hasNext = computed(
  () =>
    currentIndex.value !== null &&
    currentIndex.value < sortedComposers.value.length - 1
);

function normalizeName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseComposerFacts(raw) {
  const lines = raw.split("\n");
  const map = {};
  let currentKey = null;
  let buffer = [];
  const flush = () => {
    if (currentKey) {
      map[currentKey] = buffer.join("\n").trim();
    }
    buffer = [];
  };

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+?)\s+essentials\b/i);
    if (heading) {
      flush();
      currentKey = normalizeName(heading[1]);
      continue;
    }
    if (currentKey && line.startsWith("- ")) {
      buffer.push(line.replace(/^- /, "").trim());
    }
  }
  flush();
  return map;
}

function getComposerDescription(name) {
  const normalized = normalizeName(name);
  if (descriptionsByKey[normalized]) {
    return descriptionsByKey[normalized];
  }

  const parts = normalized.split(" ").filter(Boolean);
  const lastWord = parts[parts.length - 1];
  if (lastWord && descriptionsByKey[lastWord]) {
    return descriptionsByKey[lastWord];
  }

  return "";
}

function updateViewFromLocation(pathname = window.location.pathname) {
  currentView.value = pathname === "/about" ? "about" : "composers";
}

const handlePopState = () => updateViewFromLocation();

function navigateTo(path) {
  if (window.location.pathname !== path) {
    history.pushState({}, "", path);
    updateViewFromLocation(path);
  }
  isMenuOpen.value = false;
}

function selectView(view) {
  navigateTo(view === "about" ? "/about" : "/");
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function toggleFilters() {
  isFilterOpen.value = !isFilterOpen.value;
}

function closeFilters() {
  isFilterOpen.value = false;
}


function returnToTitle() {
  navigateTo("/");
  if (window.timeline && typeof window.timeline.goToStart === "function") {
    window.timeline.goToStart();
  }
}

function handleComposerSelect(event) {
  const detail = event.detail;
  const byLane = detail?.laneIndex;
  if (Number.isInteger(byLane) && sortedComposers.value[byLane]) {
    currentIndex.value = byLane;
    return;
  }
  const name = detail?.composer?.name;
  if (!name) return;
  const idx = sortedComposers.value.findIndex((c) => c.name === name);
  if (idx >= 0) currentIndex.value = idx;
}

function closeModal() {
  currentIndex.value = null;
}

function prevComposer() {
  if (!hasPrev.value || currentIndex.value === null) return;
  currentIndex.value -= 1;
}

function nextComposer() {
  if (!hasNext.value || currentIndex.value === null) return;
  currentIndex.value += 1;
}

onMounted(() => {
  updateViewFromLocation();
  // Fallback: if timeline instance exposes subscription hook later
  if (window.timeline && typeof window.timeline.onBarClick === "function") {
    window.timeline.onBarClick(handleComposerSelect);
  }
  window.addEventListener("popstate", handlePopState);
  window.addEventListener("composer-select", handleComposerSelect);
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.addEventListener("scroll", updateScrollFlags, { passive: true });
    updateScrollFlags();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
  window.removeEventListener("composer-select", handleComposerSelect);
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.removeEventListener("scroll", updateScrollFlags);
  }
});

watch(isModalOpen, (open) => {
  if (open) {
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  } else {
    document.documentElement.style.overscrollBehavior = "";
    document.body.style.overscrollBehavior = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  }
});

watch(currentIndex, (laneIndex) => {
  const timeline = window.timeline;
  if (!timeline || typeof timeline.setSelectedLane !== "function") return;
  if (Number.isInteger(laneIndex)) {
    timeline.setSelectedLane(laneIndex);
  } else {
    timeline.setSelectedLane(null);
  }
});

watch(
  () => sortedComposers.value.map((c) => c.name),
  (names) => {
    if (currentIndex.value === null) return;
    const current = currentComposer.value;
    if (!current) {
      currentIndex.value = null;
      return;
    }
    const nextIndex = names.findIndex((name) => name === current.name);
    if (nextIndex === -1) {
      currentIndex.value = null;
    } else {
      currentIndex.value = nextIndex;
    }
  }
);
</script>

<style scoped>
.content {
  position: relative;
  overflow: hidden;
}

.content>section {
  height: 100%;
}

.logo {
  height: 70%;
  object-fit: contain;
  cursor: pointer;
}

.about__card {
  background: none;
  border-radius: 0;
  padding: 36px;
  box-shadow: none;
  backdrop-filter: none;
}

.about {
  height: 100%;
  overflow-y: auto;
}

.about__eyebrow {
  margin: 0 0 8px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.about__title {
  margin: 0 0 18px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.about__text {
  margin: 0 0 14px;
  font-size: 16px;
  line-height: 1.6;
  color: #1f2937;
}

.about__author {
  margin-top: 28px;
  padding: 18px;
  border-radius: 14px;
  border: 1px dashed rgba(148, 163, 184, 0.6);
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.7);
}

.about__photo {
  width: 50%;
  max-width: 500px;
  border-radius: 14px;
  object-fit: cover;
}

.about__author-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.about__author-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.about__author-name {
  font-size: 18px;
  font-weight: 600;
}

.about__link {
  color: #2563eb;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  width: fit-content;
}

.about__link:hover {
  border-bottom-color: currentColor;
}

.composer-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2000;
}

.composer-modal__content {
  width: min(960px, 100%);
  max-height: 90vh;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.composer-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 24px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.composer-modal__titles {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.composer-modal__name {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.composer-modal__dates {
  margin: 0;
  color: #374151;
  font-weight: 500;
}

.composer-modal__close {
  border: none;
  background: #e5e7eb;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  font-size: 20px;
  cursor: pointer;
}

.composer-modal__body {
  padding: 12px 24px 24px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  column-gap: 16px;
  row-gap: 16px;
}

.composer-modal__hero {
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  align-items: start;
}

.composer-modal__photo {
  grid-column: 1;
  grid-row: 1;
  width: 200px;
  max-width: 35vw;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: none;
}

.composer-modal__hero-meta {
  display: none;
}

.composer-modal__nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}

.composer-modal__nav--overlay {
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  align-self: center;
}

.composer-modal__arrow {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #f8fafc;
  font-size: 18px;
  cursor: pointer;
}

.composer-modal__arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

.composer-modal__position {
  color: #4b5563;
  font-weight: 600;
  white-space: nowrap;
}

.composer-modal__description {
  grid-column: 1 / -1;
  color: #111827;
  line-height: 1.6;
  font-size: 16px;
}

.composer-modal__muted {
  color: #9ca3af;
}

.composer-modal__facts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.composer-modal__facts li {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px dashed rgba(148, 163, 184, 0.6);
  box-shadow: none;
  position: relative;
  overflow: hidden;
}

.composer-modal__facts li::before {
  content: none;
}

.composer-modal__fact-text {
  display: block;
  position: relative;
}

.composer-modal__playlist {
  grid-column: 1 / -1;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.composer-modal__playlist-title {
  font-weight: 600;
  color: #111827;
}

.composer-modal__playlist-box {
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 18px;
  background: #f8fafc;
  text-align: center;
  color: #6b7280;
}

.filter-dock {
  position: fixed;
  left: 12px;
  bottom: 24px;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.nav-controls {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  gap: 10px;
}

.scale-controls {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  gap: 10px;
}

.control-stack {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 10px;
}

.filter-icon {
  width: 18px;
  height: 18px;
  display: block;
  fill: currentColor;
}

.control-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(8px);
}

.control-btn {
  height: 32px;
  min-width: 38px;
  padding: 0 10px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.16);
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
}

.control-btn:hover {
  background: rgba(15, 23, 42, 0.5);
}

.control-btn:active {
  transform: translateY(1px);
}

.control-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}

.control-primary {
  border-color: rgba(15, 23, 42, 0.18);
  background: #ffffff;
  color: #101827;
}

.control-primary:hover {
  filter: brightness(1.02);
}


.filter-dock__toggle {
  width: 100%;
  justify-content: center;
}

.filter-panel {
  position: relative;
  width: 180px;
  max-width: calc(100vw - 32px);
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 10px;
  box-shadow: none;
  backdrop-filter: blur(8px);
}



.filter-panel__options {
  display: grid;
  gap: 0px;
}

.filter-panel__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 2px;
  border: none;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
}


.filter-panel__checkbox {
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
}



.filter-panel__label {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
}

.filter-panel__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.filter-panel__ok {
  padding: 0 14px;
  height: 32px;
  width: 100%;
  font-weight: 600;
}

@media (max-width: 720px) {
  .filter-dock {
    left: 10px;
    right: 10px;
    bottom: 12px;
  }

  .filter-panel {
    width: 180px;
    max-width: 100%;
  }

  .filter-panel__item {
    grid-template-columns: auto 1fr;
    align-items: flex-start;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 720px) {
  .composer-modal {
    padding: calc(env(safe-area-inset-top, 16px) + 12px) 0 0;
    align-items: flex-start;
  }

  .composer-modal__content {
    border-radius: 16px 16px 0 0;
    width: calc(100% - 12px);
    max-height: calc(100vh - env(safe-area-inset-top, 16px) - 16px);
    margin: 0 auto;
  }

  .composer-modal__body {
    padding: 10px 16px 18px;
    display: flex;
    flex-direction: column;
  }

  .composer-modal__name {
    font-size: 22px;
  }

  .composer-modal__hero {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 14px;
    align-items: start;
  }

  .composer-modal__photo {
    grid-column: 1;
    grid-row: 1;
    width: 140px;
    max-width: 40vw;
    height: auto;
  }

  .composer-modal__name-small {
    font-size: 16px;
  }
}

@media (max-width: 640px) {
  .about__card {
    padding: 26px 22px;
  }

  .about__title {
    font-size: 26px;
    line-height: 1.2;
  }

  .about__author {
    flex-direction: column;
    align-items: flex-start;
  }

  .about__photo {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
