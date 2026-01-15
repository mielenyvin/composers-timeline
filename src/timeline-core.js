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
  { name: "Gioachino Rossini", birth: 1792, death: 1868 },
  { name: "Franz Schubert", birth: 1797, death: 1828 },
  { name: "Hector Berlioz", birth: 1803, death: 1869 },
  { name: "Mikhail Glinka", birth: 1804, death: 1857 },
  { name: "Felix Mendelssohn", birth: 1809, death: 1847 },
  { name: "Frédéric Chopin", birth: 1810, death: 1849 },
  { name: "Robert Schumann", birth: 1810, death: 1856 },
  { name: "Franz Liszt", birth: 1811, death: 1886 },
  { name: "Giuseppe Verdi", birth: 1813, death: 1901 },
  { name: "Bedřich Smetana", birth: 1824, death: 1884 },
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
  { name: "Richard Strauss", birth: 1864, death: 1949 },
  { name: "Jean Sibelius", birth: 1865, death: 1957 },
  { name: "Erik Satie", birth: 1866, death: 1925 },
  { name: "Alexander Scriabin", birth: 1872, death: 1915 },
  { name: "Sergei Rachmaninoff", birth: 1873, death: 1943 },
  { name: "Maurice Ravel", birth: 1875, death: 1937 },
  { name: "Igor Stravinsky", birth: 1882, death: 1971 },
  { name: "Sergei Prokofiev", birth: 1891, death: 1953 },
  { name: "Carl Orff", birth: 1895, death: 1982 },
  { name: "George Gershwin", birth: 1898, death: 1937 },
  { name: "Dmitri Shostakovich", birth: 1906, death: 1975 },
];

const composerImages = {
  "Richard Wagner": "comp/wagner.jpg",
  "Igor Stravinsky": "comp/strawinski.jpg",

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
  "Richard Strauss": "comp/rstrauss.jpg",
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
  "Bedřich Smetana": "comp/smetana.jpg",
  "George Gershwin": "comp/gershwin.jpg",
  "Carl Orff": "comp/orff.jpg",
  "Carl Maria von Weber": "comp/weber.jpg",
  "Giacomo Puccini": "comp/puccini.jpg",
  "Jean Sibelius": "comp/sibelius.jpg",
  "Christoph Willibald Gluck": "comp/gluck.jpg",
  "Gioachino Rossini": "comp/rossini.jpg",

  // extra famous composers who died before 1804
  "Jean-Philippe Rameau": "comp/rameau.jpg",
};

function getComposerImage(name) {
  const image = composerImages[name];
  if (!image) return null;
  return image.startsWith("/") ? image : `/${image}`;
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

let eraLabels = ERAS.reduce((acc, era) => {
  acc[era.id] = era.label;
  return acc;
}, {});

const earliestBirth = Math.min(...composers.map((c) => c.birth));
const latestBirth = Math.max(...composers.map((c) => c.birth));
let activeComposers = [...composers];
let selectedLaneIndex = null;
let hoveredLaneIndex = null;

const WHITE = { r: 255, g: 255, b: 255 };
const ACCENT = { r: 37, g: 99, b: 235 };

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

// Solid era background colors (light, serious, no yellow/green):
const ERA_COLORS = {
  baroque: "#f3f4f6", // soft cool gray
  classical: "#eef5ff", // pale steel blue
  romantic: "#e3f0ff", // very light cool blue
  twentieth: "#dfdfdf", // light slate
};

function eraColor(eraId) {
  return ERA_COLORS[eraId] || "#f3f4f6";
}

function getEraLabel(eraId) {
  if (!eraId) return "";
  return (
    eraLabels[eraId] ||
    ERAS.find((e) => e.id === eraId)?.label ||
    eraId
  );
}

function setEraLabels(next = {}) {
  if (!next || typeof next !== "object") return;
  eraLabels = { ...eraLabels, ...next };
}

function getEraIdForYear(year) {
  const era = ERAS.find((e) => year >= e.from && year < e.to);
  return era ? era.id : null;
}

// Pick era color by the majority of the composer's lifespan.
// If more than half of the lifespan overlaps a different era, use that era.
function getEraIdForLifeSpan(birthYear, deathYear) {
  const start = Number(birthYear);
  const end = Number(deathYear);

  const birthEraId = getEraIdForYear(start);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return birthEraId;
  }

  const total = end - start;
  let bestEraId = null;
  let bestOverlap = 0;

  ERAS.forEach((era) => {
    const overlap = Math.max(
      0,
      Math.min(end, era.to) - Math.max(start, era.from)
    );
    if (overlap > bestOverlap) {
      bestOverlap = overlap;
      bestEraId = era.id;
    }
  });

  if (bestEraId && bestOverlap > total / 2) return bestEraId;
  return birthEraId;
}

