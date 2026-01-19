<template>
  <section class="quiz">
    <div class="quiz__card">
      <header class="quiz__header">
        <h1 class="quiz__title">{{ quizContent.title }}</h1>
        <p class="quiz__subtitle">{{ quizContent.subtitle }}</p>
      </header>

      <div v-if="!hasStarted" class="quiz__intro">
        <div class="quiz__intro-card">
          <div class="quiz__intro-title">{{ quizContent.rulesTitle }}</div>
          <ul class="quiz__intro-list">
            <li>{{ quizContent.rule1 }}</li>
            <li>{{ quizContent.rule2 }}</li>
            <li>{{ quizContent.rule3 }}</li>
          </ul>
        </div>
        <div class="quiz__difficulty">
          <div class="quiz__difficulty-label">
            {{ quizContent.difficultyLabel }}
          </div>
          <div class="quiz__difficulty-options">
            <button type="button" class="quiz__difficulty-option" :class="{ 'is-active': difficulty === 'simple' }"
              :aria-pressed="difficulty === 'simple'" :disabled="isLoadingQuiz" @click="difficulty = 'simple'">
              {{ quizContent.difficultySimple }}
            </button>
            <button type="button" class="quiz__difficulty-option" :class="{ 'is-active': difficulty === 'hard' }"
              :aria-pressed="difficulty === 'hard'" :disabled="isLoadingQuiz" @click="difficulty = 'hard'">
              {{ quizContent.difficultyHard }}
            </button>
          </div>
        </div>
        <div v-if="quizError" class="quiz__error" role="status">
          {{ quizError }}
        </div>
        <button class="quiz__primary" type="button" :disabled="isLoadingQuiz" @click="startQuiz">
          {{ isLoadingQuiz ? quizContent.loadingQuiz : quizContent.start }}
        </button>
      </div>

      <div v-else-if="isComplete" class="quiz__result">
        <div class="quiz__result-score">
          {{ scoreText }}/{{ totalPointsText }}
        </div>
        <div class="quiz__result-mode">
          {{ quizContent.resultModeLabel }} {{ playedModeLabel }}
        </div>
        <div class="quiz__result-text">
          {{ quizContent.resultLine }}
        </div>
        <div class="quiz__result-text">
          {{ resultMessage }}
        </div>

        <div class="quiz__share">
          <div class="quiz__share-title">{{ quizContent.shareTitle }}</div>
          <div class="quiz__share-preview">
            <div class="quiz__share-preview-title">{{ quizContent.sharePreviewTitle }}</div>
            <div class="quiz__share-preview-body">{{ shareTextWithUrl }}</div>
          </div>
          <div class="quiz__share-actions">
            <!--
            <a class="quiz__share-button" :href="shareLinks.x" target="_blank" rel="noopener noreferrer">
              {{ quizContent.shareX }}
            </a>
            <a class="quiz__share-button" :href="shareLinks.facebook" target="_blank" rel="noopener noreferrer">
              {{ quizContent.shareFacebook }}
            </a>
            <a class="quiz__share-button" :href="shareLinks.linkedIn" target="_blank" rel="noopener noreferrer">
              {{ quizContent.shareLinkedIn }}
            </a>
            -->
            <a class="quiz__share-button" :href="shareLinks.telegram" target="_blank" rel="noopener noreferrer">
              {{ quizContent.shareTelegram }}
            </a>
            <a class="quiz__share-button" :href="shareLinks.whatsApp" target="_blank" rel="noopener noreferrer">
              {{ quizContent.shareWhatsApp }}
            </a>
          </div>
        </div>

        <button class="quiz__primary" type="button" @click="restartQuiz">
          {{ quizContent.retry }}
        </button>
      </div>

      <div v-else class="quiz__round">
        <div class="quiz__round-top">
          <div class="quiz__round-label">{{ roundLabel }}</div>

          <div class="quiz__round-top-right">
            <div class="quiz__score-pill">
              {{ quizContent.scoreLabel }} {{ scoreText }}/{{ totalPointsText }}
            </div>

            <button class="quiz__secondary quiz__secondary--ghost" type="button" :aria-label="quizContent.abort"
              :title="quizContent.abort" @click="abortQuiz">
              <span class="quiz__icon" aria-hidden="true">×</span>
            </button>
          </div>
        </div>
        <div class="quiz__progress-track" aria-hidden="true">
          <div class="quiz__progress-bar" :style="{ width: `${progressPercent}%` }"></div>
        </div>

        <div class="quiz__listen">
          <button class="quiz__play" type="button" :disabled="!currentAudioSrc" @click="togglePlay">
            <span class="quiz__play-icon" :class="{ 'quiz__play-icon--pause': isPlaying }"></span>
            <span style="font-size: 14px">{{ isPlaying ? quizContent.pause : quizContent.play }}</span>
          </button>
          <div class="quiz__listen-body">
            <div class="quiz__listen-title">{{ quizContent.listenPrompt }}</div>
            <div class="quiz__listen-status" :class="{ 'quiz__listen-status--error': hasAudioError }">
              {{ audioStatusMessage }}
            </div>
          </div>
        </div>

        <audio ref="audioEl" class="quiz__audio" :key="currentRound?.id" :src="currentAudioSrc" preload="none"
          aria-hidden="true" @play="handlePlay" @playing="handlePlaying" @pause="handlePause" @ended="handleEnded"
          @waiting="handleWaiting" @canplay="handleCanPlay" @loadeddata="handleLoadedData"
          @error="handleAudioError"></audio>

        <div class="quiz__question">{{ quizContent.chooseComposerPrompt }}</div>
        <div class="quiz__options">
          <button v-for="(option, index) in currentRound.composerOptions" :key="option" class="quiz__option"
            type="button" :disabled="isComposerAnswered" :aria-pressed="option === currentRound.selectedComposer"
            :class="{
              'is-selected': option === currentRound.selectedComposer,
              'is-correct': isComposerAnswered && option === currentRound.composer,
              'is-wrong':
                isComposerAnswered &&
                option === currentRound.selectedComposer &&
                option !== currentRound.composer,
            }" :style="{ '--index': index }" @click="selectComposerOption(option)">
            {{ option }}
          </button>
        </div>

        <div class="quiz__question">{{ quizContent.chooseEraPrompt }}</div>
        <div class="quiz__options quiz__options--era">
          <button v-for="(option, index) in currentRound.eraOptions" :key="option" class="quiz__option" type="button"
            :disabled="isEraAnswered" :aria-pressed="option === currentRound.selectedEra" :class="{
              'is-selected': option === currentRound.selectedEra,
              'is-correct': isEraAnswered && option === currentRound.eraLabel,
              'is-wrong':
                isEraAnswered &&
                option === currentRound.selectedEra &&
                option !== currentRound.eraLabel,
            }" :style="{ '--index': index }" @click="selectEraOption(option)">
            {{ option }}
          </button>
        </div>

        <div v-if="isComposerAnswered || isEraAnswered" class="quiz__feedback" role="status">
          <div v-if="isComposerAnswered" class="quiz__feedback-block">
            <div class="quiz__feedback-title">
              {{
                isCurrentCorrect
                  ? quizContent.composerCorrect
                  : quizContent.composerWrong
              }}
            </div>
            <div class="quiz__feedback-body">
              {{ quizContent.composerAnswerLabel }} {{ currentRound.composer }}
            </div>
          </div>
          <div v-if="isEraAnswered" class="quiz__feedback-block">
            <div class="quiz__feedback-title">
              {{
                isCurrentEraCorrect
                  ? quizContent.eraCorrect
                  : quizContent.eraWrong
              }}
            </div>
            <div class="quiz__feedback-body">
              {{ quizContent.eraAnswerLabel }} {{ currentRound.eraLabel }}
            </div>
          </div>
        </div>

        <div class="quiz__actions">
          <button class="quiz__secondary" type="button" :disabled="!isAnswered" @click="nextRound">
            {{ nextLabel }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue";
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
  eraLabels: {
    type: Object,
    default: () => ({}),
  },
});

