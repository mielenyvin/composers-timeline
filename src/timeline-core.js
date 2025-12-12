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
    color: "#dcdcdc", // светло-серый
  },
  {
    id: "classical",
    label: "Classical",
    from: 1750,
    to: 1820,
    color: "#c8c8c8", // чуть темнее
  },
  {
    id: "romantic",
    label: "Romantic",
    from: 1820,
    to: 1900,
    color: "#b4b4b4", // средне-серый
  },
  {
    id: "twentieth",
    label: "20th Century",
    from: 1900,
    to: 2000,
    color: "#a0a0a0", // ближе к средне-серому
  },
];

// Compute data max year (based only on composers)
const dataMaxYear = Math.max(...composers.map((c) => c.death));
const rightPaddingYears = 320; // большой запас справа, чтобы даже на iOS с зумом хвост не обрезался

// Axis range:
//  - фиксированный старт в 1675 (Baroque начинается раньше и уходит влево за экран)
//  - динамический конец: минимум 1980 и плюс запас за последним композитором,
//    чтобы хвост таймлайна уверенно попадал в экран даже на маленьких устройствах
const axisMinYear = 1675;
const axisMaxYear = Math.max(
  1980,
  Math.ceil((dataMaxYear + rightPaddingYears) / 10) * 10
);
const axisSpan = axisMaxYear - axisMinYear;

// Делает внутренний контейнер достаточно широким для любых экранов:
//  - pxPerYear задаёт базовую «плотность» шкалы
//  - fallbackWidth даёт минимум в 2.4 ширины видимой области, чтобы оставался запас прокрутки
const pxPerYear = 12;
const viewportWidthMultiplier = 4;
const extraWidthPx = 360;

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
    band.style.backgroundColor = era.color;
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

  const ganttWidth =
    (gantt && gantt.clientWidth) ||
    (axis && axis.clientWidth) ||
    (timeline && timeline.clientWidth) ||
    window.innerWidth;

  // Sort composers by birth year so rows go top-to-bottom in time
  const sorted = [...composers].sort((a, b) => a.birth - b.birth);

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
  const totalHeight = laneCount * laneHeight;
  gantt.style.height = totalHeight + "px";

  // Prepare grayscale gradient from #dcdcdc to #808080 (light to mid gray)
  const totalBars = placements.length;
  const startGray = 0xdc; // 220
  const endGray = 0x80; // 128
  const grayStep = totalBars > 1 ? (startGray - endGray) / (totalBars - 1) : 0;

  placements.forEach(({ composer: c, laneIndex }, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.setAttribute("data-lane-index", laneIndex);
    bar.setAttribute("data-name", c.name);

    // Compute grayscale background for this bar; use semi-transparent fill so text/photos remain fully opaque
    const grayValue = Math.round(startGray - grayStep * index);
    const barColor = `rgba(${grayValue}, ${grayValue}, ${grayValue}, 0.75)`;

    bar.style.backgroundImage = "none";
    bar.style.backgroundColor = barColor;

    const left = yearToPercent(c.birth);
    const width = yearToPercent(c.death) - yearToPercent(c.birth);
    bar.style.left = left + "%";
    bar.style.width = width + "%";
    bar.style.top = laneIndex * laneHeight + "px";
    bar.style.height = barHeight + "px";
    bar.style.lineHeight = barHeight + "px";
    bar.style.fontSize = barHeight * 0.3 + "px";

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

  const startPanning = () => {
    if (isDragging) return;
    isDragging = true;
    timeline.classList.add("panning");
  };

  const stopPanning = () => {
    if (!isDragging) return;
    isDragging = false;
    timeline.classList.remove("panning");
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

export function initTimeline() {
  ensureTimelineWidth();
  buildAxis();
  buildGantt();
  enablePanning();

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
    destroy() {
      window.removeEventListener("resize", onResize);
    },
  };
}

export { composers, getComposerImage };
