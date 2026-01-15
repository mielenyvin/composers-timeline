<template>
  <div class="app">
    <!-- Top bar -->
    <header class="topbar">
      <button class="menu-button" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="menu-icon"></span>
      </button>
      <img class="logo" src="/favicon.png" alt="Logo" @click="returnToTitle" />
      <div class="app-title" role="button" @click="returnToTitle">{{ appTitle }}</div>
      <div class="language-switcher">
        <label class="visually-hidden" for="language-select">{{ languageLabel }}</label>
        <select id="language-select" class="language-select" v-model="language" :aria-label="languageLabel"
          @change="handleLanguageChange">
          <option v-for="option in languageOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </header>

    <!-- Side menu -->
    <aside class="side-menu" :class="{ 'side-menu--open': isMenuOpen }">
      <nav class="menu-nav">
        <button class="menu-item" :class="{ 'menu-item--active': currentView === 'composers' }"
          @click="selectView('composers')">
          {{ navigationLabels.composers }}
        </button>
        <button class="menu-item" :class="{ 'menu-item--active': currentView === 'about' }"
          @click="selectView('about')">
          {{ navigationLabels.about }}
        </button>
      </nav>
    </aside>

    <!-- Backdrop for mobile when menu is open -->
    <div v-if="isMenuOpen" class="backdrop" @click="closeMenu"></div>

    <!-- Main content -->
    <main class="content">
      <section v-if="currentView === 'composers'">
        <div
          class="filter-dock"
          :style="filterDockStyle"
          ref="filterDockRef"
          @pointerdown="startFilterDockDrag"
          @touchend="handleFilterDockTouchEnd"
        >
          <div class="control-stack control-pill" role="group" aria-label="Timeline controls">
            <div class="filter-dock__header">
              <button type="button" class="filter-dock__collapse control-btn" :aria-pressed="isFilterDockMinimized"
                :aria-label="isFilterDockMinimized ? filterDockLabels.restore : filterDockLabels.minimize"
                @click="toggleFilterDockMinimized">
                <span aria-hidden="true">{{ isFilterDockMinimized ? "↑" : "↓" }}</span>
              </button>
            </div>

            <div v-if="!isFilterOpen && !isFilterDockMinimized" class="nav-controls" role="group"
              aria-label="Timeline navigation">
              <button type="button" class="control-btn" :disabled="isAtTimelineStart" @click="goToStart"
                aria-label="Jump to start of timeline">
                ⇤
              </button>
              <button type="button" class="control-btn" :disabled="isAtTimelineEnd" @click="goToEnd"
                aria-label="Jump to end of timeline">
                ⇥
              </button>
            </div>

            <div v-if="!isFilterOpen && !isFilterDockMinimized" class="scale-controls" role="group"
              aria-label="Adjust timeline size">
              <button type="button" class="control-btn" :disabled="isAtMinHeight" @click="adjustSizes(-1)"
                aria-label="Make timeline blocks smaller">
                −
              </button>
              <button type="button" class="control-btn" :disabled="isAtMaxHeight" @click="adjustSizes(1)"
                aria-label="Make timeline blocks larger">
                +
              </button>
            </div>

            <button v-if="!isFilterDockMinimized" class="filter-dock__toggle control-btn control-primary"
              :aria-expanded="isFilterOpen" aria-controls="filter-panel" @click="toggleFilters"
              aria-label="Filter composers">
              <svg class="filter-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z"></path>
              </svg>
            </button>

            <transition
              name="filter-fade"
              @after-enter="handleFilterPanelAfterTransition"
              @after-leave="handleFilterPanelAfterTransition"
            >
              <div v-if="isFilterOpen" id="filter-panel" class="filter-panel" role="dialog"
                aria-label="Composer filters">
                <div class="filter-panel__options">
                  <label v-for="group in filterGroups" :key="group.id" class="filter-panel__item">
                    <input v-model="filterState[group.id]" type="checkbox" class="filter-panel__checkbox"
                      :aria-label="`Toggle ${getFilterLabel(group.id)}`" />
                    <span class="filter-panel__label">{{ getFilterLabel(group.id) }}</span>
                  </label>
                </div>
                <div class="filter-panel__actions">
                  <button type="button" class="filter-panel__ok control-btn" @click="closeFilters"
                    aria-label="Close filters">
                    {{ filterApplyLabel }}
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <ComposersTimeline :composers="sortedComposers" :settings="timelineSettings" :era-labels="eraLabels" />
      </section>

      <section v-else-if="currentView === 'about'" class="about">
        <div class="about__card">
          <img class="about__logo" src="/images/about_music_logo.png" alt="Music logo" loading="lazy" />

          <h1 class="about__title">{{ aboutContent.title }}</h1>
          <p class="about__text">{{ aboutContent.intro }}</p>
          <p class="about__text">{{ aboutContent.goal }}</p>


          <div class="about__author">
            <img class="about__photo" src="/images/dk3-min.jpg" alt="Dmitrii Kotikov" loading="lazy" />
            <div class="about__author-body">
              <div class="about__author-label">{{ aboutContent.authorLabel }}</div>
              <div class="about__author-name">{{ aboutContent.authorName }}</div>
              <a class="about__link" href="https://www.linkedin.com/in/dmitrykotikov/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a class="about__link" href="https://thequot.es/" target="_blank" rel="noreferrer">
                thequot.es
              </a>
            </div>
          </div>

          <div class="about__contributors">
            <div class="about__contributors-title">{{ aboutContent.contributorsTitle }}</div>
            <ul class="about__contributors-list">
              <li v-for="person in aboutContributors" :key="person.url" class="about__contributors-item">
                <span class="about__contributors-name">{{ person.name }}</span>
                <a class="about__contributors-link" :href="person.url" target="_blank" rel="noreferrer">
                  {{ person.linkText }}
                </a>
                <div
                  v-if="person.url === 'https://facebook.com/olga.shibanova'"
                  class="about__contributors-toggle"
                >
                  <label class="about__contributors-toggle-label">
                    <input
                      v-model="testFeaturesEnabled"
                      class="about__contributors-toggle-input"
                      type="checkbox"
                      aria-label="Toggle test features"
                    />
                    <span>{{ testFeaturesLabel }}</span>
                  </label>
                </div>
              </li>
            </ul>
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
              <h2 class="composer-modal__name">{{ currentDisplayName }}</h2>
              <p class="composer-modal__dates" v-if="currentComposer">
                {{ currentComposer.birth }} — {{ currentComposer.death }}
              </p>
            </div>

            <div class="composer-modal__header-actions">
              <button
                class="composer-modal__share"
                type="button"
                @click="shareCurrentComposer"
                :aria-label="shareLabels.button"
              >
                <img class="composer-modal__share-icon" src="/images/share-icon.png" alt="" />
              </button>
              <span v-if="shareFeedback" class="composer-modal__share-feedback">
                {{ shareFeedback }}
              </span>
              <div class="composer-modal__nav composer-modal__nav--header" aria-label="Composer navigation">
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
              <button class="composer-modal__close" @click="closeModal" aria-label="Close composer details">×</button>
            </div>
          </header>

          <div class="composer-modal__body">
            <div v-if="currentImage" class="composer-modal__hero">
              <img class="composer-modal__photo" :src="currentImage" :alt="currentDisplayName" />

              <div class="composer-modal__nav composer-modal__nav--mobile" aria-label="Composer navigation">
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
                <div class="composer-modal__name-small">{{ currentDisplayName }}</div>
                <div class="composer-modal__dates-small" v-if="currentComposer">
                  {{ currentComposer.birth }} — {{ currentComposer.death }}
                </div>
              </div>
            </div>

            <div class="composer-modal__playlist">
              <div class="composer-modal__playlist-header">
                <div class="composer-modal__playlist-title">{{ modalText.keyWorks }}</div>
                <a v-if="playlistSources.length" class="sc-powered" href="https://soundcloud.com" target="_blank"
                  rel="noopener noreferrer" aria-label="Powered by SoundCloud">
                  <img class="sc-powered__img" src="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png"
                    alt="Powered by SoundCloud" />
                </a>
              </div>
              <div v-if="playlistSources.length" :key="playlistSources[0]"
                class="composer-modal__playlist-box sc-player" :data-soundcloud-playlist="playlistSources[0]"
                :data-soundcloud-playlist-alt="playlistSources.slice(1).join('|')">
                <div class="sc-player__status">
                  <span class="sc-player__spinner" aria-hidden="true"></span>
                  <span class="sc-player__status-text">{{ soundCloudLoadingText }}</span>
                </div>
              </div>
              <div v-else class="composer-modal__playlist-box composer-modal__playlist-box--empty">
                Playlist will appear here soon.
              </div>
            </div>

            <div class="composer-modal__description">
              <div class="composer-modal__facts-title" v-if="currentFactsTitle">
                {{ currentFactsTitle }}
              </div>
              <ul v-if="currentDescription" class="composer-modal__facts">
                <li v-for="(line, i) in currentDescription.split('\n')" :key="i">
                  <span class="composer-modal__fact-text">{{ line }}</span>
                </li>
              </ul>
              <p v-else class="composer-modal__muted">No description yet.</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import ComposersTimeline from "./components/ComposersTimeline.vue";
