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

function getLastNamePart(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length <= 1) return fullName;

  const last = parts[parts.length - 1];
  const isSuffix = /^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(last);

  // Keep suffix together: "Strauss II", "Bach Jr." etc.
  if (isSuffix && parts.length >= 2) {
    return parts[parts.length - 2] + " " + last;
  }

  return last;
}

function getInitialsPlusLastName(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length <= 1) return fullName;

  const last = parts[parts.length - 1];
  const isSuffix = /^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(last);
  const lastPartsCount = isSuffix && parts.length >= 2 ? 2 : 1;

  const lastParts = parts.slice(parts.length - lastPartsCount);
  const firstParts = parts.slice(0, parts.length - lastPartsCount);

  const initials = firstParts
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => (p[0] ? p[0].toUpperCase() + "." : ""))
    .filter(Boolean)
    .join(" ");

  const tail = lastParts.join(" ");
  return initials ? `${initials} ${tail}` : tail;
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
let selectedLaneIndex = null;
let hoveredLaneIndex = null;

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
//  - basePxPerYear задаёт базовую «плотность» шкалы
//  - fallbackWidth даёт запас по видимой области
const basePxPerYear = 6;
const viewportWidthMultiplier = 2;
const extraWidthPx = 0;

const DEFAULT_SETTINGS = {
  barHeight: 50,
  widthScale: 1,
  fontScale: 1,
};

const SETTINGS_LIMITS = {
  barHeight: { min: 25, max: 150 },
  widthScale: { min: 0.05, max: 2 },
  fontScale: { min: 0.9, max: 1.8 },
};

let settings = { ...DEFAULT_SETTINGS };

