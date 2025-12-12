// Data
const composers = [
  { name: "Antonio Vivaldi", birth: 1678, death: 1741 },
  { name: "Johann Sebastian Bach", birth: 1685, death: 1750 },
  { name: "Domenico Scarlatti", birth: 1685, death: 1757 },
  { name: "George Frideric Handel", birth: 1685, death: 1759 },
  { name: "Joseph Haydn", birth: 1732, death: 1809 },
  { name: "Wolfgang Amadeus Mozart", birth: 1756, death: 1791 },
  { name: "Ludwig van Beethoven", birth: 1770, death: 1827 },
  { name: "Niccolò Paganini", birth: 1782, death: 1840 },
  { name: "Franz Schubert", birth: 1797, death: 1828 },
  { name: "Hector Berlioz", birth: 1803, death: 1869 },
  { name: "Mikhail Glinka", birth: 1804, death: 1857 },
  { name: "Felix Mendelssohn", birth: 1809, death: 1847 },
  { name: "Frédéric Chopin", birth: 1810, death: 1849 },
  { name: "Robert Schumann", birth: 1810, death: 1856 },
  { name: "Franz Liszt", birth: 1811, death: 1886 },
  { name: "Giuseppe Verdi", birth: 1813, death: 1901 },
  { name: "Johann Strauss II", birth: 1825, death: 1899 },
  { name: "Johannes Brahms", birth: 1833, death: 1897 },
  { name: "Alexander Borodin", birth: 1833, death: 1887 },
  { name: "Camille Saint-Saëns", birth: 1835, death: 1921 },
  { name: "Jacques Offenbach", birth: 1819, death: 1880 },
  { name: "Georges Bizet", birth: 1838, death: 1875 },
  { name: "Modest Mussorgsky", birth: 1839, death: 1881 },
  { name: "Pyotr Ilyich Tchaikovsky", birth: 1840, death: 1893 },
  { name: "Antonín Dvořák", birth: 1841, death: 1904 },
  { name: "Edvard Grieg", birth: 1843, death: 1907 },
  { name: "Nikolai Rimsky-Korsakov", birth: 1844, death: 1908 },
  { name: "Giacomo Puccini", birth: 1858, death: 1924 },
  { name: "Gustav Mahler", birth: 1860, death: 1911 },
  { name: "Claude Debussy", birth: 1862, death: 1918 },
  { name: "Erik Satie", birth: 1866, death: 1925 },
  { name: "Alexander Scriabin", birth: 1872, death: 1915 },
  { name: "Sergei Rachmaninoff", birth: 1873, death: 1943 },
  { name: "Maurice Ravel", birth: 1875, death: 1937 },
  { name: "Sergei Prokofiev", birth: 1891, death: 1953 },
  { name: "Dmitri Shostakovich", birth: 1906, death: 1975 },
];