import { composers, getComposerImage } from "./timeline-core";
import composerFactsRaw from "../composers.md?raw";

const LOCALES = {
  en: {
    label: "En",
    appTitle: "The Story of Classical Music in Time",
    languageLabel: "Language",
    navigation: {
      composers: "Composers Timeline",
      about: "About",
    },
    modal: {
      keyWorks: "Key works to know",
    },
    share: {
      button: "Share",
      copied: "Link copied",
    },
    soundcloud: {
      loading: "Loading tracks from SoundCloud...",
    },
    about: {
      title: "Understand classical music by ear",
      intro:
        "Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",
      goal:
        "This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",
      authorLabel: "Project creator and author",
      authorName: "Dmitrii Kotikov",
      contributorsTitle: "Project collaborators",
      testFeaturesLabel: "Turn on test functions",
      contributors: [
        {
          name: "Timofey Muhortov",
          url: "https://timofeymuhortov.ru",
          linkText: "timofeymuhortov.ru",
        },
        {
          name: "Olga Matveeva",
          url: "https://facebook.com/olga.shibanova",
          linkText: "facebook.com/olga.shibanova",
        },
      ],
    },
    eras: {
      baroque: "Baroque",
      classical: "Classical",
      romantic: "Romantic",
      twentieth: "20th Century",
    },
    composers: {},
    filter: {
      groups: {
        essentials: "Essential Icons",
        core: "Core Classics",
        expanded: "Extended Classics",
      },
      apply: "Apply",
      minimizeControls: "Hide timeline controls",
      restoreControls: "Show timeline controls",
    },
  },
  de: {
    label: "De",
    appTitle: "Die Geschichte der klassischen Musik",
    languageLabel: "Sprache",
    navigation: {
      composers: "Zeitstrahl der Komponisten",
      about: "Über das Projekt",
    },
    modal: {
      keyWorks: "Wichtige Werke zum Kennenlernen",
    },
    share: {
      button: "Teilen",
      copied: "Link kopiert",
    },
    soundcloud: {
      loading: "Tracks von SoundCloud werden geladen...",
    },
    about: {
      title: "Klassische Musik mit dem Ohr verstehen",
      intro:
        "Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",
      goal:
        "Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",
      authorLabel: "Initiator und Autor des Projekts",
      authorName: "Dmitrii Kotikov",
      contributorsTitle: "Projektpartner",
      contributors: [
        {
          name: "Timofey Muhortov",
          url: "https://timofeymuhortov.ru",
          linkText: "timofeymuhortov.ru",
        },
        {
          name: "Olga Matveeva",
          url: "https://facebook.com/olga.shibanova",
          linkText: "facebook.com/olga.shibanova",
        },
      ],
    },
    eras: {
      baroque: "Barock",
      classical: "Klassik",
      romantic: "Romantik",
      twentieth: "20. Jahrhundert",
    },
    composers: {},
    filter: {
      groups: {
        essentials: "Essenzielle Ikonen",
        core: "Kernklassiker",
        expanded: "Erweiterte Klassiker",
      },
      apply: "Anwenden",
      minimizeControls: "Steuerungselemente ausblenden",
      restoreControls: "Steuerungselemente anzeigen",
    },
  },
  ru: {
    label: "Ru",
    appTitle: "История классической музыки",
    languageLabel: "Язык",
    navigation: {
      composers: "Таймлайн композиторов",
      about: "О проекте",
    },
    modal: {
      keyWorks: "Ключевые произведения",
    },
    share: {
      button: "Поделиться",
      copied: "Ссылка скопирована",
    },
    soundcloud: {
      loading: "Загружаем треки из SoundCloud...",
    },
    about: {
      title: "Понимать классическую музыку на слух",
      intro:
        "Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",
      goal:
        "Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",
      authorLabel: "Автор и создатель проекта",
      authorName: "Дмитрий Котиков",
      contributorsTitle: "Соавторы проекта",
      testFeaturesLabel: "Включить тестовые функции",
      contributors: [
        {
          name: "Тимофей Мухортов",
          url: "https://timofeymuhortov.ru",
          linkText: "timofeymuhortov.ru",
        },
        {
          name: "Ольга Матвеева",
          url: "https://facebook.com/olga.shibanova",
          linkText: "facebook.com/olga.shibanova",
        },
      ],
    },
    eras: {
      baroque: "Барокко",
      classical: "Классицизм",
      romantic: "Романтизм",
      twentieth: "XX век",
    },
    composers: {},
    filter: {
      groups: {
        essentials: "Ключевые фигуры",
        core: "Основа классики",
        expanded: "Расширенный канон",
      },
      apply: "Применить",
      minimizeControls: "Скрыть панель управления",
      restoreControls: "Показать панель управления",
    },
  },
};

const SUPPORTED_LANGUAGES = Object.keys(LOCALES);
const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "timeline-language";
const STORAGE_KEY_USER_SET = "timeline-language-user-set";
const COMPOSER_PATH_PREFIX = "/composer/";
const UNKNOWN_COUNTRY = "UNKNOWN";
const RUSSIAN_TIMEZONES = [
  "europe/kaliningrad",
  "europe/moscow",
  "europe/samara",
  "europe/volgograd",
  "europe/simferopol",
  "asia/yekaterinburg",
  "asia/omsk",
  "asia/novosibirsk",
  "asia/novokuznetsk",
  "asia/krasnoyarsk",
  "asia/irkutsk",
  "asia/chita",
  "asia/yakutsk",
  "asia/vladivostok",
  "asia/sakhalin",
  "asia/magadan",
  "asia/kamchatka",
  "asia/petropavlovsk-kamchatsky",
  "asia/anadyr",
  "asia/barnaul",
  "asia/khandyga",
  "asia/ust-nera",
  "asia/srednekolymsk",
];

function getBrowserTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch (err) {
    return "";
  }
}

function isRussianTimeZone(zone) {
  if (!zone) return false;
  return RUSSIAN_TIMEZONES.includes(zone.toLowerCase());
}
const hasUserSetLanguage = ref(false);
const FACTS_TITLE_BY_LOCALE = {
  en: "essentials",
  de: "- Kurzprofil",
  ru: "ключевые факты",
};
const language = ref(DEFAULT_LANGUAGE);
const testFeaturesEnabled = ref(false);
const shouldUseSoundCloudAudioProxy = computed(() => !testFeaturesEnabled.value);
const activeLocale = computed(() => LOCALES[language.value] || LOCALES.en);
const languageOptions = computed(() =>
  SUPPORTED_LANGUAGES.map((code) => ({
    value: code,
    label: LOCALES[code]?.label || code.toUpperCase(),
  }))
);
const appTitle = computed(() => activeLocale.value.appTitle);
const languageLabel = computed(
  () => activeLocale.value.languageLabel || "Language"
);
const navigationLabels = computed(
  () => activeLocale.value.navigation || LOCALES.en.navigation
);
const aboutContent = computed(
  () => activeLocale.value.about || LOCALES.en.about
);