const EASY_PLAYLIST_URL =
  "https://soundcloud.com/dmitry-kotikov/sets/quizeasy";
const HARD_PLAYLIST_URL =
  "https://soundcloud.com/dmitry-kotikov/sets/quizhard";

const EASY_TITLE_COMPOSER_PAIRS = [
  [
    'Danse Du Grand Calumet De La Paix  from "Les Sauvages" (Les Indes Galantes) Jean-Philippe Rameau',
    "Jean-Philippe Rameau",
  ],
  ["Carl Orff - Carmina Burana - O Fortuna", "Carl Orff"],
  ["Finlandia, Op.26", "Jean Sibelius"],
  ["George Gershwin - Rhapsody In Blue", "George Gershwin"],
  ["Rossini - The Barber of Seville - Overture - Marriner", "Gioachino Rossini"],
  ["Richard Strauss - Also Sprach Zarathustra, Op. 30", "Richard Strauss"],
  ["Nessum dorma - Turandot / Giacomo Puccini", "Giacomo Puccini"],
  [
    "Offenbach: Orpheus in the Underworld, Overture. (Can-can)",
    "Jacques Offenbach",
  ],
  [
    "Shostakovich: Symphony No. 7 in C Major, Op. 60 (Leningrad) - I. Allegretto (June 1988)",
    "Dmitri Shostakovich",
  ],
  [
    "Sergei Prokofiev - Dance Of The Knights from Romeo and Juliet, Op. 64",
    "Sergei Prokofiev",
  ],
  ["Igor Stravinsky Rite Of Spring – NEC Philharmonia + Hugh Wolff", "Igor Stravinsky"],
  ["MAURICE RAVEL ~ Bolero", "Maurice Ravel"],
  ["Rachmaninoff Piano Concerto No. 1, Op. 1 - I. Vivace", "Sergei Rachmaninoff"],
  ["Scriabin - Etude in D# minor op8no12", "Alexander Scriabin"],
  ["Gymnopédie no.1 - Erik Satie", "Erik Satie"],
  ["Clair de Lune - Debussy", "Claude Debussy"],
  ["Gustav Mahler: Adagietto from Symphony #5", "Gustav Mahler"],
  [
    "Rimsky-Korsakov: Scheherazade, Op. 35 - The Tale of Prince Kalendar ( Lento-Allegro molto)",
    "Nikolai Rimsky-Korsakov",
  ],
  [
    "Edvard Grieg: Peer Gynt Suite No.1, Op. 46 / Morning Mood (performed using Vienna Symphonic Library)",
    "Edvard Grieg",
  ],
  [
    "Antonín Dvořák — Symphony No. 9 In E Minor  From The New World , Op. 95 IV. Allegro Con Fuoco",
    "Antonin Dvorak",
  ],
  [
    "Pyotr Ilyich Tchaikovsky - The Nutcracker Suite, Op. 71a. III. Waltz of the Flowers",
    "Pyotr Ilyich Tchaikovsky",
  ],
  ["Khovanshchina: Introduction - Dawn on the Moscow River", "Modest Mussorgsky"],
  ["Carmen - Habanera (Piano Version) Georges Bizet", "Georges Bizet"],
  ["The Swan - Saint-Saens", "Camille Saint-Saens"],
  ["Alexander Borodin: Polovetsian Dances", "Alexander Borodin"],
  ["Brahms - Symphony No. 3 In F Major, Op. 90 - III. Poco Allegretto", "Johannes Brahms"],
  ["Johann Strauss II - The Blue Danube Waltz", "Johann Strauss II"],
  ["La Donna E Mobile - Giuseppe Verdi", "Giuseppe Verdi"],
  [
    "Liszt - La Campanella In G - Sharp Minor (From Grandes Études De Paganini, S.141,No.3)",
    "Franz Liszt",
  ],
  ["Robert Schumann - Kinderszenen Op.15 No.7, Träumerei", "Robert Schumann"],
  ["Chopin - Nocturne in E Flat Major op. 9 No. 2", "Frederic Chopin"],
  ["Wedding March - Felix Mendelssohn", "Felix Mendelssohn"],
  [
    "Former Anthem of Russia (1990-2000) - The Patriotic Song, Glinka | патриотическая песня глинки",
    "Mikhail Glinka",
  ],
  [
    "Hector Berlioz / Symphonie Fantastique, Op.14 V Dream of a Witches' Sabbath",
    "Hector Berlioz",
  ],
  ["Franz Schubert - Ave Maria", "Franz Schubert"],
  [
    "Paganini - Violin Concerto No. 2 In B Minor, III. Rondo “La Campanella“",
    "Niccolo Paganini",
  ],
  [
    "Ludwig Van Beethoven - Sonata No. 17 In D Minor For Piano, Op. 31 - 2 (The Tempest)- III. Allegretto",
    "Ludwig van Beethoven",
  ],
  [
    "Serenade No.13, G Major, K525, Eine Kleine Nachtmusic II. Romanze Andante",
    "Wolfgang Amadeus Mozart",
  ],
  ["Joseph Haydn: Symphony No. 49 In F Minor - Allegro Di Molto", "Joseph Haydn"],
  ['Handel/Goossens: "Hallelujah" from "Messiah" HWV 56', "George Frideric Handel"],
  ["Scarlatti: Sonata In D Minor K141", "Domenico Scarlatti"],
  ["Orchestral Suite No. 3 in D Major, BWV 1068 ”Air on G String”", "Johann Sebastian Bach"],
  ["Violin Concerto in E major, RV 269 - Spring", "Antonio Vivaldi"],
];