const composerImages = {
  "Richard Wagner": "comp/wagner.jpg",
  "Igor Stravinsky": "comp/stravinsky.jpg",

  "Antonio Vivaldi": "comp/vivaldi.jpg",
  "Johann Sebastian Bach": "comp/bach.png",
  "Domenico Scarlatti": "comp/scarlatti.jpg",
  "George Frideric Handel": "comp/handel.jpg",
  "Joseph Haydn": "comp/haydn.jpg",
  "Wolfgang Amadeus Mozart": "comp/mozart.jpg",
  "Ludwig van Beethoven": "comp/beethoven.jpg",
  "Niccolò Paganini": "comp/paganini.jpeg",
  "Franz Schubert": "comp/schubert.jpg",
  "Hector Berlioz": "comp/berlioz.jpg",
  "Mikhail Glinka": "comp/glinka.jpg",
  "Felix Mendelssohn": "comp/mendelssohn.jpg",
  "Frédéric Chopin": "comp/chopin.jpeg",
  "Robert Schumann": "comp/schumann.jpg",
  "Franz Liszt": "comp/liszt.jpg",
  "Giuseppe Verdi": "comp/verdi.jpg",
  "Johann Strauss II": "comp/strauss.jpg",
  "Johannes Brahms": "comp/brahms.jpg",
  "Alexander Borodin": "comp/borodin.jpg",
  "Camille Saint-Saëns": "comp/saint-saens.jpg",
  "Jacques Offenbach": "comp/offenbach.jpg",
  "Georges Bizet": "comp/bizet.jpg",
  "Modest Mussorgsky": "comp/musorgskiy.jpg",
  "Pyotr Ilyich Tchaikovsky": "comp/tchaikovsky.jpg",
  "Antonín Dvořák": "comp/dvorak.jpg",
  "Edvard Grieg": "comp/grieg.jpg",
  "Nikolai Rimsky-Korsakov": "comp/rimsky-korsakov.jpg",
  "Gustav Mahler": "comp/mahler.jpg",
  "Claude Debussy": "comp/debussy.jpg",
  "Erik Satie": "comp/satie.jpg",
  "Alexander Scriabin": "comp/scriabin.jpg",
  "Sergei Rachmaninoff": "comp/rachmaninoff.jpg",
  "Maurice Ravel": "comp/ravel.jpg",
  "Béla Bartók": "comp/bartok.jpg",
  "Sergei Prokofiev": "comp/prokofiev.jpg",
  "Dmitri Shostakovich": "comp/shostakovich.jpg",

  // additional major composers
  "Carl Maria von Weber": "comp/weber.jpg",
  "Giacomo Puccini": "comp/puccini.jpg",
  "Jean Sibelius": "comp/sibelius.jpg",
  "Christoph Willibald Gluck": "comp/gluck.jpg",
  "Gioachino Rossini": "comp/rossini.jpg",

  // extra famous composers who died before 1804
  "Jean-Philippe Rameau": "comp/rameau.jpg",
};

function getComposerImage(name) {
  return composerImages[name] || null;
}

const ERAS = [
  {
    id: "baroque",
    label: "Baroque",
    from: 1600,
    to: 1750,
  },
  {
    id: "classical",
    label: "Classical",
    from: 1750,
    to: 1820,
  },
  {
    id: "romantic",
    label: "Romantic",
    from: 1820,
    to: 1900,
  },
  {
    id: "twentieth",
    label: "20th Century",
    from: 1900,
    to: 2000,
  },
];

const earliestBirth = Math.min(...composers.map((c) => c.birth));
const latestBirth = Math.max(...composers.map((c) => c.birth));
let activeComposers = [...composers];

const WHITE = { r: 255, g: 255, b: 255 };
const ACCENT = { r: 37, g: 99, b: 235 }; // лёгкий синий от подсветки фактов

// Bar/era color ramp (light, serious, no yellow/green):
// soft gray -> pale steel blue -> cool periwinkle -> light slate
const COLOR_STOPS = [
  { stop: 0, rgb: hexToRgb("#f3f4f6") }, // soft gray
  { stop: progressForYear(1750), rgb: hexToRgb("#e6eef8") }, // pale steel blue
  { stop: progressForYear(1820), rgb: hexToRgb("#e8f4ff") }, // ice blue (no violet)
  { stop: 1, rgb: hexToRgb("#eef2f7") }, // light slate
];

// Compute data max year (based only on composers)
// Axis range:
//  - фиксированный старт в 1675 (Baroque начинается раньше и уходит влево за экран)
//  - фиксированный конец в 1980, чтобы дальше шкала просто не рисовалась
const axisMinYear = 1677.5;
const axisMaxYear = 1980;
const axisSpan = axisMaxYear - axisMinYear;

// Делает внутренний контейнер достаточно широким для любых экранов:
//  - pxPerYear задаёт базовую «плотность» шкалы
//  - fallbackWidth даёт запас по видимой области
const pxPerYear = 6;
const viewportWidthMultiplier = 2.05;
const extraWidthPx = 0;