const aboutContributors = computed(() => aboutContent.value.contributors || LOCALES.en.about.contributors || []);
const testFeaturesLabel = computed(
  () => aboutContent.value.testFeaturesLabel || LOCALES.en.about.testFeaturesLabel || "Test functions"
);
const eraLabels = computed(() => activeLocale.value.eras || LOCALES.en.eras);
const soundCloudLabels = computed(
  () => activeLocale.value.soundcloud || LOCALES.en.soundcloud || {}
);
const soundCloudLoadingText = computed(
  () => soundCloudLabels.value.loading || "Loading tracks from SoundCloud..."
);
const composerLocale = computed(() => activeLocale.value.composers || {});
const namesFromLocale = computed(() => {
  const raw = composerLocale.value.names || {};
  const mapped = {};
  Object.entries(raw).forEach(([key, value]) => {
    mapped[normalizeName(key)] = value;
  });
  return mapped;
});
const namesFromFacts = computed(() => {
  const mapped = {};
  Object.entries(namesByLocale || {}).forEach(([key, locales]) => {
    const normalizedKey = normalizeName(key);
    const localized = locales?.[language.value];
    if (localized) {
      mapped[normalizedKey] = localized;
      return;
    }
    if (language.value === "en" && locales?.en) {
      mapped[normalizedKey] = locales.en;
    }
  });
  return mapped;
});
const composerNames = computed(() => ({
  ...namesFromFacts.value,
  ...namesFromLocale.value,
}));
const filterConfig = computed(() => activeLocale.value.filter || LOCALES.en.filter);
const filterLabels = computed(() => ({
  essentials: filterConfig.value.groups?.essentials || "Essential Icons",
  core: filterConfig.value.groups?.core || "Core Classics",
  expanded: filterConfig.value.groups?.expanded || "Extended Classics",
}));
const filterApplyLabel = computed(() => filterConfig.value.apply || "Apply");
const composerDescriptions = computed(() => {
  const raw = composerLocale.value.descriptions || {};
  const mapped = {};
  Object.entries(raw).forEach(([key, value]) => {
    mapped[normalizeName(key)] = value;
  });
  return mapped;
});
const composerFactsTitleOverrides = computed(() => {
  const raw = composerLocale.value.factsTitles || {};
  const mapped = {};
  Object.entries(raw).forEach(([key, value]) => {
    mapped[normalizeName(key)] = value;
  });
  return mapped;
});
const modalText = computed(() => activeLocale.value.modal || LOCALES.en.modal);
const shareLabels = computed(() => activeLocale.value.share || LOCALES.en.share);

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
const DEFAULT_SIZE_INDEX = 1;

const SOUND_CLOUD_PROXY_BASE = (
  import.meta.env.VITE_SOUND_CLOUD_PROXY ||
  import.meta.env.VITE_SOUNDCLOUD_PROXY ||
  import.meta.env.SOUND_CLOUD_PROXY ||
  import.meta.env.SOUNDCLOUD_PROXY ||
  ""
).replace(/\/$/, "");
const DEFAULT_SOUND_CLOUD_ACCOUNT =
  import.meta.env.VITE_SOUND_CLOUD_ACCOUNT ||
  import.meta.env.VITE_SOUNDCLOUD_ACCOUNT ||
  import.meta.env.SOUND_CLOUD_ACCOUNT ||
  import.meta.env.SOUNDCLOUD_ACCOUNT ||
  "dmitry-kotikov";
const SOUND_CLOUD_PLAYLIST_PREFIX =
  import.meta.env.VITE_SOUND_CLOUD_PLAYLIST_PREFIX ||
  import.meta.env.VITE_SOUNDCLOUD_PLAYLIST_PREFIX ||
  import.meta.env.SOUND_CLOUD_PLAYLIST_PREFIX ||
  import.meta.env.SOUNDCLOUD_PLAYLIST_PREFIX ||
  `https://soundcloud.com/${DEFAULT_SOUND_CLOUD_ACCOUNT}/sets/`;
const SOUND_CLOUD_FALLBACK_PLAYLIST =
  import.meta.env.VITE_SOUND_CLOUD_FALLBACK_PLAYLIST ||
  import.meta.env.VITE_SOUNDCLOUD_FALLBACK_PLAYLIST ||
  import.meta.env.SOUND_CLOUD_FALLBACK_PLAYLIST ||
  import.meta.env.SOUNDCLOUD_FALLBACK_PLAYLIST ||
  "https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi";

const activeSoundCloudAudios = new Set();

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
      "Richard Strauss",
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
      "Gioachino Rossini",
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
      "George Gershwin",
      "Igor Stravinsky",
      "Bedřich Smetana",
      "Jean Sibelius",
      "Carl Orff",
    ],
  },
];

const filterState = ref(
  filterGroups.reduce((acc, group) => {
    acc[group.id] = true;
    return acc;
  }, {})
);

const filterDockLabels = computed(() => {
  const filter = activeLocale.value.filter || {};
  return {
    minimize: filter.minimizeControls || "Hide timeline controls",
    restore: filter.restoreControls || "Show timeline controls",
  };
});

const isFilterOpen = ref(false);
const FILTER_DOCK_MARGIN = 12;
const FILTER_DOCK_DOUBLE_TAP_DELAY = 320;
const filterDockRef = ref(null);
const filterDockLeft = ref(FILTER_DOCK_MARGIN);
const filterDockTop = ref(null);
let lastFilterDockTouchEndTime = 0;
const isFilterDockMinimized = ref(false);

// Keeps the dock from drifting when its size changes (open/close filter panel)
const filterDockAnchor = ref("bottom-left"); // "bottom-left" | "top-right" | "free"

// Remember dock position before opening the filter panel so we can restore it on close.
const filterDockPositionBeforeFilterOpen = ref(null); // { left: number, top: number|null, anchor: string } | null

const filterDockStyle = computed(() => {
  const style = {
    left: `${filterDockLeft.value}px`,
  };
  if (filterDockTop.value != null) {
    style.top = `${filterDockTop.value}px`;
  }
  return style;
});

const filterDockDragState = reactive({
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  startLeft: 0,
  startTop: 0,
  element: null,
});

// Pinch-to-zoom state and helpers
const pinchZoomState = reactive({
  active: false,
  startDistance: 0,
});

const PINCH_IN_THRESHOLD = 0.88; // pinch inward -> zoom out (smaller blocks)
const PINCH_OUT_THRESHOLD = 1.12; // pinch outward -> zoom in (larger blocks)

function getTouchDistance(t1, t2) {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.hypot(dx, dy);
}
const timelineSettings = reactive({
  barHeight: SIZE_STEPS[DEFAULT_SIZE_INDEX],
  widthScale: computeWidthScale(SIZE_STEPS[DEFAULT_SIZE_INDEX]),
  fontScale: computeFontScale(SIZE_STEPS[DEFAULT_SIZE_INDEX]),
});
const sizeIndex = ref(DEFAULT_SIZE_INDEX);
const SCROLL_EDGE_EPS = 6; // small tolerance so minor auto-scrolls don't flip the edge state

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
  isAtTimelineStart.value =
    timeline.scrollLeft <= SCROLL_EDGE_EPS && timeline.scrollTop <= SCROLL_EDGE_EPS;
  isAtTimelineEnd.value =
    timeline.scrollLeft >= maxScrollX - SCROLL_EDGE_EPS &&
    timeline.scrollTop >= maxScrollY - SCROLL_EDGE_EPS;
}

async function goToStart() {
  if (window.timeline && typeof window.timeline.goToStart === "function") {
    window.timeline.goToStart();
  }
  updateScrollFlags();
  await nextTick();
  moveFilterDockToBottomLeft();
}

async function goToEnd() {
  if (window.timeline && typeof window.timeline.goToEnd === "function") {
    window.timeline.goToEnd();
  }
  updateScrollFlags();
  await nextTick();
  moveFilterDockToTopRight();
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
  [...filteredComposers.value]
    .sort((a, b) => a.birth - b.birth)
    .map((composer) => ({
      ...composer,
      displayName: getLocalizedComposerName(composer.name),
    }))
);

const { descriptionsByLocale, playlistIdsByKey, namesByLocale } = parseComposerFacts(composerFactsRaw);
const currentIndex = ref(null);
const isSyncingFromLocation = ref(false);
const shareFeedback = ref("");
let shareFeedbackTimer = null;

const isModalOpen = computed(() => currentIndex.value !== null);
const currentComposer = computed(() =>
  currentIndex.value === null ? null : sortedComposers.value[currentIndex.value]
);
const currentDisplayName = computed(() =>
  currentComposer.value ? getLocalizedComposerName(currentComposer.value.name) : ""
);
const currentImage = computed(() =>
  currentComposer.value ? getComposerImage(currentComposer.value.name) : null
);
const currentDescription = computed(() =>
  currentComposer.value
    ? getLocalizedComposerDescription(currentComposer.value.name)
    : ""
);
const currentFactsTitle = computed(() =>
  currentComposer.value ? getLocalizedFactsTitle(currentComposer.value.name) : ""
);
const currentPlaylistIds = computed(() =>
  currentComposer.value ? getComposerPlaylistIds(currentComposer.value.name) : []
);
const currentPlaylistUrls = computed(() =>
  currentPlaylistIds.value.map((id) => buildPlaylistUrl(id)).filter(Boolean)
);
const playlistSources = computed(() => {
  const urls = currentPlaylistUrls.value.filter(Boolean);
  if (urls.length) return urls;
  return SOUND_CLOUD_FALLBACK_PLAYLIST ? [SOUND_CLOUD_FALLBACK_PLAYLIST] : [];
});
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