function barGradientForEra(eraId) {
  const baseHex = eraColor(eraId);
  const base = hexToRgb(baseHex);
  const highlight = mixColors(base, WHITE, 0.12);
  const shade = mixColors(base, ACCENT, 0.04);
  return `linear-gradient(145deg, ${rgbToHex(highlight)} 0%, ${rgbToHex(
    base
  )} 58%, ${rgbToHex(shade)} 100%)`;
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
  const axis = document.getElementById("axis");
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

  if (axis) {
    axis.querySelectorAll(".life-label").forEach((label) => {
      const lane = Number(label.getAttribute("data-lane-index"));
      const selected = isSelected(lane);
      const hovered = isHovered(lane);
      label.classList.toggle("life-label--active", selected || hovered);
      label.classList.toggle("life-label--hover", hovered);
    });
  }
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
    // Solid (non-gradient) era backgrounds
    band.style.backgroundImage = "none";
    band.style.backgroundColor = eraColor(era.id);
    band.textContent = getEraLabel(era.id) || era.label;

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
  if (axis) {
    axis.querySelectorAll(".life-label").forEach((label) => label.remove());
  }
  const axisGap =
    parseFloat(window.getComputedStyle(gantt).marginTop || "0") || 0;
  const connectors = document.createDocumentFragment();
  const lifeLabels = document.createDocumentFragment();

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
    const displayName = c.displayName || c.name;
    const startPercent = yearToPercent(c.birth);
    const endPercent = yearToPercent(c.death);
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("data-lane-index", laneIndex);
    bar.setAttribute("data-name", c.name);

    const eraId = getEraIdForLifeSpan(c.birth, c.death);
    bar.style.backgroundImage = barGradientForEra(eraId);
    bar.style.backgroundColor = eraColor(eraId);

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

    if (axis) {
      const birthLabel = document.createElement("div");
      birthLabel.className = "life-label";
      birthLabel.setAttribute("data-lane-index", laneIndex);
      birthLabel.setAttribute("data-side", "start");
      birthLabel.style.left = left + "%";
      birthLabel.textContent = c.birth;
      lifeLabels.appendChild(birthLabel);

      const deathLabel = document.createElement("div");
      deathLabel.className = "life-label";
      deathLabel.setAttribute("data-lane-index", laneIndex);
      deathLabel.setAttribute("data-side", "end");
      deathLabel.style.left = left + width + "%";
      deathLabel.textContent = c.death;
      lifeLabels.appendChild(deathLabel);
    }

    bar.style.left = left + "%";
    bar.style.width = width + "%";
    bar.style.top = laneIndex * laneHeight + "px";
    bar.style.height = barHeight + "px";
    bar.style.lineHeight = barHeight + "px";
    bar.style.fontSize = barHeight * 0.25 * settings.fontScale + "px";

    // Create thumbnail image if available
    const imgSrc = getComposerImage(c.name);
    let avatarSize = 0;
    if (imgSrc) {
      const img = document.createElement("img");
      img.className = "bar-avatar";
      avatarSize = Math.max(10, Math.round(barHeight * 1.1));
      img.style.width = avatarSize + "px";
      img.style.height = avatarSize + "px";
      img.src = imgSrc;
      img.alt = displayName || c.name;
      bar.appendChild(img);
    }

    // Create label span for the name
    const labelSpan = document.createElement("span");
    labelSpan.className = "bar-label";
    labelSpan.textContent = displayName;
    bar.appendChild(labelSpan);
    const datesSpan = document.createElement("span");
    datesSpan.className = "bar-dates";
    datesSpan.textContent = `${c.birth} – ${c.death}`;
    bar.appendChild(datesSpan);

    gantt.appendChild(bar);

    // If the label is truncated (ellipsis), try initials + last name first (e.g. "W. A. Mozart");
    // if it still does not fit, fall back to last name only.
    if (labelSpan.scrollWidth > labelSpan.clientWidth) {
      labelSpan.textContent = getInitialsPlusLastName(displayName);
      if (labelSpan.scrollWidth > labelSpan.clientWidth) {
        labelSpan.textContent = getLastNamePart(displayName);
      }
    }

    const adjustDatesVisibility = () => {
      const horizontalPadding = 12; // matches `.bar` padding: 6px on each side
      const spanGap = 6; // gap set on .bar between flex items
      const availableWidth =
        bar.clientWidth -
        horizontalPadding -
        (avatarSize ? avatarSize + spanGap : 0) -
        spanGap;
      if (availableWidth <= 0) {
        datesSpan.style.display = "none";
        return;
      }
      const requiredWidth =
        labelSpan.scrollWidth + datesSpan.scrollWidth + spanGap;
      if (requiredWidth > availableWidth) {
        datesSpan.style.display = "none";
      }
    };
    const scheduleAdjustment = () => {
      if (bar.clientWidth > 0) {
        adjustDatesVisibility();
      } else if (typeof window !== "undefined") {
        window.requestAnimationFrame(adjustDatesVisibility);
      }
    };
    scheduleAdjustment();

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
    bar.addEventListener(
      "touchstart",
      (event) => {
        if (!event.touches || event.touches.length !== 1) return;
        const touch = event.touches[0];
        bar.dataset.touchStartX = String(touch.clientX);
        bar.dataset.touchStartY = String(touch.clientY);
        setHoveredLane(laneIndex);
      },
      { passive: true }
    );
    bar.addEventListener(
      "touchmove",
      (event) => {
        if (!event.touches || event.touches.length !== 1) return;
        const startX = Number(bar.dataset.touchStartX || "0");
        const startY = Number(bar.dataset.touchStartY || "0");
        const touch = event.touches[0];
        const dx = Math.abs(touch.clientX - startX);
        const dy = Math.abs(touch.clientY - startY);
        if (dx > 6 || dy > 6) {
          setHoveredLane(null);
        }
      },
      { passive: true }
    );
    bar.addEventListener(
      "touchend",
      () => {
        setHoveredLane(null);
      },
      { passive: true }
    );
    bar.addEventListener(
      "touchcancel",
      () => {
        setHoveredLane(null);
      },
      { passive: true }
    );
  });

  gantt.appendChild(connectors);
  if (axis) {
    axis.appendChild(lifeLabels);
  }
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
    timeline.dispatchEvent(new CustomEvent("timeline-pan-start"));
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

    timeline.scrollLeft = startScrollLeft - dx;
    timeline.scrollTop = startScrollTop - dy;
  }

  const onMouseDown = (e) => {
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

    // Cancel any ongoing native smooth scrolling immediately when the user starts dragging.
    if (timeline.scrollTo) {
      timeline.scrollTo({
        left: timeline.scrollLeft,
        top: timeline.scrollTop,
        behavior: "auto",
      });
    }

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
        return;
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
    startScrollLeft = timeline.scrollLeft;
    startScrollTop = timeline.scrollTop;

    // Cancel any ongoing native smooth scrolling immediately when the user starts dragging.
    if (timeline.scrollTo) {
      timeline.scrollTo({
        left: timeline.scrollLeft,
        top: timeline.scrollTop,
        behavior: "auto",
      });
    }

    stopPanning();
  };

  const onTouchMove = (e) => {
    if (touchId === null) return;
    const t = Array.from(e.touches).find((tt) => tt.identifier === touchId);
    if (!t) return;

    const dxFromStart = t.clientX - startX;
    const dyFromStart = t.clientY - startY;
    const absDx = Math.abs(dxFromStart);
    const absDy = Math.abs(dyFromStart);

    if (!touchDragStarted) {
      if (absDx > dragThreshold || absDy > dragThreshold) {
        touchDragStarted = true;
        startPanning();
      } else {
        return;
      }
    }

    timeline.scrollLeft = startScrollLeft - dxFromStart;
    timeline.scrollTop = startScrollTop - dyFromStart;
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

function enableVerticalSnapOnRelease() {
  const timeline = document.getElementById("timeline");
  const gantt = document.getElementById("gantt");
  const axis = document.getElementById("axis");
  if (!timeline || !gantt) return () => {};

  const tolerancePx = 0.5;
  const bottomSnapThreshold = 12;

  const isBarVerticallyVisible = (bar, top, bottom) => {
    const rect = bar.getBoundingClientRect();
    return rect.bottom > top && rect.top < bottom;
  };

  const isNearBottom = () =>
    timeline.scrollTop + timeline.clientHeight >=
    timeline.scrollHeight - bottomSnapThreshold;

  const snapToFirstVisible = () => {
    if (isNearBottom()) return;

    const bars = Array.from(gantt.querySelectorAll(".bar"));
    if (!bars.length) return;

    const containerRect = timeline.getBoundingClientRect();
    const axisRect = axis?.getBoundingClientRect();
    const barViewportTop = (axisRect?.bottom ?? containerRect.top) + 1;
    const barViewportBottom = containerRect.bottom;

    const firstVisible = bars.find((bar) =>
      isBarVerticallyVisible(bar, barViewportTop, barViewportBottom)
    );
    if (!firstVisible) return;

    const targetRect = firstVisible.getBoundingClientRect();
    const desiredTop = barViewportTop;
    const delta = targetRect.top - desiredTop;
    if (Math.abs(delta) <= tolerancePx) return;

    smoothScrollTo(timeline, {
      left: timeline.scrollLeft,
      top: Math.max(0, timeline.scrollTop + delta),
      behavior: "auto",
    });
  };

  const onPanEnd = () => {
    snapToFirstVisible();
  };

  timeline.addEventListener("timeline-pan-end", onPanEnd);
  return () => {
    timeline.removeEventListener("timeline-pan-end", onPanEnd);
  };
}

function smoothScrollTo(timeline, { left = 0, top = 0, behavior = "smooth" }) {
  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const finalBehavior = prefersReducedMotion ? "auto" : behavior;

  // Use native scrollTo when available.
  if (timeline.scrollTo) {
    timeline.scrollTo({ left, top, behavior: finalBehavior });
    return;
  }

  // Fallback: jump instantly when scrollTo is unavailable.
  timeline.scrollLeft = left;
  timeline.scrollTop = top;
}

export function initTimeline(options = {}) {
  applySettings(options.settings || {});
  const initial = Object.prototype.hasOwnProperty.call(options, "composers")
    ? options.composers
    : composers;
  setActiveComposers(initial);
  setEraLabels(options.eraLabels || {});
  ensureTimelineWidth();
  buildAxis();
  buildGantt();
  enablePanning();
  const teardownVerticalSnap = enableVerticalSnapOnRelease();

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
      smoothScrollTo(timeline, { left: 0, top: 0, behavior: "smooth" });
    }
  }

  function goToEnd() {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      smoothScrollTo(timeline, {
        left: Math.max(0, timeline.scrollWidth - timeline.clientWidth),
        top: Math.max(0, timeline.scrollHeight - timeline.clientHeight),
        behavior: "smooth",
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
    updateEraLabels(nextEraLabels) {
      setEraLabels(nextEraLabels || {});
      ensureTimelineWidth();
      buildAxis();
      buildGantt();
    },
    setSelectedLane,
    setHoveredLane,
    destroy() {
      window.removeEventListener("resize", onResize);
      teardownVerticalSnap();
    },
  };
}

export { composers, getComposerImage };