function ensureTimelineWidth() {
  const inner = document.querySelector(".timeline-inner");
  const timeline = document.getElementById("timeline");
  if (!inner || !timeline) return;

  const baseWidth = axisSpan * pxPerYear + extraWidthPx;
  const fallbackWidth =
    (timeline.clientWidth || window.innerWidth) * viewportWidthMultiplier;
  const finalWidth = Math.max(baseWidth, fallbackWidth);

  inner.style.width = finalWidth + "px";
  inner.style.minWidth = finalWidth + "px";
}

function yearToPercent(year) {
  return ((year - axisMinYear) / axisSpan) * 100;
}

function clamp01(value) {
  if (Number.isNaN(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const int = parseInt(value, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = (v) => Math.round(v).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixColors(a, b, t) {
  const ratio = clamp01(t);
  return {
    r: a.r + (b.r - a.r) * ratio,
    g: a.g + (b.g - a.g) * ratio,
    b: a.b + (b.b - a.b) * ratio,
  };
}

function progressForYear(year) {
  const span = latestBirth - earliestBirth;
  if (span <= 0) return 0;
  return clamp01((year - earliestBirth) / span);
}

function colorForProgress(progress) {
  const p = clamp01(progress);
  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    const current = COLOR_STOPS[i];
    const next = COLOR_STOPS[i + 1];
    if (p <= next.stop) {
      const localSpan = next.stop - current.stop || 1;
      const localT = clamp01((p - current.stop) / localSpan);
      return mixColors(current.rgb, next.rgb, localT);
    }
  }
  return COLOR_STOPS[COLOR_STOPS.length - 1].rgb;
}

function colorForYear(year) {
  return colorForProgress(progressForYear(year));
}

function barGradient(progress) {
  const base = colorForProgress(progress);
  const highlight = mixColors(base, WHITE, 0.14);
  const accent = mixColors(base, ACCENT, 0.035);
  return `linear-gradient(145deg, ${rgbToHex(
    highlight
  )} 0%, ${rgbToHex(base)} 52%, ${rgbToHex(accent)} 100%)`;
}

function eraGradient(startYear, endYear) {
  const startColor = colorForYear(startYear);
  const endColor = colorForYear(endYear);

  // Keep axis bands in the same "light serious" family as the bars:
  // mostly white-mixed, with only a tiny blue accent.
  const left = mixColors(startColor, WHITE, 0.22);
  const rightAccented = mixColors(endColor, ACCENT, 0.025);
  const right = mixColors(rightAccented, WHITE, 0.18);

  return `linear-gradient(90deg, ${rgbToHex(left)} 0%, ${rgbToHex(
    right
  )} 100%)`;
}

function setActiveComposers(next) {
  if (Array.isArray(next)) {
    activeComposers = [...next];
  } else {
    activeComposers = [...composers];
  }
}

function buildAxis() {
  const axis = document.getElementById("axis");
  if (!axis) return;
  axis.innerHTML = "";

  // Начинаем подписи десятилетий с ближайшего десятилетия справа от axisMinYear
  const decadeStart = Math.ceil(axisMinYear / 10) * 10;
  const decadeEnd = Math.ceil(axisMaxYear / 10) * 10;

  // Сначала рисуем полосы эр
  ERAS.forEach((era) => {
    const start = Math.max(era.from, axisMinYear);
    const end = Math.min(era.to, axisMaxYear);
    if (end <= start) return;

    const band = document.createElement("div");
    band.className = "era-band";
    band.style.left = yearToPercent(start) + "%";
    band.style.width = yearToPercent(end) - yearToPercent(start) + "%";
    band.style.backgroundImage = eraGradient(start, end);
    band.style.backgroundColor = "transparent";
    band.textContent = era.label;

    // Для первой эры (Baroque) подпись выравниваем по правому краю полосы
    if (era.id === "baroque") {
      band.style.justifyContent = "flex-end";
      band.style.paddingLeft = "6px";
      band.style.paddingRight = "26px";
      band.style.textAlign = "right";
    }

    // If the era is clipped at the right edge (ends exactly at axisMaxYear),
    // убираем правую рамку, чтобы не торчал лишний пиксель.
    if (end === axisMaxYear) {
      band.style.borderRight = "none";
    }

    axis.appendChild(band);
  });

  // Затем поверх - тики и подписи десятилетий
  for (let year = decadeStart; year <= decadeEnd; year += 10) {
    const tick = document.createElement("div");
    const isMajor = year % 50 === 0; // каждые 50 лет - крупный тик
    tick.className = "axis-tick " + (isMajor ? "major" : "minor");
    tick.style.left = yearToPercent(year) + "%";
    axis.appendChild(tick);

    const label = document.createElement("div");
    label.className =
      "axis-label " + (isMajor ? "axis-label-major" : "axis-label-minor");
    label.style.left = yearToPercent(year) + "%";
    label.textContent = year;
    axis.appendChild(label);
  }
}

function buildGantt() {
  const gantt = document.getElementById("gantt");
  const axis = document.getElementById("axis");
  const timeline = document.getElementById("timeline");
  if (!gantt) return;
  gantt.innerHTML = "";

  const data = activeComposers || [];
  const ganttWidth =
    (gantt && gantt.clientWidth) ||
    (axis && axis.clientWidth) ||
    (timeline && timeline.clientWidth) ||
    window.innerWidth;

  // Sort composers by birth year so rows go top-to-bottom in time
  const sorted = [...data].sort((a, b) => a.birth - b.birth);

  // One composer per lane (classic Gantt style)
  const laneCount = sorted.length;
  const placements = sorted.map((composer, index) => ({
    composer,
    laneIndex: index,
  }));

  // Desired vertical gap between bars (in px)
  const verticalGap = 2;

  // Fixed bar height: 50px, independent of viewport height
  const barHeight = 50;
  const laneHeight = barHeight + verticalGap;

  // Set the total height of the Gantt area so it can scroll vertically if needed
  const totalHeight =
    laneCount * barHeight + Math.max(0, laneCount - 1) * verticalGap;
  gantt.style.height = totalHeight + "px";
  if (!laneCount) return;

  placements.forEach(({ composer: c, laneIndex }) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("data-lane-index", laneIndex);
    bar.setAttribute("data-name", c.name);

    const progress = placements.length > 1 ? progressForYear(c.birth) : 0;
    bar.style.backgroundImage = barGradient(progress);
    bar.style.backgroundColor = "transparent";

    const left = yearToPercent(c.birth);
    const width = yearToPercent(c.death) - yearToPercent(c.birth);
    bar.style.left = left + "%";
    bar.style.width = width + "%";
    bar.style.top = laneIndex * laneHeight + "px";
    bar.style.height = barHeight + "px";
    bar.style.lineHeight = barHeight + "px";
    bar.style.fontSize = barHeight * 0.25 + "px";

    // Create thumbnail image if available
    const imgSrc = getComposerImage(c.name);
    if (imgSrc) {
      const img = document.createElement("img");
      img.className = "bar-avatar";
      const avatarSize = Math.max(10, Math.round(barHeight * 0.9));
      img.style.width = avatarSize + "px";
      img.style.height = avatarSize + "px";
      img.src = imgSrc;
      img.alt = c.name;
      bar.appendChild(img);
    }

    // Create label span for the name
    const labelSpan = document.createElement("span");
    labelSpan.className = "bar-label";
    labelSpan.textContent = c.name;
    bar.appendChild(labelSpan);

    gantt.appendChild(bar);

    // Fire selection event on click (used by Vue app)
    bar.addEventListener("click", (event) => {
      event.stopPropagation();
      window.dispatchEvent(
        new CustomEvent("composer-select", {
          detail: { composer: c, laneIndex },
        })
      );
    });

    // If full name does not fit, show only the last word (e.g. surname)
    if (bar.scrollWidth > bar.clientWidth) {
      const parts = c.name.trim().split(/\s+/);
      const lastWord = parts[parts.length - 1] || c.name;
      labelSpan.textContent = lastWord;
    }
  });
}

// Mouse drag panning (both axes)
function enablePanning() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  let isDown = false;
  let isDragging = false;
  const dragThreshold = 4;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let startScrollTop = 0;
  let lastClientX = 0;
  let lastClientY = 0;
  let rafId = null;

  const firePanEnd = () => {
    timeline.dispatchEvent(new CustomEvent("timeline-pan-end"));
  };

  const startPanning = () => {
    if (isDragging) return;
    isDragging = true;
    timeline.classList.add("panning");
    timeline.dataset.panning = "true";
  };

  const stopPanning = () => {
    if (!isDragging) return;
    isDragging = false;
    timeline.classList.remove("panning");
    timeline.dataset.panning = "false";
    firePanEnd();
  };

  function updateScroll() {
    rafId = null;
    if (!isDown || !isDragging) return;

    const dx = lastClientX - startX;
    const dy = lastClientY - startY;

    // drag right -> scroll left; drag down -> scroll up
    timeline.scrollLeft = startScrollLeft - dx;
    timeline.scrollTop = startScrollTop - dy;
  }

  const onMouseDown = (e) => {
    // Only left button drag
    if (e.button !== 0) return;

    isDown = true;
    isDragging = false;
    timeline.classList.remove("panning");

    startX = e.clientX;
    startY = e.clientY;
    lastClientX = e.clientX;
    lastClientY = e.clientY;

    startScrollLeft = timeline.scrollLeft;
    startScrollTop = timeline.scrollTop;

    // prevent text selection / image drag
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    lastClientX = e.clientX;
    lastClientY = e.clientY;

    if (!isDragging) {
      const dx = Math.abs(lastClientX - startX);
      const dy = Math.abs(lastClientY - startY);
      if (dx > dragThreshold || dy > dragThreshold) {
        startPanning();
      } else {
        return; // keep clicks working when there is no real drag
      }
    }

    if (rafId === null) {
      rafId = window.requestAnimationFrame(updateScroll);
    }
    e.preventDefault();
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    stopPanning();
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  timeline.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);

  // Touch panning with bounce blocking (iOS)
  let touchId = null;
  let touchDragStarted = false;
  let touchStartScrollLeft = 0;
  let touchStartScrollTop = 0;

  const onTouchStart = (e) => {
    if (touchId !== null) return;
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    touchId = t.identifier;
    touchDragStarted = false;
    startX = t.clientX;
    startY = t.clientY;
    lastClientX = t.clientX;
    lastClientY = t.clientY;
    touchStartScrollLeft = timeline.scrollLeft;
    touchStartScrollTop = timeline.scrollTop;
    stopPanning();
  };

  const onTouchMove = (e) => {
    if (touchId === null) return;
    const t = Array.from(e.touches).find((tt) => tt.identifier === touchId);
    if (!t) return;

    lastClientX = t.clientX;
    lastClientY = t.clientY;

    const dx = lastClientX - startX;
    const dy = lastClientY - startY;

    if (!touchDragStarted) {
      if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
        touchDragStarted = true;
        startPanning();
      } else {
        return;
      }
    }

    timeline.scrollLeft = touchStartScrollLeft - dx;
    timeline.scrollTop = touchStartScrollTop - dy;
    e.preventDefault();
  };

  const onTouchEnd = (e) => {
    if (touchId === null) return;
    const ended = Array.from(e.changedTouches).some(
      (tt) => tt.identifier === touchId
    );
    if (!ended) return;
    touchId = null;
    touchDragStarted = false;
    stopPanning();
  };

  timeline.addEventListener("touchstart", onTouchStart, { passive: true });
  timeline.addEventListener("touchmove", onTouchMove, { passive: false });
  timeline.addEventListener("touchend", onTouchEnd, { passive: true });
  timeline.addEventListener("touchcancel", onTouchEnd, { passive: true });
}