function buildComposerSlug(name) {
  return normalizeName(name).replace(/\s+/g, "-");
}

function buildComposerPath(name) {
  const slug = buildComposerSlug(name);
  return `${COMPOSER_PATH_PREFIX}${encodeURIComponent(slug)}`;
}

function parseComposerSlugFromPath(pathname) {
  if (!pathname.startsWith(COMPOSER_PATH_PREFIX)) return "";
  return pathname.slice(COMPOSER_PATH_PREFIX.length);
}

function getComposerNameBySlug(slug) {
  const normalized = normalizeName(String(slug || "").replace(/-/g, " "));
  const match = composers.find(
    (composer) => normalizeName(composer.name) === normalized
  );
  return match ? match.name : "";
}

function ensureComposerVisible(name) {
  if (!name) return;
  const group = filterGroups.find((g) => g.composers.includes(name));
  if (!group || filterState.value[group.id]) return;
  filterState.value = { ...filterState.value, [group.id]: true };
}

async function syncFromLocation(pathname = window.location.pathname) {
  isSyncingFromLocation.value = true;
  try {
    updateViewFromLocation(pathname);
    const slugRaw = parseComposerSlugFromPath(pathname);
    if (!slugRaw) {
      currentIndex.value = null;
      return;
    }
    const slug = decodeURIComponent(slugRaw);
    const name = getComposerNameBySlug(slug);
    if (!name) {
      currentIndex.value = null;
      return;
    }
    ensureComposerVisible(name);
    await nextTick();
    const nextIndex = sortedComposers.value.findIndex((c) => c.name === name);
    currentIndex.value = nextIndex >= 0 ? nextIndex : null;
  } finally {
    isSyncingFromLocation.value = false;
  }
}

function getComposerShareUrl(name) {
  if (!name || typeof window === "undefined") return "";
  const path = buildComposerPath(name);
  return new URL(path, window.location.origin).toString();
}

async function shareCurrentComposer() {
  if (!currentComposer.value) return;
  const url = getComposerShareUrl(currentComposer.value.name);
  if (!url) return;
  const title = currentDisplayName.value || currentComposer.value.name;

  try {
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
  } catch (err) {
    if (err?.name !== "AbortError") {
      console.warn("Share failed, falling back to clipboard", err);
    } else {
      return;
    }
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "true");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    shareFeedback.value = shareLabels.value.copied || "Link copied";
    if (shareFeedbackTimer) {
      clearTimeout(shareFeedbackTimer);
    }
    shareFeedbackTimer = setTimeout(() => {
      shareFeedback.value = "";
      shareFeedbackTimer = null;
    }, 2200);
  } catch (err) {
    console.warn("Failed to copy share link", err);
  }
}

function getLocalizedComposerName(name) {
  const normalized = normalizeName(name);
  return composerNames.value[normalized] || name;
}

function getFilterLabel(id) {
  return filterLabels.value[id] || id;
}

function parseComposerFacts(raw) {
  const lines = raw.split("\n");
  const descriptions = {};
  const names = {};
  const playlistIds = {};
  let currentKey = null;
  let currentKeyAlt = null;
  let currentSlug = null;
  let currentLocale = "en";
  let buffer = [];
  const flush = () => {
    if (currentKey || currentKeyAlt) {
      const keys = [currentKey, currentKeyAlt].filter(Boolean);
      keys.forEach((key) => {
        descriptions[key] = descriptions[key] || {};
        descriptions[key][currentLocale] = buffer.join("\n").trim();
        if (currentSlug) {
          playlistIds[key] = currentSlug;
        }
      });
    }
    buffer = [];
    currentSlug = null;
    currentKeyAlt = null;
  };

  for (const line of lines) {
    const heading = line.match(
      /^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i
    );
    if (heading) {
      flush();
      const [, nameRaw, localeRaw, slugRaw] = heading;
      currentKey = normalizeName(slugRaw || nameRaw);
      currentKeyAlt = normalizeName(nameRaw);
      currentLocale = (localeRaw || "en").toLowerCase();
      currentSlug = slugRaw || null;
      continue;
    }
    const nameLine = currentKey
      ? line.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i)
      : null;
    if (nameLine) {
      const [, localeRaw, valueRaw] = nameLine;
      const locale = (localeRaw || currentLocale || "en").toLowerCase();
      const value = valueRaw.trim();
      const keys = [currentKey, currentKeyAlt].filter(Boolean);
      keys.forEach((key) => {
        names[key] = names[key] || {};
        names[key][locale] = value;
      });
      continue;
    }
    if (currentKey && line.startsWith("- ")) {
      buffer.push(line.replace(/^- /, "").trim());
    }
  }
  flush();
  return { descriptionsByLocale: descriptions, playlistIdsByKey: playlistIds, namesByLocale: names };
}

function getLocalizedComposerDescription(name) {
  const localeMap = getLocaleMapForComposer(name);
  const normalized = normalizeName(name);
  const override = composerDescriptions.value[normalized];
  if (override) return override;
  const byLang = localeMap[language.value];
  if (byLang) return byLang;
  if (localeMap.en) return localeMap.en;
  const first = Object.values(localeMap)[0];
  return first || "";
}

function getLocalizedFactsTitle(name) {
  const override = composerFactsTitleOverrides.value[normalizeName(name)];
  if (override) return override;
  return buildFactsTitle(name);
}

function pickComposerValue(map, name) {
  const normalized = normalizeName(name);
  if (map[normalized]) {
    return map[normalized];
  }
  const parts = normalized.split(" ").filter(Boolean);
  const lastWord = parts[parts.length - 1];
  if (lastWord && map[lastWord]) {
    return map[lastWord];
  }
  return "";
}

function getLocaleMapForComposer(name) {
  const normalized = normalizeName(name);
  const parts = normalized.split(" ").filter(Boolean);
  const candidates = [normalized];
  const last = parts[parts.length - 1];
  if (last && last !== normalized) {
    candidates.push(last);
  }
  for (const key of candidates) {
    if (descriptionsByLocale[key]) {
      return descriptionsByLocale[key];
    }
  }
  return {};
}