function clamp(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function applySettings(next = {}) {
  settings = {
    barHeight: clamp(
      next.barHeight ?? settings.barHeight ?? DEFAULT_SETTINGS.barHeight,
      SETTINGS_LIMITS.barHeight.min,
      SETTINGS_LIMITS.barHeight.max
    ),
    widthScale: clamp(
      next.widthScale ?? settings.widthScale ?? DEFAULT_SETTINGS.widthScale,
      SETTINGS_LIMITS.widthScale.min,
      SETTINGS_LIMITS.widthScale.max
    ),
    fontScale: clamp(
      next.fontScale ?? settings.fontScale ?? DEFAULT_SETTINGS.fontScale,
      SETTINGS_LIMITS.fontScale.min,
      SETTINGS_LIMITS.fontScale.max
    ),
  };
}

function getPxPerYear() {
  return basePxPerYear * settings.widthScale;
}

function ensureTimelineWidth() {
  const inner = document.querySelector(".timeline-inner");
  const timeline = document.getElementById("timeline");
  if (!inner || !timeline) return;

  const baseWidth = axisSpan * getPxPerYear() + extraWidthPx;
  // Allow shrink/stretch with widthScale: fallback scales down too, so minimum length follows the control.
  const fallbackWidth =
    (timeline.clientWidth || window.innerWidth) *
    viewportWidthMultiplier *
    settings.widthScale;
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
  return `linear-gradient(145deg, ${rgbToHex(highlight)} 0%, ${rgbToHex(
    base
  )} 52%, ${rgbToHex(accent)} 100%)`;
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

function applySelectionHighlight() {
  const gantt = document.getElementById("gantt");
  if (!gantt) return;

  const isSelected = (lane) =>
    Number.isInteger(selectedLaneIndex) && lane === selectedLaneIndex;
  const isHovered = (lane) =>
    Number.isInteger(hoveredLaneIndex) && lane === hoveredLaneIndex;

  gantt.querySelectorAll(".bar").forEach((bar) => {
    const lane = Number(bar.getAttribute("data-lane-index"));
    bar.classList.toggle("bar--selected", isSelected(lane));
    bar.classList.toggle("bar--hovered", isHovered(lane));
  });

  gantt.querySelectorAll(".bar-connector").forEach((line) => {
    const lane = Number(line.getAttribute("data-lane-index"));
    const selected = isSelected(lane);
    const hovered = isHovered(lane);
    line.classList.toggle("bar-connector--selected", selected);
    line.classList.toggle("bar-connector--hover", hovered);
  });
}

function setSelectedLane(laneIndex) {
  if (Number.isInteger(laneIndex)) {
    selectedLaneIndex = laneIndex;
  } else {
    selectedLaneIndex = null;
  }
  applySelectionHighlight();
}

function setHoveredLane(laneIndex) {
  if (Number.isInteger(laneIndex)) {
    hoveredLaneIndex = laneIndex;
  } else {
    hoveredLaneIndex = null;
  }
  applySelectionHighlight();
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
  const axisGap =
    parseFloat(window.getComputedStyle(gantt).marginTop || "0") || 0;
  const connectors = document.createDocumentFragment();

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

  if (
    Number.isInteger(selectedLaneIndex) &&
    (selectedLaneIndex < 0 || selectedLaneIndex >= laneCount)
  ) {
    selectedLaneIndex = null;
  }
  if (
    Number.isInteger(hoveredLaneIndex) &&
    (hoveredLaneIndex < 0 || hoveredLaneIndex >= laneCount)
  ) {
    hoveredLaneIndex = null;
  }

  // Desired vertical gap between bars (in px)
  const verticalGap = 2;

  const barHeight = settings.barHeight;
  const laneHeight = barHeight + verticalGap;

  // Set the total height of the Gantt area so it can scroll vertically if needed
  const totalHeight =
    laneCount * barHeight + Math.max(0, laneCount - 1) * verticalGap;
  gantt.style.height = totalHeight + "px";
  if (!laneCount) return;

  placements.forEach(({ composer: c, laneIndex }) => {
    const startPercent = yearToPercent(c.birth);
    const endPercent = yearToPercent(c.death);
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("data-lane-index", laneIndex);
    bar.setAttribute("data-name", c.name);

    // Make all bars the same "first bar" gray gradient
    const fixedProgress = 0;
    bar.style.backgroundImage = barGradient(fixedProgress);
    bar.style.backgroundColor = "transparent";

    const left = startPercent;
    const width = endPercent - startPercent;
    const barCenterY = laneIndex * laneHeight + barHeight * 0.5;
    const connectorHeight = barCenterY + axisGap;

    const makeConnector = (percent, side) => {
      const connector = document.createElement("div");
      connector.className = "bar-connector";
      connector.setAttribute("data-lane-index", laneIndex);
      connector.setAttribute("data-side", side);
      connector.style.left = percent + "%";
      connector.style.top = -axisGap + "px";
      connector.style.height = connectorHeight + "px";
      connectors.appendChild(connector);
    };

    makeConnector(left, "start"); // birth
    makeConnector(left + width, "end"); // death

    bar.style.left = left + "%";
    bar.style.width = width + "%";
    bar.style.top = laneIndex * laneHeight + "px";
    bar.style.height = barHeight + "px";
    bar.style.lineHeight = barHeight + "px";
    bar.style.fontSize = barHeight * 0.25 * settings.fontScale + "px";

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
      setSelectedLane(laneIndex);
      window.dispatchEvent(
        new CustomEvent("composer-select", {
          detail: { composer: c, laneIndex },
        })
      );
    });
    bar.addEventListener("mouseenter", () => setHoveredLane(laneIndex));
    bar.addEventListener("mouseleave", () => setHoveredLane(null));

    // If the label is truncated (ellipsis), try initials + last name first (e.g. "W. A. Mozart");
    // if it still does not fit, fall back to last name only.
    if (labelSpan.scrollWidth > labelSpan.clientWidth) {
      labelSpan.textContent = getInitialsPlusLastName(c.name);
      if (labelSpan.scrollWidth > labelSpan.clientWidth) {
        labelSpan.textContent = getLastNamePart(c.name);
      }
    }
  });

  gantt.appendChild(connectors);
  applySelectionHighlight();
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

// When the user pans to the right and the visible bars get clipped on the left,
// auto-scroll vertically so the first visible bar starts at (or near) the left edge.
function enableHorizontalAutoAlign() {
  const timeline = document.getElementById("timeline");
  const gantt = document.getElementById("gantt");
  const axis = document.getElementById("axis");
  if (!timeline || !gantt) return () => {};

  let lastScrollLeft = timeline.scrollLeft;
  let selfScroll = false;
  let settleTimer = null;

  const tolerancePx = 0.5;
  const rightClipThreshold = 5; // px of hidden left part before we auto-scroll down

  const clearSettleTimer = () => {
    if (settleTimer !== null) {
      clearTimeout(settleTimer);
      settleTimer = null;
    }
  };

  const alignAfterSettle = (direction) => {
    clearSettleTimer();
    settleTimer = setTimeout(() => {
      settleTimer = null;
      align(direction);
    }, 90);
  };

  const isBarVerticallyVisible = (bar, top, bottom) => {
    const rect = bar.getBoundingClientRect();
    return rect.bottom > top && rect.top < bottom;
  };

  const getLaneIndex = (bar) =>
    Number(bar.getAttribute("data-lane-index")) || 0;

  const align = (direction) => {
    const bars = Array.from(gantt.querySelectorAll(".bar"));
    if (!bars.length) return;

    const containerRect = timeline.getBoundingClientRect();
    const axisRect = axis?.getBoundingClientRect();
    const barViewportTop = (axisRect?.bottom ?? containerRect.top) + 1;
    const barViewportBottom = containerRect.bottom;

    const firstVisible = bars.find((bar) => {
      return isBarVerticallyVisible(bar, barViewportTop, barViewportBottom);
    });
    if (!firstVisible) return;

    const viewportLeft = timeline.scrollLeft;
    const viewportRight = viewportLeft + timeline.clientWidth;
    const currentLane = getLaneIndex(firstVisible);
    const topLaneBar =
      bars.reduce((best, bar) => {
        const lane = getLaneIndex(bar);
        if (!best) return bar;
        const bestLane = getLaneIndex(best);
        return lane < bestLane ? bar : best;
      }, null) || firstVisible;

    if (direction === "right") {
      const isClippedLeft =
        firstVisible.offsetLeft < viewportLeft - rightClipThreshold;
      if (!isClippedLeft) return;

      let targetBar =
        bars.find((bar) => {
          const lane = getLaneIndex(bar);
          return (
            lane > currentLane &&
            bar.offsetLeft >= viewportLeft - tolerancePx &&
            isBarVerticallyVisible(bar, barViewportTop, barViewportBottom)
          );
        }) || null;

      if (!targetBar) {
        // If everything starts before the viewport, pick the latest-starting bar.
        targetBar = bars.reduce((best, bar) => {
          const lane = getLaneIndex(bar);
          if (lane <= currentLane) return best;
          if (!best) return bar;
          return bar.offsetLeft > best.offsetLeft ? bar : best;
        }, null);
      }
      if (!targetBar) return;

      const targetRect = targetBar.getBoundingClientRect();
      const desiredTop = barViewportTop + 1; // keep a tiny gap under the axis
      const delta = targetRect.top - desiredTop;

      if (Math.abs(delta) > tolerancePx) {
        selfScroll = true;
        timeline.scrollTop += delta;
        window.requestAnimationFrame(() => {
          selfScroll = false;
        });
      }
      return;
    }

    if (direction === "left") {
      const firstRect = firstVisible.getBoundingClientRect();
      const isClippedRight = firstRect.right > containerRect.right + tolerancePx;
      const atHardLeft = viewportLeft <= tolerancePx; // near the very start
      // If we're moving left and a bar above starts inside the viewport, we should align even if
      // nothing is clipped. Otherwise, allow the old behavior (clip or hard-left).

      let targetBar = null;
      // Find a bar above the current one whose left edge is already inside the viewport
      const candidates = bars.filter((bar) => {
        const lane = getLaneIndex(bar);
        if (lane >= currentLane) return false;
        return bar.offsetLeft >= viewportLeft - tolerancePx;
      });

      // If nothing is clipped and no candidates above, keep the current view.
      if (!atHardLeft && !isClippedRight && !candidates.length) return;

      if (atHardLeft) {
        // At the very left edge we always align to the topmost composer.
        targetBar = topLaneBar;
      } else if (candidates.length) {
        // Prefer the closest lane above; within that lane, choose the closest left alignment.
        targetBar = candidates.reduce((best, bar) => {
          if (!best) return bar;
          const lane = getLaneIndex(bar);
          const bestLane = getLaneIndex(best);
          if (lane > bestLane) return bar;
          if (lane === bestLane) {
            const dist = Math.abs(bar.offsetLeft - viewportLeft);
            const bestDist = Math.abs(best.offsetLeft - viewportLeft);
            return dist < bestDist ? bar : best;
          }
          return best;
        }, null);
      }

      // Fallback: topmost bar (lane 0) to guarantee alignment when at the far left.
      if (!targetBar) {
        targetBar = topLaneBar;
      }
      if (!targetBar) return;

      const targetRect = targetBar.getBoundingClientRect();
      const desiredTop = barViewportTop + 1;
      const delta = targetRect.top - desiredTop;
      const desiredLeft = Math.max(0, targetBar.offsetLeft);
      const deltaLeft = desiredLeft - timeline.scrollLeft;

      if (Math.abs(delta) > tolerancePx || Math.abs(deltaLeft) > tolerancePx) {
        selfScroll = true;
        if (Math.abs(deltaLeft) > tolerancePx) {
          timeline.scrollLeft = desiredLeft;
        }
        if (Math.abs(delta) > tolerancePx) {
          timeline.scrollTop += delta;
        }
        window.requestAnimationFrame(() => {
          selfScroll = false;
        });
      }
    }
  };

  const onScroll = () => {
    if (selfScroll) return;
    const currentLeft = timeline.scrollLeft;
    const movedRight = currentLeft > lastScrollLeft + tolerancePx;
    const movedLeft = currentLeft < lastScrollLeft - tolerancePx;

    if (movedRight) {
      alignAfterSettle("right");
    } else if (movedLeft) {
      alignAfterSettle("left");
    }

    // When we are parked at the left edge, still align to the topmost composer.
    if (currentLeft <= tolerancePx) {
      alignAfterSettle("left");
    }

    lastScrollLeft = currentLeft;
  };

  timeline.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    timeline.removeEventListener("scroll", onScroll);
    clearSettleTimer();
  };
}