function findTopmostVisibleBar(timeline) {
  const bars = Array.from(timeline.querySelectorAll(".bar")).sort(
    (a, b) => a.offsetTop - b.offsetTop
  );
  if (!bars.length) return null;

  const viewportTop = timeline.scrollTop;

  // 1) если верх вьюпорта внутри бара — берём его
  for (const bar of bars) {
    const top = bar.offsetTop;
    const bottom = top + bar.offsetHeight;
    if (top <= viewportTop && viewportTop < bottom) {
      return bar;
    }
  }

  // 2) иначе берём первый бар ниже текущего окна
  for (const bar of bars) {
    if (bar.offsetTop > viewportTop) return bar;
  }

  // 3) иначе — последний (скролл выше всех баров)
  return bars[bars.length - 1];
}

function easeInOutCubic(t) {
  const clamped = Math.min(1, Math.max(0, t));
  return clamped < 0.5
    ? 4 * clamped * clamped * clamped
    : 1 - Math.pow(-2 * clamped + 2, 3) / 2;
}

function shouldSkipSnapAtBottom(timeline, targetBar) {
  if (!targetBar) return false;
  const maxScrollTop = Math.max(
    0,
    timeline.scrollHeight - timeline.clientHeight
  );
  const nearBottom = maxScrollTop - timeline.scrollTop <= 8;
  if (!nearBottom) return false;

  const viewportBottom = timeline.scrollTop + timeline.clientHeight;
  const contentBottom = timeline.scrollHeight;
  const targetBottom = targetBar.offsetTop + targetBar.offsetHeight;

  const gapToContentEnd = contentBottom - viewportBottom;
  const roomBelowTarget = contentBottom - targetBottom;

  // Если мы реально упёрлись в конец контента и видим последнюю плашку,
  // горизонт не трогаем.
  return gapToContentEnd <= 8 && roomBelowTarget <= 8;
}