function slugifyForPlaylist(text) {
  return normalizeName(text)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildFactsTitle(name) {
  const suffix =
    FACTS_TITLE_BY_LOCALE[language.value] ||
    FACTS_TITLE_BY_LOCALE.en ||
    "Essentials";

  const localizedName =
    language.value === "ru" ? getLocalizedComposerName(name) : "";

  if (language.value === "ru" && localizedName) {
    return `${localizedName} - ${suffix}`;
  }

  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "";
  const last = parts[parts.length - 1];
  const isSuffix = /^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(last);
  const core = isSuffix && parts.length >= 2 ? parts[parts.length - 2] : last;
  return `${core} ${suffix}`;
}

function getComposerPlaylistIds(name) {
  const ids = [];
  const slugFull = slugifyForPlaylist(name);
  if (slugFull && !ids.includes(slugFull)) ids.push(slugFull);
  const fromMap = pickComposerValue(playlistIdsByKey, name);
  if (fromMap && !ids.includes(fromMap)) ids.push(fromMap);

  return ids;
}

function updateViewFromLocation(pathname = window.location.pathname) {
  if (pathname.startsWith(COMPOSER_PATH_PREFIX)) {
    currentView.value = "composers";
    return;
  }
  currentView.value = pathname === "/about" ? "about" : "composers";
}

const handlePopState = () => syncFromLocation();

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

async function toggleFilters() {
  // Ensure we have an initialized position before we snapshot / clamp.
  updateFilterDockBounds();

  const willOpen = !isFilterOpen.value;

  // Snapshot the current dock position before opening the panel,
  // so closing can restore it exactly.
  if (willOpen) {
    filterDockPositionBeforeFilterOpen.value = {
      left: filterDockLeft.value,
      top: filterDockTop.value,
      anchor: filterDockAnchor.value,
    };
  }

  isFilterOpen.value = willOpen;
  await nextTick();

  // While opening/closing, the dock size changes - just keep it on-screen.
  updateFilterDockBounds();
}

async function closeFilters() {
  // If the panel is open but we somehow missed the snapshot, take it now.
  if (isFilterOpen.value && !filterDockPositionBeforeFilterOpen.value) {
    updateFilterDockBounds();
    filterDockPositionBeforeFilterOpen.value = {
      left: filterDockLeft.value,
      top: filterDockTop.value,
      anchor: filterDockAnchor.value,
    };
  }

  isFilterOpen.value = false;
  await nextTick();

  // Keep it on-screen until the transition fully completes.
  updateFilterDockBounds();
}

function waitTwoFrames() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

async function handleFilterPanelAfterTransition() {
  // When closing the panel, Vue keeps the leaving element in DOM until the end of the transition.
  // Even with 0s transition, the removal can happen on a later frame - so measure after a couple of RAFs.
  await nextTick();
  await waitTwoFrames();

  // After the transition, the dock has its final size - clamp first.
  updateFilterDockBounds();

  // If the panel is now closed, restore the exact position from before it was opened.
  if (!isFilterOpen.value && filterDockPositionBeforeFilterOpen.value) {
    const prev = filterDockPositionBeforeFilterOpen.value;
    filterDockAnchor.value = prev.anchor || filterDockAnchor.value;
    filterDockLeft.value = clampFilterDockLeft(prev.left);
    if (prev.top != null) {
      filterDockTop.value = clampFilterDockTop(prev.top);
    }
    filterDockPositionBeforeFilterOpen.value = null;
    return;
  }

  // Otherwise (panel opened), just ensure it stays within the viewport.
  updateFilterDockBounds();
}

async function toggleFilterDockMinimized() {
  isFilterDockMinimized.value = !isFilterDockMinimized.value;

  if (isFilterDockMinimized.value) {
    isFilterOpen.value = false;
    await nextTick();
    moveFilterDockToBottomLeft();
    return;
  }

  // Restored: the dock becomes larger again - ensure it's fully on-screen.
  await nextTick();
  moveFilterDockToBottomLeft();
}

function getTopbarHeight() {
  if (typeof document === "undefined") return 0;
  const topbar = document.querySelector(".topbar");
  return topbar && topbar.offsetHeight ? topbar.offsetHeight : 0;
}

function getViewportMetrics() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, offsetLeft: 0, offsetTop: 0 };
  }

  const vv = window.visualViewport;
  if (vv) {
    return {
      width: vv.width,
      height: vv.height,
      offsetLeft: vv.offsetLeft || 0,
      offsetTop: vv.offsetTop || 0,
    };
  }

  return { width: window.innerWidth, height: window.innerHeight, offsetLeft: 0, offsetTop: 0 };
}

function clampFilterDockLeft(value) {
  const el = filterDockRef.value;
  if (!el || typeof window === "undefined") {
    return value;
  }

  const { width, offsetLeft } = getViewportMetrics();

  const minLeft = offsetLeft + FILTER_DOCK_MARGIN;
  const maxLeft = Math.max(
    minLeft,
    offsetLeft + width - el.offsetWidth - FILTER_DOCK_MARGIN
  );

  return Math.min(Math.max(value, minLeft), maxLeft);
}

function clampFilterDockTop(value) {
  const el = filterDockRef.value;
  if (!el || typeof window === "undefined") {
    return value;
  }

  const { height, offsetTop } = getViewportMetrics();

  const minTop = Math.max(getTopbarHeight() + FILTER_DOCK_MARGIN, offsetTop + FILTER_DOCK_MARGIN);
  const maxTop = Math.max(
    minTop,
    offsetTop + height - el.offsetHeight - FILTER_DOCK_MARGIN
  );

  return Math.min(Math.max(value, minTop), maxTop);
}

function updateFilterDockBounds() {
  const el = filterDockRef.value;
  if (filterDockTop.value == null && el && typeof window !== "undefined") {
    // Initialize position so it starts near the bottom like before.
    const { height: viewportHeight, offsetTop } = getViewportMetrics();
    filterDockTop.value = clampFilterDockTop(offsetTop + viewportHeight - el.offsetHeight - 24);
  }
  filterDockLeft.value = clampFilterDockLeft(filterDockLeft.value);
  if (filterDockTop.value != null) {
    filterDockTop.value = clampFilterDockTop(filterDockTop.value);
  }
}


function moveFilterDockToTopRight() {
  updateFilterDockBounds();
  filterDockAnchor.value = "top-right";

  const el = filterDockRef.value;
  const width = el?.offsetWidth || 0;

  // Right edge with margin.
  const { width: viewportWidth, offsetLeft } = getViewportMetrics();
  filterDockLeft.value = clampFilterDockLeft(offsetLeft + viewportWidth - width - FILTER_DOCK_MARGIN);
  filterDockTop.value = clampFilterDockTop(getTopbarHeight() + FILTER_DOCK_MARGIN);
}

function moveFilterDockToBottomLeft() {
  updateFilterDockBounds();
  filterDockAnchor.value = "bottom-left";

  const el = filterDockRef.value;
  const height = el?.offsetHeight || 0;

  const { height: viewportHeight, offsetTop } = getViewportMetrics();

  filterDockLeft.value = clampFilterDockLeft(FILTER_DOCK_MARGIN);
  filterDockTop.value = clampFilterDockTop(offsetTop + viewportHeight - height - FILTER_DOCK_MARGIN);
}

function handleFilterDockPointerMove(event) {
  if (!filterDockDragState.active || event.pointerId !== filterDockDragState.pointerId) {
    return;
  }
  event.preventDefault();
  const deltaX = event.clientX - filterDockDragState.startX;
  const deltaY = event.clientY - filterDockDragState.startY;
  filterDockLeft.value = clampFilterDockLeft(filterDockDragState.startLeft + deltaX);
  if (filterDockTop.value != null) {
    filterDockTop.value = clampFilterDockTop(filterDockDragState.startTop + deltaY);
  }
}

function detachFilterDockPointerListeners() {
  window.removeEventListener("pointermove", handleFilterDockPointerMove);
  window.removeEventListener("pointerup", stopFilterDockDrag);
  window.removeEventListener("pointercancel", stopFilterDockDrag);
}

function finalizeFilterDockDrag(pointerId) {
  const element = filterDockDragState.element;
  filterDockDragState.active = false;
  filterDockDragState.element = null;
  filterDockDragState.pointerId = null;
  if (element?.releasePointerCapture && pointerId != null) {
    try {
      element.releasePointerCapture(pointerId);
    } catch (err) {
      // Ignore pointer capture issues.
    }
  }
}

function stopFilterDockDrag(event) {
  if (!filterDockDragState.active || event.pointerId !== filterDockDragState.pointerId) {
    return;
  }
  detachFilterDockPointerListeners();
  finalizeFilterDockDrag(event.pointerId);
}

function cleanupFilterDockDrag() {
  if (!filterDockDragState.active) {
    return;
  }
  detachFilterDockPointerListeners();
  finalizeFilterDockDrag(filterDockDragState.pointerId);
}

function handleFilterDockTouchEnd(event) {
  const now = event.timeStamp || Date.now();
  if (now - lastFilterDockTouchEndTime <= FILTER_DOCK_DOUBLE_TAP_DELAY) {
    event.preventDefault();
  }
  lastFilterDockTouchEndTime = now;
}

function startFilterDockDrag(event) {
  if (filterDockDragState.active) {
    return;
  }
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  // Allow dragging from anywhere EXCEPT interactive elements.
  const target = event.target;
  const isInteractive =
    target &&
    typeof target.closest === "function" &&
    target.closest(
      "button, a, input, select, textarea, label, [role='button'], .filter-panel"
    );
  if (isInteractive) {
    return;
  }

  // Ensure we have an initialized top position.
  updateFilterDockBounds();
  filterDockAnchor.value = "free";

  event.preventDefault();
  filterDockDragState.active = true;
  filterDockDragState.pointerId = event.pointerId;
  filterDockDragState.startX = event.clientX;
  filterDockDragState.startY = event.clientY;
  filterDockDragState.startLeft = filterDockLeft.value;
  filterDockDragState.startTop = filterDockTop.value ?? 0;
  filterDockDragState.element = filterDockRef.value;

  const el = filterDockRef.value;
  if (el?.setPointerCapture) {
    try {
      el.setPointerCapture(event.pointerId);
    } catch (err) {
      // Ignore pointer capture failures.
    }
  }

  window.addEventListener("pointermove", handleFilterDockPointerMove);
  window.addEventListener("pointerup", stopFilterDockDrag);
  window.addEventListener("pointercancel", stopFilterDockDrag);
}

