<template>
  <div class="app">
    <!-- Top bar -->
    <header class="topbar">
      <button class="menu-button" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="menu-icon"></span>
      </button>
      <img class="logo" src="/favicon.png" alt="Logo" @click="returnToTitle" />
      <div class="app-title" role="button" @click="returnToTitle">
        Classical Composers Timeline5
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
        <ComposersTimeline />
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
              <div class="composer-modal__hero-meta">
                <div class="composer-modal__name-small">{{ currentComposer?.name }}</div>
                <div class="composer-modal__dates-small" v-if="currentComposer">
                  {{ currentComposer.birth }} — {{ currentComposer.death }}
                </div>
              </div>
            </div>

            <div class="composer-modal__nav">
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
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import ComposersTimeline from "./components/ComposersTimeline.vue";
import { composers, getComposerImage } from "./timeline-core";
import composerFactsRaw from "../composers.md?raw";

const isMenuOpen = ref(false);
const currentView = ref("composers");

const sortedComposers = computed(() =>
  [...composers].sort((a, b) => a.birth - b.birth)
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
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
  window.removeEventListener("composer-select", handleComposerSelect);
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
  height: 80%;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.composer-modal__hero {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.composer-modal__photo {
  width: 200px;
  max-width: 35vw;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.composer-modal__hero-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.composer-modal__name-small {
  font-weight: 700;
  font-size: 18px;
}

.composer-modal__dates-small {
  color: #4b5563;
  font-weight: 500;
}

.composer-modal__nav {
  display: flex;
  align-items: center;
  gap: 12px;
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
}

.composer-modal__description {
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
  background: linear-gradient(145deg, #f8fafc 0%, #eef2f7 100%);
  border: 1px solid rgba(15, 23, 42, 0.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.composer-modal__facts li::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.08), transparent 40%);
  pointer-events: none;
}

.composer-modal__fact-text {
  display: block;
  position: relative;
}

.composer-modal__playlist {
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
  }

  .composer-modal__name {
    font-size: 22px;
  }

  .composer-modal__hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .composer-modal__photo {
    width: 100%;
    max-width: 160px;
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