function enableHorizontalSnapAssist() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return () => {};

  timeline.dataset.panning = "false";
  let debounceId = null;
  let isAutoScrolling = false;
  let autoScrollTimer = null;
  let lastScrollTop = timeline.scrollTop;
  let lastScrollLeft = timeline.scrollLeft;
  let sawVerticalDuringGesture = false;
  let sawHorizontalDuringGesture = false;

  const snapInset = 6; // небольшой зазор слева, чтобы плашка не прилипала впритык
  const animationDuration = 600;

  const stopAnimation = () => {
    if (autoScrollTimer) {
      clearTimeout(autoScrollTimer);
      autoScrollTimer = null;
    }
    isAutoScrolling = false;
    sawVerticalDuringGesture = false;
    sawHorizontalDuringGesture = false;
  };

  const animateTo = (targetLeft) => {
    stopAnimation();
    const startLeft = timeline.scrollLeft;
    const delta = targetLeft - startLeft;
    if (Math.abs(delta) < 1) return;

    isAutoScrolling = true;
    timeline.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    // Сбрасываем флаг по окончании нативной плавной прокрутки
    autoScrollTimer = window.setTimeout(() => {
      timeline.scrollLeft = targetLeft; // зафиксируем точное положение
      stopAnimation();
    }, animationDuration + 120);
  };

  const alignLeft = () => {
    debounceId = null;
    if (timeline.dataset.panning === "true") return;
    const targetBar = findTopmostVisibleBar(timeline);
    if (!targetBar) return;
    if (shouldSkipSnapAtBottom(timeline, targetBar)) return;

    const targetLeft = Math.max(0, targetBar.offsetLeft - snapInset);
    const delta = Math.abs(timeline.scrollLeft - targetLeft);
    if (delta < 1) return;

    animateTo(targetLeft);
  };

  const scheduleAlign = () => {
    if (isAutoScrolling) return;
    if (timeline.dataset.panning === "true") return;
    if (debounceId) window.clearTimeout(debounceId);
    debounceId = window.setTimeout(alignLeft, 20);
  };

  const onWheel = (e) => {
    // реагируем только на вертикально доминирующий скролл
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    scheduleAlign();
  };

  const onScroll = () => {
    if (isAutoScrolling) return;

    const currentTop = timeline.scrollTop;
    const currentLeft = timeline.scrollLeft;

    const dy = Math.abs(currentTop - lastScrollTop);
    const dx = Math.abs(currentLeft - lastScrollLeft);

    lastScrollTop = currentTop;
    lastScrollLeft = currentLeft;

    const isPanning = timeline.dataset.panning === "true";

    // Detect dominant direction for this scroll step
    const horizontalDominant = dx > dy * 1.2 && dx > 1.5;
    const verticalDominant = dy >= dx * 0.8 && dy > 0.8;

    // Track meaningful horizontal movement during the gesture.
    // iOS often introduces a tiny horizontal drift during vertical swipes,
    // so we only treat it as "horizontal intent" when it is clearly noticeable.
    const meaningfulHorizontal = horizontalDominant || (dx > 10 && dx > dy * 0.6);
    if (meaningfulHorizontal) {
      sawHorizontalDuringGesture = true;
    }

    // If the user is horizontally dragging, do not snap.
    if (horizontalDominant) return;

    // If vertical scroll happened, remember it.
    // During touch-drag panning we only remember it and snap on pan-end.
    if (verticalDominant) {
      sawVerticalDuringGesture = true;
      if (!isPanning) {
        scheduleAlign();
      }
    }
  };

  const onUserInterrupt = () => {
    stopAnimation();
  };
  const onScrollEnd = () => {
    if (isAutoScrolling) return;
    if (timeline.dataset.panning === "true") return;

    // Only snap after a gesture that was actually vertical.
    // If the user moved horizontally at all (common on iOS at scroll boundaries),
    // do not force a left-align snap.
    if (!sawVerticalDuringGesture) {
      sawHorizontalDuringGesture = false;
      return;
    }
    if (sawHorizontalDuringGesture) {
      sawVerticalDuringGesture = false;
      sawHorizontalDuringGesture = false;
      return;
    }

    scheduleAlign();
    sawVerticalDuringGesture = false;
    sawHorizontalDuringGesture = false;
  };

  timeline.addEventListener("wheel", onWheel, { passive: true });
  timeline.addEventListener("scroll", onScroll, { passive: true });
  timeline.addEventListener("mousedown", onUserInterrupt, { passive: true });
  timeline.addEventListener("touchstart", onUserInterrupt, { passive: true });
  timeline.addEventListener("touchend", onScrollEnd, { passive: true });
  timeline.addEventListener("mouseup", onScrollEnd, { passive: true });
  timeline.addEventListener("timeline-pan-end", onScrollEnd, {
    passive: true,
  });

  return () => {
    timeline.removeEventListener("wheel", onWheel);
    timeline.removeEventListener("scroll", onScroll);
    timeline.removeEventListener("mousedown", onUserInterrupt);
    timeline.removeEventListener("touchstart", onUserInterrupt);
    timeline.removeEventListener("touchend", onScrollEnd);
    timeline.removeEventListener("mouseup", onScrollEnd);
    timeline.removeEventListener("timeline-pan-end", onScrollEnd);
    if (debounceId) window.clearTimeout(debounceId);
    stopAnimation();
  };
}

export function initTimeline(options = {}) {
  const initial = Object.prototype.hasOwnProperty.call(options, "composers")
    ? options.composers
    : composers;
  setActiveComposers(initial);
  ensureTimelineWidth();
  buildAxis();
  buildGantt();
  enablePanning();
  const cleanupSnapAssist = enableHorizontalSnapAssist();

  // Пересчитываем ширину при смене ориентации/ресайзе окна
  const onResize = () => ensureTimelineWidth();
  window.addEventListener("resize", onResize);

  // Показываем таймлайн только после полной отрисовки
  const timelineRoot = document.getElementById("timeline");
  if (timelineRoot) {
    timelineRoot.style.visibility = "visible";
  }

  // Публичный метод для возврата в начало таймлайна
  function goToStart() {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      timeline.scrollLeft = 0;
      timeline.scrollTop = 0;
    }
  }

  return {
    goToStart,
    setComposers(next) {
      setActiveComposers(next);
      buildGantt();
    },
    destroy() {
      window.removeEventListener("resize", onResize);
      cleanupSnapAssist();
    },
  };
}

export { composers, getComposerImage };