function handleTimelineTouchStart(event) {
  if (!event || !event.touches) return;
  if (event.touches.length !== 2) return;

  pinchZoomState.active = true;
  pinchZoomState.startDistance = getTouchDistance(event.touches[0], event.touches[1]);
}

function handleTimelineTouchMove(event) {
  if (!pinchZoomState.active) return;
  if (!event || !event.touches || event.touches.length !== 2) return;

  // Prevent browser page zoom while pinching on the timeline.
  event.preventDefault();

  const dist = getTouchDistance(event.touches[0], event.touches[1]);
  const start = pinchZoomState.startDistance || dist;
  const ratio = start ? dist / start : 1;

  if (ratio >= PINCH_OUT_THRESHOLD) {
    adjustSizes(1);
    pinchZoomState.startDistance = dist; // reset baseline so continuous pinch can step again
    return;
  }

  if (ratio <= PINCH_IN_THRESHOLD) {
    adjustSizes(-1);
    pinchZoomState.startDistance = dist; // reset baseline so continuous pinch can step again
  }
}

function handleTimelineTouchEnd(event) {
  // If fewer than 2 touches remain - stop pinch tracking.
  const touchesLeft = event?.touches?.length ?? 0;
  if (touchesLeft < 2) {
    pinchZoomState.active = false;
    pinchZoomState.startDistance = 0;
  }
}

function handleWindowResize() {
  updateFilterDockBounds();
}

function applyLanguage(lang, { persist = false } = {}) {
  const safe = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  language.value = safe;

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, safe);
      localStorage.setItem(STORAGE_KEY_USER_SET, "1");
    } catch (err) {
      // Ignore storage errors (e.g., private mode).
    }
  }
}

function setLanguage(lang) {
  hasUserSetLanguage.value = true;
  applyLanguage(lang, { persist: true });
}

function handleLanguageChange(event) {
  const next = event?.target?.value;
  if (next) setLanguage(next);
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    return null;
  }
}

function hasStoredUserSetLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY_USER_SET) === "1";
  } catch (err) {
    return false;
  }
}

function initializeLanguage() {
  const stored = getStoredLanguage();
  const userSet = hasStoredUserSetLanguage();

  // Default render is English; geo detection may switch to RU/DE later.
  applyLanguage(DEFAULT_LANGUAGE);

  // If the user explicitly chose a language before, respect it immediately.
  if (stored && userSet && SUPPORTED_LANGUAGES.includes(stored)) {
    hasUserSetLanguage.value = true;
    applyLanguage(stored);
    showDetectionAlert("STORED", stored);
    return;
  }

  // Otherwise, keep English first, then try geo detection.
  detectPreferredLanguage();
}

async function detectPreferredLanguage() {
  const allowLanguageSwitch = !hasUserSetLanguage.value;
  if (!allowLanguageSwitch) {
    showDetectionAlert("STORED", language.value);
  }

  const detectors = [detectViaIpApi, detectViaIpWhoIs];
  for (const detector of detectors) {
    const country = await detector();
    if (country) {
      const normalizedCountry = String(country).toUpperCase();
      if (!allowLanguageSwitch) {
        return;
      }
      const lang =
        normalizedCountry === "RU"
          ? "ru"
          : ["DE", "AT", "CH"].includes(normalizedCountry)
            ? "de"
            : DEFAULT_LANGUAGE;
      applyLanguage(lang);
      showDetectionAlert(normalizedCountry, lang);
      return;
    }
  }

  if (!allowLanguageSwitch) {
    return;
  }
  // If geo lookups fail, keep English (no timezone / navigator fallbacks).
  applyLanguage(DEFAULT_LANGUAGE);
  showDetectionAlert(UNKNOWN_COUNTRY, DEFAULT_LANGUAGE);
}

async function detectViaIpApi() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) return null;
    const data = await response.json();
    return data?.country_code || null;
  } catch (err) {
    console.warn("ipapi lookup failed:", err);
  }
  return null;
}

async function detectViaIpWhoIs() {
  try {
    const response = await fetch("https://ipwho.is/");
    if (!response.ok) return null;
    const data = await response.json();
    return data?.country_code || null;
  } catch (err) {
    console.warn("ipwho.is lookup failed:", err);
  }
  return null;
}

function showDetectionAlert(country, lang) {
  // Intentionally silent (kept for debugging parity with the other project)
  void country;
  void lang;
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

onMounted(async () => {
  initializeLanguage();
  await syncFromLocation();
  await nextTick();
  moveFilterDockToBottomLeft();
  // Fallback: if timeline instance exposes subscription hook later
  if (window.timeline && typeof window.timeline.onBarClick === "function") {
    window.timeline.onBarClick(handleComposerSelect);
  }
  window.addEventListener("popstate", handlePopState);
  window.addEventListener("composer-select", handleComposerSelect);
  window.addEventListener("resize", handleWindowResize);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleWindowResize);
    window.visualViewport.addEventListener("scroll", handleWindowResize);
  }
  handleWindowResize();
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.addEventListener("scroll", updateScrollFlags, { passive: true });

    // Pinch-to-zoom (maps to the same discrete levels as +/- buttons).
    timeline.addEventListener("touchstart", handleTimelineTouchStart, { passive: true });
    timeline.addEventListener("touchmove", handleTimelineTouchMove, { passive: false });
    timeline.addEventListener("touchend", handleTimelineTouchEnd, { passive: true });
    timeline.addEventListener("touchcancel", handleTimelineTouchEnd, { passive: true });

    updateScrollFlags();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
  window.removeEventListener("composer-select", handleComposerSelect);
  window.removeEventListener("resize", handleWindowResize);
  if (window.visualViewport) {
    window.visualViewport.removeEventListener("resize", handleWindowResize);
    window.visualViewport.removeEventListener("scroll", handleWindowResize);
  }
  cleanupFilterDockDrag();
  if (shareFeedbackTimer) {
    clearTimeout(shareFeedbackTimer);
    shareFeedbackTimer = null;
  }
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.removeEventListener("scroll", updateScrollFlags);

    timeline.removeEventListener("touchstart", handleTimelineTouchStart);
    timeline.removeEventListener("touchmove", handleTimelineTouchMove);
    timeline.removeEventListener("touchend", handleTimelineTouchEnd);
    timeline.removeEventListener("touchcancel", handleTimelineTouchEnd);
  }
});

watch(
  appTitle,
  (title) => {
    if (title) {
      document.title = title;
    }
  },
  { immediate: true }
);

watch(language, (next) => {
  const safe = SUPPORTED_LANGUAGES.includes(next) ? next : DEFAULT_LANGUAGE;
  if (safe !== next) {
    language.value = safe;
    return;
  }

  try {
    document.documentElement.setAttribute("data-lang", safe);
  } catch (err) {
    // Ignore DOM errors.
  }

  if (window.timeline && typeof window.timeline.updateEraLabels === "function") {
    window.timeline.updateEraLabels(eraLabels.value);
  }
});

