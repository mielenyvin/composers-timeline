<template>
  <section class="about">
    <div class="about__card">
      <img
        class="about__logo"
        src="/images/about_music_logo.png"
        alt="Music logo"
        loading="lazy"
      />

      <h1 class="about__title">{{ content.title }}</h1>
      <p class="about__text">{{ content.intro }}</p>
      <p class="about__text">{{ content.goal }}</p>

      <div class="about__author">
        <img
          class="about__photo"
          src="/images/dk3-min.jpg"
          alt="Dmitrii Kotikov"
          loading="lazy"
        />
        <div class="about__author-body">
          <div class="about__author-label">{{ content.authorLabel }}</div>
          <div class="about__author-name">{{ content.authorName }}</div>
          <a
            class="about__link"
            href="https://www.linkedin.com/in/dmitrykotikov/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            class="about__link"
            href="https://thequot.es/"
            target="_blank"
            rel="noreferrer"
          >
            thequot.es
          </a>
        </div>
      </div>

      <div class="about__contributors">
        <div class="about__contributors-title">
          {{ content.contributorsTitle }}
        </div>
        <ul class="about__contributors-list">
          <li
            v-for="person in contributors"
            :key="person.url"
            class="about__contributors-item"
          >
            <span class="about__contributors-name">{{ person.name }}</span>
            <a
              class="about__contributors-link"
              :href="person.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ person.linkText }}
            </a>
            <div
              v-if="person.url === 'https://www.linkedin.com/in/olga-shibanova'"
              class="about__contributors-toggle"
            >
              <label class="about__contributors-toggle-label">
                <input
                  v-model="localTestFeatures"
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
</template>

<script setup>
import { computed } from "vue";

const ABOUT_COPY = {
  en: {
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
        linkText: "Official website of the pianist",
      },
      {
        name: "Olga Matveeva",
        url: "https://www.linkedin.com/in/olga-shibanova",
        linkText: "LinkedIn",
      },
    ],
  },
  de: {
    title: "Klassische Musik mit dem Ohr verstehen",
    intro:
      "Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",
    goal:
      "Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",
    authorLabel: "Initiator und Autor des Projekts",
    authorName: "Dmitrii Kotikov",
    contributorsTitle: "Projektpartner",
    testFeaturesLabel: "Testfunktionen einschalten",
    contributors: [
      {
        name: "Timofey Muhortov",
        url: "https://timofeymuhortov.ru",
        linkText: "Offizielle Website des Pianisten",
      },
      {
        name: "Olga Matveeva",
        url: "https://www.linkedin.com/in/olga-shibanova",
        linkText: "LinkedIn",
      },
    ],
  },
  ru: {
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
        url: "https://www.linkedin.com/in/olga-shibanova",
        linkText: "LinkedIn",
      },
    ],
  },
};
const props = defineProps({
  language: {
    type: String,
    default: "en",
  },
  testFeaturesEnabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:testFeaturesEnabled"]);

const content = computed(() => ABOUT_COPY[props.language] || ABOUT_COPY.en);
const contributors = computed(
  () => content.value.contributors || ABOUT_COPY.en.contributors || []
);
const testFeaturesLabel = computed(
  () =>
    content.value.testFeaturesLabel ||
    ABOUT_COPY.en.testFeaturesLabel ||
    "Test functions"
);

const localTestFeatures = computed({
  get: () => props.testFeaturesEnabled,
  set: (value) => emit("update:testFeaturesEnabled", value),
});
</script>

<style scoped>
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
}

.about__contributors-toggle-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.about__contributors-toggle-input {
  width: 14px;
  height: 14px;
}

@media (max-width: 700px) {
  .about__card {
    padding: 0 18px;
  }

  .about__logo {
    width: min(120px, 45vw);
  }

  .about__title {
    font-size: 24px;
  }

  .about__author {
    flex-direction: column;
    align-items: flex-start;
  }

  .about__photo {
    width: 100px;
    height: 100px;
  }
}
</style>