const HARD_TITLE_COMPOSER_PAIRS = [
  ["Rameau - La Poule", "Jean-Philippe Rameau"],
  ["Carmina Burana, XIV. In Taberna - Carl Orff", "Carl Orff"],
  [
    "Symphony No.2 In D Major, Op. 43: I. Allegretto",
    "Jean Sibelius",
  ],
  [
    "Gershwin - 3 Preludes:  I. Allegro ben ritmato e deciso",
    "George Gershwin",
  ],
  ["I'taliana In Algeri - Overture", "Gioachino Rossini"],
  [
    "Strauss: Die Frau ohne Schatten Symphonic Fantasy (Erato 1992)",
    "Richard Strauss",
  ],
  [
    "Giacomo Puccini - Madama Butterfly -  Humming Chorus",
    "Giacomo Puccini",
  ],
  ["La Belle Helene - Overture", "Jacques Offenbach"],
  [
    "SHOSTAKOVICH: String Quartet No. 8 in C Minor, Op. 110: II. Allegro molto - Quatuor Danel",
    "Dmitri Shostakovich",
  ],
  ["Prokofiev: Symphony No. 1 in D Major, Op. 25", "Sergei Prokofiev"],
  [
    "Stravinsky: Firebird Suite - Infernal Dance of King Kaschei",
    "Igor Stravinsky",
  ],
  ["Ravel, La Valse", "Maurice Ravel"],
  ["Rachmaninoff Elegie Op. 3 No. 1", "Sergei Rachmaninoff"],
  [
    "Alexander Scriabin - Piano Sonata No 5 in F sharp Op 53",
    "Alexander Scriabin",
  ],
  ["Sarabande N.1", "Erik Satie"],
  [
    "La Cathedrale Engloutie / The Sunken Cathedral - Claude Debussy",
    "Claude Debussy",
  ],
  ["Mahler Symphony No 3 in D Minor (October 2018)", "Gustav Mahler"],
  [
    "RIMSKY-KORSAKOV Scheherazade:  1 The Sea and Sinbad’s Ship",
    "Nikolai Rimsky-Korsakov",
  ],
  ["1. Allegro moderato (D minor)", "Sergei Rachmaninoff"],
  [
    "A. Dvorak, Stabat Mater \"Inflammatus\", Cornelia Lanz (Altsolo), Herkulessaal Munchen",
    "Antonin Dvorak",
  ],
  ["P.I. Tchaikovsky:  Kak bi znala ya", "Pyotr Ilyich Tchaikovsky"],
  [
    "Modest Mussorgsky (Orch. Shostakovich) - Songs and Dances of Death - Alvarez - Toro- Campinas - 2019",
    "Modest Mussorgsky",
  ],
  ["Bizet: The Pearl Fishers, Au fond du temple saint", "Georges Bizet"],
  [
    "Camille Saint-Saens, violin concerto N.3 in B minor op 61, 1st m",
    "Camille Saint-Saens",
  ],
  [
    "Занятие 16-17 Бородин_Опера Князь Игорь 5 Плач Ярославны",
    "Alexander Borodin",
  ],
  ["Brahms, Violin Concerto in D, op. 77", "Johannes Brahms"],
  ["Strauss, Johann Tritsch Tratsch Polka", "Johann Strauss II"],
  ["Verdi Requiem: \"Dies Irae\"", "Giuseppe Verdi"],
  ["Liszt - Consolation No. 3 In D - Flat Major", "Franz Liszt"],
  ["Carnaval, Op. 9 No. 5 Eusebius - Robert Schumann", "Robert Schumann"],
  [
    "Chopin Heroic Polonaise Op.53 A Flat Major - Played by Valentina Lisitsa",
    "Frederic Chopin",
  ],
  ["Mendelssohn Venetian Gondola Song Op 30 No 6", "Felix Mendelssohn"],
  ["Попутная песня - Нестор Кукольник-М.Глинка", "Mikhail Glinka"],
  [
    "Le carnaval romain: Overture (feat. Armenian Philharmonic Orchestra)",
    "Hector Berlioz",
  ],
  ["Schubert - Der Leiermann - Thomas Quasthoff  Daniel Barenboim", "Franz Schubert"],
  [
    "Paganini: Violin Concerto No. 1 in D Major (Augustin Hadelich, violin; Carlos Kalmar, conductor)",
    "Niccolo Paganini",
  ],
  [
    "Beethoven Symphony No. 3 in E-Flat Major, Op  55 (Eroica) (September 2019)",
    "Ludwig van Beethoven",
  ],
  [
    "Violin Concerto No. 3 in G major, K. 216 - I. Allegro - Wolfgang Amadeus Mozart (8D Binaural Remastered - Music Therapy)",
    "Wolfgang Amadeus Mozart",
  ],
  [
    "01 Haydn - The Creation, Part One, The Representation Of Chaos",
    "Joseph Haydn",
  ],
  [
    "George Frideric Handel - Sarabande Suite No 4 In D Minor HMV 437 (Chamber)",
    "George Frideric Handel",
  ],
  ["D. Scarlatti, Sonata in B Minor, K. 27", "Domenico Scarlatti"],
  ["French Suite No. 5 in G major, BWV 816: VII. Gigue (Original Version)", "Johann Sebastian Bach"],
  [
    "Vivaldi: Mandolin Concerto in C major, RV 425 - 1. Allegro (2013.06.12)",
    "Antonio Vivaldi",
  ],
];

function normalizeKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const EASY_TITLE_COMPOSER_MAP = new Map(
  EASY_TITLE_COMPOSER_PAIRS.map(([title, composer]) => [
    normalizeKey(title),
    composer,
  ])
);
const HARD_TITLE_COMPOSER_MAP = new Map(
  HARD_TITLE_COMPOSER_PAIRS.map(([title, composer]) => [
    normalizeKey(title),
    composer,
  ])
);

const COMPOSER_POOL = timelineComposers.map((composer) => composer.name);

function normalizeNameForLookup(name) {
  return String(name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getLocalizedComposerName(name) {
  const normalized = normalizeNameForLookup(name);
  return props.composerNames?.[normalized] || name;
}

function getEraLabelForId(id) {
  return props.eraLabels?.[id] || ERAS.find((era) => era.id === id)?.label || "";
}

const ERA_OPTIONS = computed(() => ERAS.map((era) => getEraLabelForId(era.id)));

const composerNameLookup = new Map(
  timelineComposers.map((composer) => [normalizeKey(composer.name), composer.name])
);

const QUIZ_COPY = {
  en: {
    retry: "Play again",
    abort: "Quit quiz",
    confirmAbort: "Do you really want to quit the quiz?",
    title: "Guess the composer",
    subtitle: "Press Play, listen to the excerpt, and guess who wrote it.",
    start: "Start the quiz",
    rulesTitle: "How it works",
    rule1: "Listen to the excerpt and choose the composer.",
    rule2: "Pick the era for a bonus half-point.",
    rule3: "Simple uses famous pieces. Hard uses rarer ones. Your total shows up at the end.",
    difficultyLabel: "Mode",
    difficultySimple: "Simple",
    difficultyHard: "Hard",
    loadingQuiz: "Loading quiz...",
    playlistError: "Quiz data is unavailable right now.",
    round: "Round",
    of: "of",
    play: "Play",
    pause: "Pause",
    listenPrompt: "Listen to the excerpt",
    listenHelp: "Replay as many times as you need.",
    loading: "Loading audio...",
    audioError: "Audio is unavailable. Try again in a moment.",
    chooseComposerPrompt: "Who is the composer?",
    chooseEraPrompt: "Which era fits best?",
    composerCorrect: "Correct composer!",
    composerWrong: "Not quite.",
    eraCorrect: "Era bonus!",
    eraWrong: "Not quite.",
    composerAnswerLabel: "Composer:",
    eraAnswerLabel: "Era:",
    next: "Next",
    finish: "Finish",
    scoreLabel: "Score",
    resultLine: "Final score",
    resultModeLabel: "Mode:",
    resultWin: "Sharp ear - well done.",
    resultLose: "Worth another listen to sharpen your ear.",
    retry: "Play again",
    shareTitle: "Share your result",
    sharePreviewTitle: "Message preview",
    shareTemplate: "My score in the classical music quiz ({mode} mode): {score}/{total}. Test your knowledge here",
    shareX: "X",
    shareFacebook: "Facebook",
    shareLinkedIn: "LinkedIn",
    shareTelegram: "Telegram",
    shareWhatsApp: "WhatsApp",
    shareCopy: "Copy link",
    shareCopied: "Copied",
  },
  de: {
    retry: "Nochmal spielen",
    abort: "Quiz abbrechen",
    confirmAbort: "Willst du das Quiz wirklich abbrechen?",
    title: "Rate den Komponisten",
    subtitle: "Abspielen druecken, anhoeren und den Komponisten erraten.",
    start: "Quiz starten",
    rulesTitle: "So geht's",
    rule1: "Hoere den Ausschnitt und waehle den Komponisten.",
    rule2: "Waehle auch die Epoche - das gibt einen halben Bonuspunkt.",
    rule3: "Einfach = bekannte Stuecke. Schwer = seltenere Stuecke. Die Gesamtpunktzahl kommt am Ende.",
    difficultyLabel: "Modus",
    difficultySimple: "Einfach",
    difficultyHard: "Schwer",
    loadingQuiz: "Quiz wird geladen...",
    playlistError: "Quizdaten sind gerade nicht verfuegbar.",
    round: "Runde",
    of: "von",
    play: "Abspielen",
    pause: "Pause",
    listenPrompt: "Ausschnitt anhoeren",
    listenHelp: "Du kannst beliebig oft neu starten.",
    loading: "Audio wird geladen...",
    audioError: "Audio ist gerade nicht verfuegbar. Versuch's gleich nochmal.",
    chooseComposerPrompt: "Wer ist der Komponist?",
    chooseEraPrompt: "Welche Epoche passt am besten?",
    composerCorrect: "Komponist stimmt!",
    composerWrong: "Nicht ganz.",
    eraCorrect: "Epoche-Bonus!",
    eraWrong: "Nicht ganz.",
    composerAnswerLabel: "Komponist:",
    eraAnswerLabel: "Epoche:",
    next: "Weiter",
    finish: "Fertig",
    scoreLabel: "Punkte",
    resultLine: "Endstand",
    resultModeLabel: "Modus:",
    resultWin: "Starkes Gehoer - gut gemacht.",
    resultLose: "Ein zweiter Durchlauf hilft dem Gehoer.",
    retry: "Nochmal spielen",
    shareTitle: "Ergebnis teilen",
    sharePreviewTitle: "Vorschau",
    shareTemplate: "Mein Ergebnis im Klassik-Quiz ({mode}): {score}/{total}. Teste dein Wissen hier",
    shareX: "X",
    shareFacebook: "Facebook",
    shareLinkedIn: "LinkedIn",
    shareTelegram: "Telegram",
    shareWhatsApp: "WhatsApp",
    shareCopy: "Link kopieren",
    shareCopied: "Kopiert",
  },
  ru: {
    retry: "Сыграть еще раз",
    abort: "Прервать викторину",
    confirmAbort: "Действительно ли вы хотите прервать викторину?",
    title: "Угадайте композитора",
    subtitle: "Нажмите \"Слушать\", прослушайте фрагмент и угадайте автора.",
    start: "Начать виктотрину",
    rulesTitle: "Как играть",
    rule1: "Прослушайте фрагмент и выберите композитора.",
    rule2: "Угадайте эпоху - это дает полбалла бонусом.",
    rule3: "\"Просто\" - более известные произведения. \"Сложно\" - более редкие. Итоговый счет будет в конце.",
    loadingQuiz: "Загружаем викторину...",
    playlistError: "Викторина сейчас недоступна.",
    round: "Раунд",
    of: "из",
    play: "Слушать",
    pause: "Пауза",
    listenPrompt: "Слушайте фрагмент",
    listenHelp: "Можно переслушивать сколько угодно раз.",
    loading: "Загружаем аудио...",
    audioError: "Аудио сейчас недоступно. Попробуйте еще раз чуть позже.",
    chooseComposerPrompt: "Кто это?",
    chooseEraPrompt: "К какой эпохе это ближе?",
    composerCorrect: "Композитор угадан верно!",
    composerWrong: "Композитор угадан неверно.",
    eraCorrect: "Бонус за эпоху!",
    eraWrong: "Не совсем.",
    composerAnswerLabel: "Композитор:",
    eraAnswerLabel: "Эпоха:",
    next: "Дальше",
    finish: "Узнать результат",
    scoreLabel: "Счет",
    resultLine: "Итоговый счет",
    resultModeLabel: "Режим:",
    resultWin: "Вы - настоящий знаток академической музыки.",
    resultLose: "Стоит прослушать еще раз всех композиторов на таймлайне и результат будет лучше.",
    retry: "Сыграть еще раз",
    shareTitle: "Поделиться результатом",
    sharePreviewTitle: "Текст:",
    difficultyLabel: "Режим",
    difficultySimple: "Простой",
    difficultyHard: "Сложный",
    shareTemplate: "Мой результат в викторине по классической музыке на {mode} уровне: {score}/{total}. Проверьте себя здесь",
    shareX: "X",
    shareFacebook: "Facebook",
    shareLinkedIn: "LinkedIn",
    shareTelegram: "Telegram",
    shareWhatsApp: "WhatsApp",
    shareCopy: "Скопировать ссылку",
    shareCopied: "Скопировано",
  },
};

const SOUND_CLOUD_PROXY_BASE = (
  import.meta.env.VITE_SOUND_CLOUD_PROXY ||
  import.meta.env.VITE_SOUNDCLOUD_PROXY ||
  import.meta.env.SOUND_CLOUD_PROXY ||
  import.meta.env.SOUNDCLOUD_PROXY ||
  ""
).replace(/\/$/, "");

const rounds = ref([]);
const hasStarted = ref(false);
const isComplete = ref(false);
const currentRoundIndex = ref(0);
const audioEl = ref(null);
const isPlaying = ref(false);
const isLoadingAudio = ref(false);
const hasAudioError = ref(false);
const difficulty = ref("simple");
const isLoadingQuiz = ref(false);
const quizError = ref("");
const playlistCache = new Map();
const playedMode = ref("simple");

const quizContent = computed(() => QUIZ_COPY[props.language] || QUIZ_COPY.en);
const playedModeLabel = computed(() => {
  const mode = playedMode.value || difficulty.value;
  return mode === "hard"
    ? quizContent.value.difficultyHard
    : quizContent.value.difficultySimple;
});
const shareModeText = computed(() => {
  const mode = playedMode.value || difficulty.value;
  if ((props.language || "en") === "ru") {
    return mode === "hard" ? "сложном" : "легком";
  }
  return playedModeLabel.value;
});
const shareUrl = computed(() => {
  if (typeof window === "undefined") return "";
  return window.location.href.split("#")[0];
});

const shareTextNoUrl = computed(() => {
  const template = quizContent.value.shareTemplate || "";
  return template
    .replace("{score}", scoreText.value)
    .replace("{total}", totalPointsText.value)
    .replace("{mode}", shareModeText.value)
    .replace(/\s+/g, " ")
    .trim();
});

const shareTextWithUrl = computed(() => {
  const url = shareUrl.value || "";
  const text = shareTextNoUrl.value || "";
  if (!url) return text;
  if (!text) return url;
  return `${text}: ${url}`;
});

const shareLinks = computed(() => {
  const textWithUrl = encodeURIComponent(shareTextWithUrl.value);
  return {
    // x: `https://twitter.com/intent/tweet?text=${textWithUrl}`,
    // facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    // linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    telegram: `https://t.me/share/url?text=${textWithUrl}`,
    whatsApp: `https://wa.me/?text=${textWithUrl}`,
  };
});
const totalRounds = computed(() => rounds.value.length);
const currentRound = computed(
  () => rounds.value[currentRoundIndex.value] || null
);
const isComposerAnswered = computed(() =>
  Boolean(currentRound.value?.selectedComposer)
);
const isEraAnswered = computed(() =>
  Boolean(currentRound.value?.selectedEra)
);
const isAnswered = computed(() => isComposerAnswered.value && isEraAnswered.value);
const isCurrentCorrect = computed(
  () => currentRound.value?.selectedComposer === currentRound.value?.composer
);
const isCurrentEraCorrect = computed(
  () => currentRound.value?.selectedEra === currentRound.value?.eraLabel
);
const score = computed(() =>
  rounds.value.reduce(
    (sum, round) =>
      sum + (round.composerCorrect ? 1 : 0) + (round.eraCorrect ? 0.5 : 0),
    0
  )
);
const totalPoints = computed(() => totalRounds.value * 1.5);
const scoreText = computed(() => formatScore(score.value));
const totalPointsText = computed(() => formatScore(totalPoints.value));
const roundLabel = computed(() => {
  if (!hasStarted.value || isComplete.value) return "";
  return `${quizContent.value.round} ${currentRoundIndex.value + 1} ${quizContent.value.of
    } ${totalRounds.value}`;
});
const nextLabel = computed(() =>
  currentRoundIndex.value >= totalRounds.value - 1
    ? quizContent.value.finish
    : quizContent.value.next
);
const resultMessage = computed(() => {
  if (!isComplete.value) return "";
  const threshold = totalPoints.value * 0.7;
  return score.value >= threshold
    ? quizContent.value.resultWin
    : quizContent.value.resultLose;
});
const progressPercent = computed(() => {
  if (!hasStarted.value || !totalRounds.value) return 0;
  if (isComplete.value) return 100;
  return ((currentRoundIndex.value + 1) / totalRounds.value) * 100;
});
const currentAudioSrc = computed(() => {
  if (!currentRound.value?.id) return "";
  return buildProxyUrl(`/api/soundcloud/audio/${currentRound.value.id}`);
});
const audioStatusMessage = computed(() => {
  if (hasAudioError.value) return quizContent.value.audioError;
  if (isLoadingAudio.value) return quizContent.value.loading;
  return quizContent.value.listenHelp;
});

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

function buildPlaylistProxyUrl(url) {
  const encoded = encodeURIComponent(url);
  return buildProxyUrl(`/api/soundcloud/playlist?url=${encoded}`);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function canonicalizeComposer(name) {
  return composerNameLookup.get(normalizeKey(name)) || name;
}

function getComposerEraLabel(name) {
  const composer = canonicalizeComposer(name);
  const composerData = timelineComposers.find((c) => c.name === composer);
  if (!composerData) return null;
  const midpoint = Math.round((composerData.birth + composerData.death) / 2);
  const era = ERAS.find((entry) => midpoint >= entry.from && midpoint < entry.to);
  const fallbackId = ERAS[ERAS.length - 1]?.id;
  return getEraLabelForId(era?.id || fallbackId);
}

function buildComposerOptions(correct) {
  const candidates = COMPOSER_POOL.filter((name) => name !== correct);
  const picks = shuffle(candidates).slice(0, 3);
  return shuffle([correct, ...picks].map(getLocalizedComposerName));
}

function buildRounds(tracks) {
  return tracks.map((track) => {
    const composerName = canonicalizeComposer(track.composer);
    const eraLabel = getComposerEraLabel(composerName) || "";
    const composerLabel = getLocalizedComposerName(composerName);
    return {
      ...track,
      composer: composerLabel,
      eraLabel,
      composerOptions: buildComposerOptions(composerName),
      eraOptions: ERA_OPTIONS.value,
      selectedComposer: null,
      selectedEra: null,
      composerCorrect: false,
      eraCorrect: false,
    };
  });
}

function getPlaylistConfig(mode) {
  if (mode === "hard") {
    return {
      url: HARD_PLAYLIST_URL,
      map: HARD_TITLE_COMPOSER_MAP,
    };
  }
  return {
    url: EASY_PLAYLIST_URL,
    map: EASY_TITLE_COMPOSER_MAP,
  };
}

function pickRandomItems(list, count) {
  if (!Array.isArray(list) || !list.length) return [];
  const shuffled = shuffle(list);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

async function loadPlaylistTracks(mode) {
  if (playlistCache.has(mode)) {
    return playlistCache.get(mode);
  }
  isLoadingQuiz.value = true;
  quizError.value = "";
  const { url, map } = getPlaylistConfig(mode);
  try {
    const response = await fetch(buildPlaylistProxyUrl(url));
    if (!response.ok) {
      throw new Error(`Playlist error ${response.status}`);
    }
    const data = await response.json();
    const mapped = (data?.tracks || [])
      .map((track) => {
        const key = normalizeKey(track?.title);
        const rawComposer = map.get(key);
        if (!rawComposer || !track?.id) return null;
        return {
          id: track.id,
          composer: rawComposer,
          title: track.title,
        };
      })
      .filter(Boolean);
    if (!mapped.length) {
      throw new Error("Playlist mapping empty");
    }
    playlistCache.set(mode, mapped);
    return mapped;
  } catch (err) {
    console.error("Quiz playlist load failed", err);
    quizError.value = quizContent.value.playlistError;
    return [];
  } finally {
    isLoadingQuiz.value = false;
  }
}

function resetAudioState() {
  const audio = audioEl.value;
  isPlaying.value = false;
  isLoadingAudio.value = false;
  hasAudioError.value = false;
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  audio.load();
}

function stopAudio() {
  const audio = audioEl.value;
  isPlaying.value = false;
  isLoadingAudio.value = false;
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
}

async function startQuiz() {
  if (isLoadingQuiz.value) return;
  quizError.value = "";
  const playlistTracks = await loadPlaylistTracks(difficulty.value);
  if (!playlistTracks.length) return;
  const selected = pickRandomItems(playlistTracks, 10);
  playedMode.value = difficulty.value;
  rounds.value = buildRounds(selected);
  currentRoundIndex.value = 0;
  hasStarted.value = true;
  isComplete.value = false;
  resetAudioState();
}

function restartQuiz() {
  startQuiz();
}

function abortQuiz() {
  if (typeof window !== "undefined") {
    const message = quizContent.value.confirmAbort || "Do you really want to quit the quiz?";
    if (!window.confirm(message)) return;
  }

  stopAudio();
  rounds.value = [];
  currentRoundIndex.value = 0;
  isComplete.value = false;
  hasStarted.value = false;
  quizError.value = "";
  hasAudioError.value = false;
  isLoadingAudio.value = false;
  isPlaying.value = false;
  playedMode.value = difficulty.value;
}


function selectComposerOption(option) {
  const round = currentRound.value;
  if (!round || round.selectedComposer) return;
  round.selectedComposer = option;
  round.composerCorrect = option === round.composer;
  stopAudio();
}

function selectEraOption(option) {
  const round = currentRound.value;
  if (!round || round.selectedEra) return;
  round.selectedEra = option;
  round.eraCorrect = option === round.eraLabel;
}

function nextRound() {
  if (!isAnswered.value) return;
  if (currentRoundIndex.value >= totalRounds.value - 1) {
    isComplete.value = true;
    stopAudio();
    return;
  }
  currentRoundIndex.value += 1;
}

async function togglePlay() {
  const audio = audioEl.value;
  if (!audio) return;
  hasAudioError.value = false;
  try {
    if (audio.paused) {
      isLoadingAudio.value = true;
      await audio.play();
    } else {
      audio.pause();
    }
  } catch (err) {
    console.error("Audio playback failed", err);
    hasAudioError.value = true;
    isLoadingAudio.value = false;
  }
}

function handlePlay() {
  isPlaying.value = true;
  isLoadingAudio.value = false;
}

function handlePlaying() {
  isPlaying.value = true;
  isLoadingAudio.value = false;
}

function handlePause() {
  isPlaying.value = false;
  isLoadingAudio.value = false;
}

function handleEnded() {
  isPlaying.value = false;
}

function handleWaiting() {
  isLoadingAudio.value = true;
}

function handleCanPlay() {
  isLoadingAudio.value = false;
}

function handleLoadedData() {
  isLoadingAudio.value = false;
}

function handleAudioError() {
  hasAudioError.value = true;
  isLoadingAudio.value = false;
  isPlaying.value = false;
}

watch(currentAudioSrc, async () => {
  if (!hasStarted.value || isComplete.value) return;
  await nextTick();
  resetAudioState();
});

watch(difficulty, () => {
  quizError.value = "";
});

watch(isComplete, (complete) => {
  if (complete) stopAudio();
});

onBeforeUnmount(() => {
  stopAudio();
});
</script>

<style scoped>
.quiz,
.quiz * {
  font-family: "Source Sans 3";
}

.quiz {
  --ink: #101419;
  --muted: #5a6472;
  --accent: #ffffff;
  --accent-strong: #6b6b6b;
  --accent-ink: #3a1d00;
  --success: #0f766e;
  --danger: #b91c1c;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding: 0 0 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
}

.quiz__card {
  width: min(860px, 100%);
  padding: 0 36px;
  border-radius: 0;
  background: none;
  border: 0;
  position: relative;
  z-index: 1;
  animation: none;
}

.quiz__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 0px;
}

.quiz__title {
  margin: 0;
  margin-top: 20px;
  font-family: "Source Sans 3";
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.quiz__subtitle {
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.6;
  color: #1f2937;
  max-width: 520px;
}

.quiz__intro {
  display: grid;
  gap: 18px;
}

.quiz__intro-card {
  border-radius: 0;
  padding: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.quiz__intro-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin-bottom: 10px;
}

.quiz__intro-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 14px;
}

.quiz__intro-list {
  margin: 0;
  padding-left: 16px;
  color: #1f2937;
  line-height: 1.6;
  font-size: 16px;
}

.quiz__difficulty {
  display: grid;
  gap: 8px;
}

.quiz__difficulty-label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.quiz__difficulty-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.quiz__difficulty-option {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid transparent;
  background: #f8fafc;
  color: var(--ink);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, border 0.2s ease;
}

.quiz__difficulty-option.is-active {
  background: #e5e7eb;
  border-color: #111827;
}

.quiz__difficulty-option:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.quiz__error {
  color: var(--danger);
  font-size: 14px;
}

.quiz__primary {
  font-size: 14px;
  justify-self: start;
  padding: 12px 20px;
  border-radius: 6px;
  border: 0;
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.quiz__primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  box-shadow: none;
}

.quiz__primary:hover:not(:disabled) {
  transform: translateY(-1px);
  background: #1f2937;
}

.quiz__result {
  display: grid;
  gap: 12px;
  justify-items: start;
}

.quiz__result-score {
  font-size: 48px;
  font-family: "Source Sans 3";
  color: var(--ink);
}

.quiz__result-text {
  color: var(--muted);
}

.quiz__result-mode {
  color: var(--muted);
  font-weight: 600;
}

.quiz__share {
  width: 100%;
  padding-top: 14px;
  border-top: 1px solid #e5e7eb;
  display: grid;
  gap: 10px;
}

.quiz__share-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.quiz__share-preview {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 12px;
  background: #f8fafc;
  display: grid;
  gap: 8px;
}

.quiz__share-preview-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.quiz__share-preview-body {
  color: #111827;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}

.quiz__share-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.quiz__share-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.quiz__share-button:hover {
  background: #f8fafc;
  transform: translateY(-1px);
}


.quiz__round {
  display: grid;
  gap: 18px;
}

.quiz__round-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.quiz__round-top-right {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.quiz__round-label {
  font-weight: 600;
  color: var(--ink);
}

.quiz__score-pill {
  font-size: 14px;
  color: #1f2937;
}

.quiz__progress-track {
  height: 6px;
  border-radius: 0;
  background: #e5e7eb;
  overflow: hidden;
}

.quiz__progress-bar {
  height: 100%;
  background: linear-gradient(120deg, #64afe3, #374766);
  transition: width 0.3s ease;
}

.quiz__listen {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: 0;
}

.quiz__play {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 6px;
  border: 0;
  background: #111827;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.quiz__play:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}

.quiz__play:hover:not(:disabled) {
  transform: translateY(-1px);
  background: #1f2937;
}

.quiz__play-icon {
  width: 0;
  height: 0;
  font-size: 14px;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 12px solid currentColor;
}

.quiz__play-icon--pause {
  position: relative;
  width: 12px;
  height: 12px;
  border: none;
}

.quiz__play-icon--pause::before,
.quiz__play-icon--pause::after {
  content: "";
  position: absolute;
  top: 0;
  width: 4px;
  height: 12px;
  background: currentColor;
  border-radius: 2px;
}

.quiz__play-icon--pause::before {
  left: 0;
}

.quiz__play-icon--pause::after {
  right: 0;
}

.quiz__listen-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.quiz__listen-title {
  font-weight: 600;
  color: var(--ink);
}

.quiz__listen-status {
  font-size: 13px;
  color: var(--muted);
}

.quiz__listen-status--error {
  color: var(--danger);
}

.quiz__audio {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.quiz__question {
  font-weight: 600;
  color: var(--ink);
}

.quiz__options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.quiz__options--era {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.quiz__option {
  padding: 12px 14px;
  border-radius: 6px;
  border: 0;
  background: #f8fafc;
  font-weight: 500;
  color: #111827;
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease;
  animation: none;
}

.quiz__option:hover:not(:disabled) {}

.quiz__option:disabled {
  cursor: default;
}

.quiz__option.is-selected {
  background: #e5e7eb;
}

.quiz__option.is-correct {
  background: #f0fdfa;
  color: #0f766e;
}

.quiz__option.is-wrong {
  background: #fef2f2;
  color: #7f1d1d;
}

.quiz__feedback {
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: 0;
  display: grid;
  gap: 12px;
}

.quiz__feedback-block {
  display: grid;
  gap: 4px;
}

.quiz__feedback-title {
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0;
}

.quiz__feedback-body {
  color: var(--muted);
}

.quiz__actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.quiz__secondary {
  padding: 10px 18px;
  border-radius: 6px;
  border: 0;
  background: #f8fafc;
  color: var(--ink);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  font-size: 14px;
}

.quiz__secondary--ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 0;
  color: #6b7280;
  opacity: 0.85;
  border-radius: 9999px;
}

.quiz__secondary--ghost:hover:not(:disabled) {
  background: #f3f4f6;
  color: #111827;
  opacity: 1;
  transform: none;
  text-decoration: none;
}

.quiz__icon {
  font-size: 22px;
  line-height: 1;
  font-weight: 600;
}

.quiz__secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz__secondary:hover:not(:disabled) {
  background: #f8fafc;
  transform: translateY(-1px);
}

@media (max-width: 700px) {
  .quiz__share-actions {
    gap: 8px;
  }

  .quiz__share-button {
    padding: 10px 14px;
  }

  .quiz {
    padding: 0 0 24px;
  }

  .quiz__card {
    padding: 0 18px;
    border-radius: 0;
  }

  .quiz__title {
    font-size: 26px;
  }

  .quiz__round-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .quiz__round-top-right {
    width: 100%;
    justify-content: space-between;
  }

  .quiz__listen {
    flex-direction: column;
    align-items: flex-start;
  }

  .quiz__options,
  .quiz__options--era {
    grid-template-columns: 1fr;
  }

  .quiz__play {
    width: 100%;
    font-size: 14px;
    justify-content: center;
  }

  .quiz__actions {
    flex-direction: column;
    justify-content: stretch;
  }

  .quiz__secondary {
    width: 100%;
    text-align: center;
  }

  .quiz__secondary--ghost {
    width: 36px;
    height: 36px;
    align-self: flex-start;
    text-align: center;
    opacity: 0.8;
  }
}
</style>