watch(isModalOpen, async (open) => {
  if (open) {
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    await nextTick();
    if (playlistSources.value.length) {
      initSoundCloudPlayers();
    }
  } else {
    document.documentElement.style.overscrollBehavior = "";
    document.body.style.overscrollBehavior = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
    stopAllSoundCloudAudio();
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

watch(currentIndex, (laneIndex) => {
  if (isSyncingFromLocation.value) return;

  if (Number.isInteger(laneIndex) && sortedComposers.value[laneIndex]) {
    const composerName = sortedComposers.value[laneIndex].name;
    const nextPath = buildComposerPath(composerName);
    if (window.location.pathname !== nextPath) {
      history.pushState({}, "", nextPath);
      updateViewFromLocation(nextPath);
    }
    return;
  }

  const fallbackPath = currentView.value === "about" ? "/about" : "/";
  if (window.location.pathname !== fallbackPath) {
    history.replaceState({}, "", fallbackPath);
    updateViewFromLocation(fallbackPath);
  }
});

watch(playlistSources, async (urls) => {
  if (!isModalOpen.value) return;
  stopAllSoundCloudAudio();
  await nextTick();
  if (urls.length) {
    initSoundCloudPlayers();
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

function buildPlaylistUrl(id) {
  if (!id) return "";
  const prefix = SOUND_CLOUD_PLAYLIST_PREFIX;
  if (!prefix) return "";
  const hasTrailingSlash = prefix.endsWith("/");
  return `${prefix}${hasTrailingSlash ? "" : "/"}${id}`;
}

function stopAllSoundCloudAudio() {
  activeSoundCloudAudios.forEach((audio) => {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (err) {
      console.error("Failed to stop SoundCloud audio", err);
    }
  });
  activeSoundCloudAudios.clear();
}

function initSoundCloudPlayers(onAllReady, root = document) {
  const scope = root || document;
  const containers = scope.querySelectorAll("[data-soundcloud-playlist]");

  if (!containers.length) {
    if (typeof onAllReady === "function") {
      onAllReady();
    }
    return;
  }

  let remaining = containers.length;

  containers.forEach((container) => {
    hydrateSoundCloudPlayer(container, () => {
      remaining -= 1;
      if (remaining === 0 && typeof onAllReady === "function") {
        onAllReady();
      }
    });
  });
}

async function hydrateSoundCloudPlayer(container, onReady) {
  const finalize = () => {
    if (typeof onReady === "function") {
      setTimeout(() => onReady(), 0);
    }
  };
  if (
    !container ||
    container.dataset.soundcloudReady === "true" ||
    container.dataset.soundcloudReady === "loading" ||
    container.dataset.soundcloudReady === "error"
  ) {
    finalize();
    return;
  }

  const primary = container.getAttribute("data-soundcloud-playlist");
  const alt = container.getAttribute("data-soundcloud-playlist-alt") || "";
  const candidates = [primary, ...alt.split("|")]
    .map((x) => (x || "").trim())
    .filter(Boolean);

  if (!candidates.length) {
    finalize();
    return;
  }

  container.dataset.soundcloudReady = "loading";
  container.innerHTML = buildSoundCloudLoadingMarkup();

  let lastError = null;
  for (const playlistUrl of candidates) {
    try {
      const playlist = await fetchSoundCloudPlaylist(playlistUrl);
      const rawTracks =
        Array.isArray(playlist.tracks) && playlist.tracks.length
          ? playlist.tracks
          : playlist && playlist.kind === "track"
            ? [playlist]
            : [];
      const tracks = normalizeSoundCloudTracks(rawTracks);
      renderSoundCloudPlayer(container, tracks, playlistUrl);
      finalize();
      return;
    } catch (error) {
      lastError = error;
      const isRateLimited = error && error.status === 429;
      if (isRateLimited) {
        showFallbackPlayer(container, playlistUrl);
        finalize();
        return;
      }
    }
  }

  console.error("Failed to build SoundCloud player", lastError);
  const fallback = candidates[0] || SOUND_CLOUD_FALLBACK_PLAYLIST || null;
  if (fallback) {
    showFallbackPlayer(container, fallback);
  } else {
    container.innerHTML =
      '<div class="sc-player__status sc-player__status--error">Could not load SoundCloud playlist</div>';
    container.dataset.soundcloudReady = "error";
  }
  finalize();
}

function buildSoundCloudLoadingMarkup() {
  const label = soundCloudLoadingText.value;
  return `
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${label}</span>
    </div>
  `.trim();
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
      (t) => t && t.format && t.format.protocol === "progressive"
    );

    if (!chosen) {
      chosen = transcodings[0];
    }

    if (chosen && chosen.url) {
      try {
        const finalUrl = await fetchSoundCloudTranscodingUrl(
          chosen.url,
          track.track_authorization
        );
        console.debug("[SC] Using transcoding URL", {
          trackId: track.id,
          transcodingUrl: chosen.url,
          finalUrl,
        });
        return finalUrl;
      } catch (err) {
        console.error(
          "[SC] Transcoding proxy failed, falling back to streams endpoint",
          err
        );
      }
    }
  }

  if (!track.id) {
    throw new Error("No track id provided");
  }

  return fetchSoundCloudStreamUrl(track.id, track.track_authorization);
}

async function fetchSoundCloudPlaylist(playlistUrl) {
  const url =
    buildProxyUrl("/api/soundcloud/playlist") +
    `?url=${encodeURIComponent(playlistUrl)}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    const err = new Error(`SoundCloud playlist error: ${resp.status}`);
    err.status = resp.status;
    err.retryAfter = Number(resp.headers?.get("Retry-After")) || undefined;
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
        .map((t) => (typeof t === "string" ? t.trim() : ""))
        .filter(Boolean);
      const title = titleCandidates[0] || fallbackTitle;
      return { ...track, title };
    })
    .filter(Boolean);
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
  if (shouldUseSoundCloudAudioProxy.value) {
    params.set("proxy", "1");
  }
  const url = buildProxyUrl("/api/soundcloud/transcoding") + `?${params.toString()}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    const err = new Error(`SoundCloud transcoding error: ${resp.status}`);
    err.status = resp.status;
    err.retryAfter = Number(resp.headers?.get("Retry-After")) || undefined;
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
  if (shouldUseSoundCloudAudioProxy.value) {
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
    err.retryAfter = Number(resp.headers?.get("Retry-After")) || undefined;
    throw err;
  }
  const data = await resp.json();
  if (!data?.url) {
    throw new Error("Stream response missing url");
  }
  return data.url;
}

function showFallbackPlayer(container, playlistUrl) {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    playlistUrl
  )}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;

  container.innerHTML = `
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${embedUrl}"
    ></iframe>
  `;

  container.dataset.soundcloudReady = "true";
}

function renderSoundCloudPlayer(container, tracks, playlistUrl) {
  if (!Array.isArray(tracks) || !tracks.length) {
    container.innerHTML =
      '<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>';
    container.dataset.soundcloudReady = "error";
    return;
  }

  container.classList.add("sc-player");

  const list = document.createElement("div");
  list.className = "sc-track-list";
  const audio = document.createElement("audio");
  audio.preload = "none";
  activeSoundCloudAudios.add(audio);

  let currentTrackId = null;
  let currentButton = null;
  let currentIndex = null;
  let isLoading = false;
  const buttons = [];

  const setButtonState = (btn, state) => {
    btn.dataset.state = state;
    btn.textContent = state === "playing" ? "⏸" : state === "loading" ? "..." : "▶";
  };

  const resetButton = (btn) => setButtonState(btn, "idle");

  const resetCurrent = () => {
    if (currentButton) {
      resetButton(currentButton);
    }
    currentTrackId = null;
    currentButton = null;
    currentIndex = null;
  };

  audio.addEventListener("ended", () => {
    const nextIndex = currentIndex === null ? -1 : currentIndex + 1;
    if (nextIndex >= 0 && nextIndex < tracks.length) {
      playTrackAt(nextIndex, { auto: true });
      return;
    }
    resetCurrent();
  });
  audio.addEventListener("pause", () => {
    if (currentButton && audio.currentTime < (audio.duration || Infinity)) {
      resetButton(currentButton);
    }
  });

const playTrackAt = async (index, { auto = false } = {}) => {
    if (isLoading) return;
    const track = tracks[index];
    const button = buttons[index];
    if (!track || !button) return;

    if (!auto && currentIndex === index && !audio.paused) {
      audio.pause();
      resetButton(button);
      return;
    }

    isLoading = true;
    setButtonState(button, "loading");
    try {
      const streamUrl = await resolveSoundCloudStreamUrl(track);
      if (!streamUrl) throw new Error("No stream URL returned");
      audio.src = streamUrl;
      await audio.play();
      updateMediaSessionMetadata(track);

      if (currentButton && currentButton !== button) {
        resetButton(currentButton);
      }

      currentButton = button;
      currentTrackId = track?.id ?? index;
      currentIndex = index;
      setButtonState(button, "playing");
    } catch (err) {
      console.error("Failed to play SoundCloud track", err);
      resetButton(button);
      container.dataset.soundcloudReady = "error";
    } finally {
      isLoading = false;
    }
  };

  tracks.forEach((track, index) => {
    const trackEl = document.createElement("div");
    trackEl.className = "sc-track";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "sc-track__button";
    button.setAttribute("aria-label", "Play track");
    setButtonState(button, "idle");
    buttons.push(button);

    const titleEl = document.createElement("div");
    titleEl.className = "sc-track__title";
    titleEl.textContent = track?.title || `Track ${index + 1}`;

    trackEl.append(button, titleEl);
    list.append(trackEl);

    button.addEventListener("click", () => {
      void playTrackAt(index);
    });
  });

  container.innerHTML = "";
  container.append(list, audio);
  // Attribution block removed to avoid double attribution; now handled in header row
  container.dataset.soundcloudReady = "true";
}

function updateMediaSessionMetadata(track) {
  if (!("mediaSession" in navigator) || typeof MediaMetadata === "undefined") return;
  const title = track?.title || "Classical Music";
  const artist =
    track?.publisher_metadata?.artist ||
    track?.user?.username ||
    track?.user?.full_name ||
    "";
  const album = track?.publisher_metadata?.album_title || "";
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist,
    album,
    artwork: [
      {
        src: "/images/about_music_logo.png",
        type: "image/png",
      },
    ],
  });
}
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
  padding: 0px 36px;
  box-shadow: none;
  backdrop-filter: none;
}