function smoothScrollTo(timeline, { left = 0, top = 0 }) {
  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Use native smooth scroll when available and motion is allowed.
  if (timeline.scrollTo && !prefersReducedMotion) {
    timeline.scrollTo({ left, top, behavior: "smooth" });
    return;
  }

  // Fallback: jump instantly when smooth scrolling is unavailable or disabled.
  timeline.scrollLeft = left;
  timeline.scrollTop = top;
}

export function initTimeline(options = {}) {
  applySettings(options.settings || {});
  const initial = Object.prototype.hasOwnProperty.call(options, "composers")
    ? options.composers
    : composers;
  setActiveComposers(initial);
  ensureTimelineWidth();
  buildAxis();
  buildGantt();
  enablePanning();
  const teardownAutoAlign = enableHorizontalAutoAlign();

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
      smoothScrollTo(timeline, { left: 0, top: 0 });
    }
  }

  function goToEnd() {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      smoothScrollTo(timeline, {
        left: Math.max(0, timeline.scrollWidth - timeline.clientWidth),
        top: Math.max(0, timeline.scrollHeight - timeline.clientHeight),
      });
    }
  }

  return {
    goToStart,
    goToEnd,
    setComposers(next) {
      setActiveComposers(next);
      buildGantt();
    },
    updateSettings(nextSettings) {
      applySettings(nextSettings || {});
      ensureTimelineWidth();
      buildGantt();
    },
    setSelectedLane,
    setHoveredLane,
    destroy() {
      window.removeEventListener("resize", onResize);
      teardownAutoAlign();
    },
  };
}

export { composers, getComposerImage };