.about {
  height: 100%;
  overflow-y: auto;
}

.about,
.about * {
  font-family: "Source Sans 3";
}

.about__eyebrow {
  margin: 0 0 8px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.about__logo {
  display: block;
  width: min(140px, 40vw);
  height: auto;
  margin: 14px auto 10px;
  object-fit: contain;
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
  font-family: "Source Sans 3";
}

.about__author {
  margin-top: 28px;
  padding: 0;
  border-radius: 0;
  border: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  background: transparent;
}

.about__photo {
  width: 120px;
  height: 120px;
  border-radius: 14px;
  object-fit: cover;
  flex: 0 0 auto;
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
  font-family: "Source Sans 3";
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

.about__contributors {
  margin-top: 18px;
  padding: 0;
  border-radius: 0;
  border: 0;
  background: transparent;
}

.about__contributors-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin: 0 0 10px;
}

.about__contributors-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.about__contributors-item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}

.about__contributors-name {
  font-weight: 600;
  color: #111827;
}

.about__contributors-link {
  color: #2563eb;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.about__contributors-link:hover {
  border-bottom-color: currentColor;
}

.about__contributors-toggle {
  flex-basis: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  font-size: 12px;
  color: #111827;
}

.about__contributors-toggle-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.about__contributors-toggle-input {
  accent-color: #111827;
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
  max-height: min(90vh, calc(100dvh - 24px));
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.composer-modal__header {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px 24px 12px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;
}

.composer-modal__titles {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 220px;
  max-width: calc(100% - 20px);
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
  z-index: 2;
}

.composer-modal__body {
  padding: 12px 24px 24px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  scroll-padding-bottom: 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  column-gap: 16px;
  row-gap: 16px;
  -webkit-overflow-scrolling: touch;
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

.composer-modal__header-actions {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
}

.composer-modal__nav--header {
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: nowrap;
}

.composer-modal__share {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #f8fafc;
  color: inherit;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.composer-modal__share:active {
  transform: translateY(1px);
}

.composer-modal__share-icon {
  width: 18px;
  height: 18px;
  display: block;
}

.composer-modal__share-feedback {
  font-size: 12px;
  color: #64748b;
  white-space: nowrap;
}

.composer-modal__nav--mobile {
  display: none;
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

.composer-modal__facts-title {
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 16px;
  color: #0f172a;
}

.composer-modal__playlist-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0px;
}

.composer-modal__playlist-title {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  color: #0f172a;
}

.sc-powered {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
}

.sc-powered__img {
  height: 18px;
  display: block;
}

.composer-modal__playlist {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-self: stretch;
  width: 100%;
  max-width: 100%;
}

.composer-modal__playlist-box {
  width: 100%;
  max-width: 100%;
  max-height: 250px;
  border: #757575 0.5px solid;
  overflow-x: hidden;
  overflow-y: auto;
}

:deep(.sc-player) {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

:deep(.sc-player__status) {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #1f2937;
}

:deep(.sc-player__spinner) {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(15, 23, 42, 0.25);
  border-top-color: #0f172a;
  border-radius: 50%;
  animation: sc-spin 0.8s linear infinite;
  flex: 0 0 auto;
}

@keyframes sc-spin {
  to {
    transform: rotate(360deg);
  }
}

:deep(.sc-track-list) {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

:deep(.sc-track) {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  width: 100%;
}

:deep(.sc-track__button) {
  flex: 0 0 auto;
}

:deep(.sc-track__title) {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.sc-player__embed) {
  width: 100%;
  max-width: 100%;
  height: 450px;
  border: 0;
  display: block;
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

.filter-dock {
  position: fixed;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: max-content;
  max-width: 360px;
  touch-action: none;
  cursor: grab;
}

.filter-dock:active {
  cursor: grabbing;
}

.filter-dock__header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}


.filter-dock__collapse {
  padding: 0 10px;
  min-width: 32px;
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
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(8px);
}

.control-btn {
  height: 32px;
  min-width: 38px;
  padding: 0 8px;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.16);
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  user-select: none;
  font-family: "Source Sans 3";
}

.control-btn {
  -webkit-tap-highlight-color: transparent;
}

.control-btn:focus {
  outline: none;
}

.control-btn:focus-visible {
  outline: 2px solid rgba(15, 23, 42, 0.35);
  outline-offset: 2px;
}

/* Hover - только для устройств с мышью/трекпадом */
@media (hover: hover) and (pointer: fine) {
  .control-btn:hover {
    background: rgba(15, 23, 42, 0.5);
  }

  .control-primary:hover {
    filter: brightness(1.02);
  }

  .control-btn:disabled:hover,
  .control-btn:disabled:active {
    background: rgba(255, 255, 255, 0.98);
  }
}

/* На мобилке даем короткий feedback по :active без залипания */
@media (hover: none) and (pointer: coarse) {
  .control-btn:active {
    background: rgba(15, 23, 42, 0.12);
  }
}


.control-btn:active {
  transform: translateY(1px);
}

.control-btn:disabled {
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}

.control-btn:disabled:hover,
.control-btn:disabled:active {
  background: rgba(255, 255, 255, 0.98);
}

.control-primary {
  border-color: rgba(15, 23, 42, 0.18);
  background: #ffffff;
  color: #101827;
}


.filter-dock__toggle {
  width: 100%;
  justify-content: center;
}

.filter-panel {
  position: relative;
  width: 200px;
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
  font-weight: 400;
}

@media (max-width: 720px) {

  .composer-modal__playlist-box {
    max-height: 500px;
    border: none;
  }

  .filter-dock {
    max-width: calc(100% - 20px);
    touch-action: none;
  }

  .filter-panel {
    width: 180px;
    max-width: 100%;
  }

  .filter-panel__item {
    grid-template-columns: auto 1fr;
    align-items: flex-start;
  }

  .composer-modal__facts li {
    padding: 4px 12px;

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

.filter-fade-enter-active,
.filter-fade-leave-active {
  transition: none;
}

.filter-fade-enter-from,
.filter-fade-leave-to {
  opacity: 1;
}

@media (max-width: 720px) {
  .composer-modal {
    padding: calc(env(safe-area-inset-top, 16px) + 12px) 0 calc(env(safe-area-inset-bottom, 12px));
    align-items: flex-start;
  }

  .composer-modal__content {
    border-radius: 16px 16px 0 0;
    width: calc(100% - 12px);
    max-height: calc(100dvh - env(safe-area-inset-top, 16px) - env(safe-area-inset-bottom, 0px) - 16px);
    height: auto;
    margin: 0 auto;
  }

  .composer-modal__body {
    padding: 10px 16px calc(18px + env(safe-area-inset-bottom, 0px));
    min-height: 0;
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
    align-items: center;
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

  .composer-modal__nav--header {
    display: none;
  }

  .composer-modal__header-actions {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .composer-modal__nav--mobile {
    display: inline-flex;
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: center;
    justify-content: center;
    gap: 10px;
  }

  .composer-modal__nav--mobile .composer-modal__arrow {
    width: 38px;
    height: 38px;
  }

  .composer-modal__nav--mobile .composer-modal__position {
    font-size: 14px;
  }
}

@media (max-width: 640px) {
  .about__card {
    padding: 0px 22px;
  }

  .about__logo {
    width: min(120px, 55vw);
    margin: 12px auto 10px;
  }

  .about__title {
    font-size: 21px;
    line-height: 1.2;
    margin-top: 15px;
  }

  .about__author {
    flex-direction: row;
    align-items: center;
  }

  .about__photo {
    width: 120px;
    height: 120px;
    margin: 0;
  }
}
</style>
