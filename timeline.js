const minBirth = Math.min(...composers.map((c) => c.birth));
const maxBirth = Math.max(...composers.map((c) => c.birth));
const maxDeath = Math.max(...composers.map((c) => c.death));
const minYear = minBirth - 5;
const maxYear = Math.max(maxBirth, maxDeath) + 1;
const span = maxYear - minYear;

const sortedComposers = [...composers].sort((a, b) => a.birth - b.birth);

const paddingLeft = 80;
const paddingRight = 80;
const axisBottom = 80;
const maxVerticalLanes = 4; // по высоте помещаем не больше 4 рядов
const placeholderMinPx = 50; // нижняя граница квадратика
const placeholderTopPx = 10; // отступ от верхнего края карточки до начала квадрата
const placeholderGapPx = 4; // расстояние между низом квадрата и датой рождения
const cardBottomPaddingPx = 6; // запас под датой рождения
const laneGapPx = 20; // вертикальный зазор между рядами
const cardOffsetPx = 50; // отступ от оси до первого ряда карточек
const topMarginPx = 40; // запас сверху, чтобы верхний ряд не упирался в край окна

const minLaneDistancePx = 290; // минимальное расстояние по X между элементами в одном ряду

const minPxPerYear = 6;
const maxPxPerYear = 120;
let currentPxPerYear = null;
const visibilityBufferPx = 60; // небольшой запас, чтобы не мигали элементы на границе

let yearZoomMap = null; // предрассчитанные зумы по годам

let zoomAnimation = null; // состояние текущей анимации зума
let revealLocked = false; // блокируем показ новых элементов до завершения зума

// Динамические размеры, которые зависят от высоты viewport
let currentPlaceholderSizePx = 100;
let currentCardHeightPx = 120;
let currentLaneHeightPx = 140;

function getViewportHeight(scrollContainer) {
  const candidates = [];
  if (scrollContainer && scrollContainer.clientHeight) {
    candidates.push(scrollContainer.clientHeight);
  }
  if (window.visualViewport && window.visualViewport.height) {
    candidates.push(window.visualViewport.height);
  }
  if (typeof window.innerHeight === "number") {
    candidates.push(window.innerHeight);
  }
  if (
    document.documentElement &&
    typeof document.documentElement.clientHeight === "number" &&
    document.documentElement.clientHeight > 0
  ) {
    candidates.push(document.documentElement.clientHeight);
  }

  if (!candidates.length) return 0;
  return Math.min(...candidates);
}

function updateVisibilityForElements(
  scrollContainer,
  { allowReveal = true } = {}
) {
  const container = document.getElementById("timeline-inner");
  if (!container || !scrollContainer) return;

  const viewportWidth = scrollContainer.clientWidth || window.innerWidth;
  const viewportLeft = scrollContainer.scrollLeft;
  const viewportRight = viewportLeft + viewportWidth;

  const containerRect = scrollContainer.getBoundingClientRect();
  const viewportLeftPx = containerRect.left;
  const viewportRightPx = containerRect.right;

  const nodes = container.querySelectorAll("[data-x]");
  nodes.forEach((el) => {
    const isComposer = el.classList.contains("composer");

    let shouldBeVisible;

    if (isComposer) {
      // Для карточек композиторов: видимы только если целиком внутри окна браузера
      // (по вертикали) и контейнера таймлайна (по горизонтали).
      const rect = el.getBoundingClientRect();
      const elementLeftPx = rect.left;
      const elementRightPx = rect.right;
      const elementTopPx = rect.top;
      const elementBottomPx = rect.bottom;

      const viewportTopPx = 0;
      const viewportBottomPx =
        window.innerHeight || document.documentElement.clientHeight || 0;

      shouldBeVisible =
        elementLeftPx >= viewportLeftPx &&
        elementRightPx <= viewportRightPx &&
        elementTopPx >= viewportTopPx &&
        elementBottomPx <= viewportBottomPx;
    } else {
      // Для остальных элементов оставляем старую схему с буфером
      const x = parseFloat(el.dataset.x);
      if (!isFinite(x)) return;

      const elementLeft = x;
      const elementRight = x;

      shouldBeVisible =
        elementLeft >= viewportLeft - visibilityBufferPx &&
        elementRight <= viewportRight + visibilityBufferPx;
    }

    // Дополнительно: вертикальный лимит по количеству рядов.
    // Если элемент принадлежит ряду с индексом >= допустимого количества,
    // мы его временно скрываем (до тех пор, пока авто-зум не уменьшит число рядов).
    const laneIndexAttr = el.dataset.laneIndex;
    if (laneIndexAttr != null) {
      const laneIndexNum = parseInt(laneIndexAttr, 10);
      if (Number.isFinite(laneIndexNum)) {
        const maxStacks =
          lastMaxVisibleLaneCount ||
          computeMaxVerticalStacksForViewport(scrollContainer);
        if (laneIndexNum >= maxStacks) {
          shouldBeVisible = false;
        }
      }
    }

    const isVisible = !el.classList.contains("offscreen");

    if (shouldBeVisible && (allowReveal || isVisible)) {
      el.classList.remove("offscreen");
    } else if (!shouldBeVisible) {
      el.classList.add("offscreen");
    }
  });
}

function animateZoomTo(targetPxPerYear, anchorYear, anchorSide = "center") {
  const startPxPerYear = currentPxPerYear;
  const delta = targetPxPerYear - startPxPerYear;

  if (Math.abs(delta) < 0.01) {
    // почти нечего анимировать
    currentPxPerYear = targetPxPerYear;
    revealLocked = false;
    renderTimeline({ anchorYear, anchorSide, forceReveal: true });
    return;
  }

  const durationMs = 320;

  // сбрасываем прошлую анимацию
  zoomAnimation = {
    startPxPerYear,
    targetPxPerYear,
    startTime: null,
    durationMs,
    anchorYear,
    anchorSide,
  };

  function step(timestamp) {
    if (!zoomAnimation) return;
    if (zoomAnimation.startTime === null) {
      zoomAnimation.startTime = timestamp;
    }
    const elapsed = timestamp - zoomAnimation.startTime;
    let t = Math.min(1, elapsed / zoomAnimation.durationMs);

    // лёгкая ease-out кривая
    t = 1 - Math.pow(1 - t, 3);

    currentPxPerYear =
      zoomAnimation.startPxPerYear +
      (zoomAnimation.targetPxPerYear - zoomAnimation.startPxPerYear) * t;

    renderTimeline({
      anchorYear: zoomAnimation.anchorYear,
      anchorSide: zoomAnimation.anchorSide,
    });

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      currentPxPerYear = zoomAnimation.targetPxPerYear;
      zoomAnimation = null;
      revealLocked = false;
      renderTimeline({
        anchorYear,
        anchorSide,
        forceReveal: true,
      });

      // After the first auto-zoom on init we may have hidden the timeline.
      // Make sure it is visible once the animation is fully finished.
      const scrollContainer = document.getElementById("timeline");
      if (scrollContainer && scrollContainer.style.visibility === "hidden") {
        scrollContainer.style.visibility = "visible";
      }
    }
  }

  requestAnimationFrame(step);
}

let isUserPanning = false;
let lastLaneCount = 0; // общее количество рядов по всему таймлайну
let lastVisibleLaneCount = 0; // сколько рядов реально видно в текущем окне
let lastVisibleComposersCount = 0; // сколько композиторов реально внутри текущего окна
let lastLaneScale = 1; // фактический масштаб карточек по вертикали
let lastLaneHeight = currentLaneHeightPx; // высота ряда с учётом возможного сжатия
let lastMaxVisibleLaneCount = 0; // сколько рядов мы готовы показать после сжатия

/**
 * Вычисляет динамическую высоту ряда и размер квадратика
 * на основе высоты viewport, чтобы максимум 4 ряда помещались
 */
function computeDynamicLaneMetrics(scrollContainer) {
  const viewportHeight = getViewportHeight(scrollContainer);

  const extraCardSpace =
    placeholderTopPx + placeholderGapPx + cardBottomPaddingPx;

  // Раскладываем 4 ряда (или меньше, если экран низкий) в доступную высоту.
  // Из высоты окна вычитаем верхний запас, ось, отступ до первого ряда,
  // вертикальные зазоры и "дополнительное" место у карточки (текст + отступы).
  const rawPlaceholder =
    (viewportHeight -
      topMarginPx -
      axisBottom -
      cardOffsetPx -
      (maxVerticalLanes - 1) * laneGapPx -
      maxVerticalLanes * extraCardSpace) /
    maxVerticalLanes;

  // Минимальный размер — 50px, вверх не ограничиваем, чтобы на высоких
  // экранах карточки крупнели и вмещалось не больше 4 рядов.
  const placeholderSize = Math.max(
    placeholderMinPx,
    Math.floor(rawPlaceholder || 0)
  );
  const cardHeight = placeholderSize + extraCardSpace;
  const laneHeight = cardHeight + laneGapPx;

  // Сколько рядов реально поместится с текущими размерами.
  const availableAfterFirstRow =
    viewportHeight - topMarginPx - axisBottom - cardOffsetPx - cardHeight;
  const extraStacks =
    availableAfterFirstRow > 0
      ? Math.floor(availableAfterFirstRow / laneHeight)
      : 0;
  const maxStacks = Math.max(
    1,
    Math.min(maxVerticalLanes, 1 + extraStacks)
  );

  return { laneHeight, placeholderSize, cardHeight, maxStacks };
}

function applyDynamicLaneMetrics(metrics) {
  currentPlaceholderSizePx = metrics.placeholderSize;
  currentCardHeightPx = metrics.cardHeight;
  currentLaneHeightPx = metrics.laneHeight;
  lastLaneHeight = metrics.laneHeight;
  lastMaxVisibleLaneCount = metrics.maxStacks;

  const root = document.documentElement;
  if (root && root.style) {
    root.style.setProperty(
      "--placeholder-size",
      `${metrics.placeholderSize}px`
    );
    root.style.setProperty("--card-height", `${metrics.cardHeight}px`);
    root.style.setProperty("--lane-height", `${metrics.laneHeight}px`);
  }
}

function ensureDynamicLaneMetrics(scrollContainer) {
  const metrics = computeDynamicLaneMetrics(scrollContainer);
  applyDynamicLaneMetrics(metrics);
  return metrics;
}

const minHorizontalGapPx = 50; // минимальное расстояние между вертикальными линиями в пикселях
const maxHorizontalGapFactor = 3; // во сколько раз "слишком далеко" по горизонтали
const zoomInFactor = 1.08; // шаг увеличения зума
const zoomOutFactor = 0.93; // шаг уменьшения зума
let basePxPerYear = null; // базовый зум для крайних положений

function computeInitialPxPerYear(scrollContainer) {
  const viewportWidth =
    (scrollContainer && scrollContainer.clientWidth) || window.innerWidth;
  const availableWidth = Math.max(
    200,
    viewportWidth - paddingLeft - paddingRight
  );
  const pxPerYear = availableWidth / span;
  return Math.max(minPxPerYear, Math.min(maxPxPerYear, pxPerYear));
}

function renderTimeline(arg = null) {
  const scrollContainer = document.getElementById("timeline");
  const container = document.getElementById("timeline-inner");

  const viewportWidth = scrollContainer.clientWidth || window.innerWidth;
  const metrics = ensureDynamicLaneMetrics(scrollContainer);

  if (currentPxPerYear === null) {
    currentPxPerYear = computeInitialPxPerYear(scrollContainer);
  }

  // Разбираем аргументы: либо число (центр), либо объект настроек привязки
  let anchorYear = null;
  let anchorSide = "center"; // "center" или "left"
  let forceReveal = false;

  if (arg && typeof arg === "object") {
    anchorYear = arg.anchorYear ?? null;
    anchorSide = arg.anchorSide ?? "center";
    forceReveal = !!arg.forceReveal;
  } else if (typeof arg === "number") {
    anchorYear = arg;
    anchorSide = "center";
  }

  // текущее положение до перерисовки
  const prevScroll = scrollContainer.scrollLeft;

  let effectiveCenterYear = null;

  // Если привязка к центру, определяем центральный год
  if (anchorSide === "center") {
    if (anchorYear != null) {
      effectiveCenterYear = anchorYear;
    } else {
      const axisWidthBefore = span * currentPxPerYear;
      const xCenterBefore = prevScroll + viewportWidth / 2;
      const ratioCenterBefore = (xCenterBefore - paddingLeft) / axisWidthBefore;
      effectiveCenterYear = minYear + ratioCenterBefore * span;
      if (!isFinite(effectiveCenterYear)) {
        effectiveCenterYear = (minYear + maxYear) / 2;
      }
    }
  }

  container.innerHTML = "";

  const totalWidth = span * currentPxPerYear + paddingLeft + paddingRight;
  container.style.width = totalWidth + "px";

  const axisWidth = span * currentPxPerYear;

  // Axis
  const axis = document.createElement("div");
  axis.className = "axis";
  axis.style.left = paddingLeft + "px";
  axis.style.width = axisWidth + "px";
  axis.style.bottom = axisBottom + "px";
  container.appendChild(axis);

  // Ticks: minor every 10 years, major every 50 years
  const tickStep = 10;
  for (
    let y = Math.ceil(minYear / tickStep) * tickStep;
    y <= maxYear;
    y += tickStep
  ) {
    const ratio = (y - minYear) / span;
    const x = paddingLeft + ratio * axisWidth;

    const isMajor = y % 50 === 0;

    const tick = document.createElement("div");
    tick.className =
      "axis-tick " + (isMajor ? "axis-tick-major" : "axis-tick-minor");
    tick.style.left = x + "px";
    tick.style.bottom = axisBottom + "px";
    tick.dataset.x = x;
    container.appendChild(tick);

    if (isMajor) {
      const label = document.createElement("div");
      label.className = "axis-label";
      label.style.left = x + "px";
      label.textContent = y;
      label.dataset.x = x;
      container.appendChild(label);
    }
  }

  // Place composers in lanes to reduce overlap (adaptive lane height)
  const minDistancePx = minLaneDistancePx;
  const placements = [];
  const lanesLastX = [];
  const sorted = sortedComposers;

  // First pass: compute x and laneIndex for each composer
  for (const c of sorted) {
    const ratio = (c.birth - minYear) / span;
    const x = paddingLeft + ratio * axisWidth;

    // Find lane so that items in the same lane are spaced by at least minDistancePx
    let laneIndex = 0;
    while (
      laneIndex < lanesLastX.length &&
      x - lanesLastX[laneIndex] < minDistancePx
    ) {
      laneIndex++;
    }
    if (laneIndex === lanesLastX.length) {
      lanesLastX.push(x);
    } else {
      lanesLastX[laneIndex] = x;
    }

    placements.push({ composer: c, x, laneIndex });
  }

  // Lane height берём из метрик, зависящих от текущей высоты окна.
  const laneCount = Math.max(1, lanesLastX.length);
  lastLaneCount = laneCount; // запоминаем актуальное количество рядов по вертикали
  const cardOffset = cardOffsetPx; // distance from axis to the first row of cards
  const laneHeight = metrics.laneHeight;

  lastLaneScale = 1;
  lastLaneHeight = laneHeight;

  // Second pass: render stems, dots and cards using the computed laneHeight
  for (const { composer: c, x, laneIndex } of placements) {
    const cardBottom = axisBottom + cardOffset + laneIndex * laneHeight;
    const stemHeight = cardBottom - axisBottom;
    const deathRatio = (c.death - minYear) / span;
    const deathX = paddingLeft + deathRatio * axisWidth;
    const lifeY = axisBottom + stemHeight;

    // Stem
    const stem = document.createElement("div");
    stem.className = "stem";
    stem.style.left = x + "px";
    stem.style.bottom = axisBottom + "px";
    stem.style.height = stemHeight + "px";
    stem.dataset.x = x;
    stem.dataset.laneIndex = String(laneIndex);
    container.appendChild(stem);

    // Dot
    const dot = document.createElement("div");
    dot.className = "birth-dot";
    dot.style.left = x + "px";
    dot.style.bottom = lifeY + "px";
    dot.dataset.x = x;
    dot.dataset.laneIndex = String(laneIndex);
    container.appendChild(dot);

    // Lifespan arc between birth and death
    const arcLeft = Math.min(x, deathX);
    const arcWidth = Math.abs(deathX - x);
    const arcHeight = Math.max(16, Math.min(80, laneHeight * 0.6));
    const arc = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arc.classList.add("life-arc");
    arc.setAttribute("width", arcWidth);
    arc.setAttribute("height", arcHeight);
    arc.style.left = arcLeft + "px";
    arc.style.bottom = lifeY + "px";
    arc.dataset.x = (x + deathX) / 2;
    arc.dataset.laneIndex = String(laneIndex);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const arcStart = deathX < x ? arcWidth : 0;
    const arcEnd = deathX < x ? 0 : arcWidth;
    const d = `M ${arcStart} ${arcHeight} Q ${
      arcWidth / 2
    } 0 ${arcEnd} ${arcHeight}`;
    path.setAttribute("d", d);
    arc.appendChild(path);
    container.appendChild(arc);

    // Death marker on the axis
    const deathDot = document.createElement("div");
    deathDot.className = "death-dot";
    deathDot.style.left = deathX + "px";
    deathDot.style.bottom = lifeY + "px";
    deathDot.dataset.x = deathX;
    deathDot.dataset.laneIndex = String(laneIndex);
    container.appendChild(deathDot);

    // Tiny label under the death dot: name and ✝ deathYear
    const deathLabel = document.createElement("div");
    deathLabel.className = "death-label";
    deathLabel.style.left = deathX + "px";
    // slightly below the death dot
    deathLabel.style.bottom = (lifeY - 16) + "px";
    deathLabel.dataset.x = deathX;
    deathLabel.dataset.laneIndex = String(laneIndex);

    const deathNameSpan = document.createElement("span");
    deathNameSpan.className = "death-label-name";
    deathNameSpan.textContent = c.name + " ";

    const deathYearSpan = document.createElement("span");
    deathYearSpan.className = "death-label-death";
    deathYearSpan.textContent = "✝ " + String(c.death);

    deathLabel.appendChild(deathNameSpan);
    deathLabel.appendChild(deathYearSpan);

    container.appendChild(deathLabel);

    // Card
    const card = document.createElement("div");
    card.className = "composer";
    card.style.left = x + "px";
    card.style.bottom = cardBottom + "px";
    card.dataset.x = x;
    card.dataset.laneIndex = String(laneIndex);

    const placeholder = document.createElement("div");
    placeholder.className = "placeholder";

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = c.name;

    const years = document.createElement("div");
    years.className = "years";
    // only birth year; star is added via CSS ::before
    years.textContent = String(c.birth);

    card.appendChild(placeholder);
    card.appendChild(name);
    card.appendChild(years);
    container.appendChild(card);
  }

  // после изменения зума привязываемся к заданному якорю
  const axisWidthAfter = span * currentPxPerYear;
  let finalScrollLeft = prevScroll;

  if (anchorSide === "left" && anchorYear != null) {
    // хотим, чтобы указанный год оставался у левого края
    const anchorX =
      paddingLeft + ((anchorYear - minYear) / span) * axisWidthAfter;
    finalScrollLeft = anchorX;
  } else if (anchorSide === "right" && anchorYear != null) {
    // хотим, чтобы указанный год оставался у правого края
    const anchorX =
      paddingLeft + ((anchorYear - minYear) / span) * axisWidthAfter;
    finalScrollLeft = anchorX - viewportWidth;
  } else if (anchorSide === "center" && effectiveCenterYear != null) {
    const centerX =
      paddingLeft + ((effectiveCenterYear - minYear) / span) * axisWidthAfter;
    finalScrollLeft = centerX - viewportWidth / 2;
  }

  // ограничиваем scrollLeft допустимыми границами
  const maxScrollLeft = Math.max(
    0,
    span * currentPxPerYear + paddingLeft + paddingRight - viewportWidth
  );
  if (!isFinite(finalScrollLeft)) {
    finalScrollLeft = 0;
  }
  finalScrollLeft = Math.max(0, Math.min(maxScrollLeft, finalScrollLeft));
  scrollContainer.scrollLeft = finalScrollLeft;
  updateVisibilityForElements(scrollContainer, {
    allowReveal:
      forceReveal ||
      (!revealLocked && !isUserPanning && zoomAnimation === null),
  });

  // считаем, сколько реально рядов и композиторов сейчас видно
  const xStart = finalScrollLeft;
  const xEnd = finalScrollLeft + viewportWidth;
  const visibleLaneSet = new Set();
  let visibleCount = 0;

  for (const { x, laneIndex } of placements) {
    if (x >= xStart && x <= xEnd) {
      visibleCount++;
      visibleLaneSet.add(laneIndex);
    }
  }

  lastVisibleLaneCount = visibleLaneSet.size;
  lastVisibleComposersCount = visibleCount;
}

function computeLayoutMetrics(scrollContainer, options = {}) {
  const { pxPerYearOverride = null, centerYearOverride = null } = options;

  const viewportWidth = scrollContainer.clientWidth || window.innerWidth;
  const viewportHeight = scrollContainer.clientHeight || window.innerHeight;

  const pxPerYear =
    pxPerYearOverride != null ? pxPerYearOverride : currentPxPerYear;
  const axisWidth = span * pxPerYear;
  const axisLeft = paddingLeft;

  let xStart;
  let xEnd;

  if (centerYearOverride != null) {
    const centerX =
      axisLeft + ((centerYearOverride - minYear) / span) * axisWidth;
    xStart = centerX - viewportWidth / 2;
    xEnd = centerX + viewportWidth / 2;
  } else {
    xStart = scrollContainer.scrollLeft;
    xEnd = xStart + viewportWidth;
  }

  // размещаем композиторов так же, как в renderTimeline, но без создания DOM
  const minDistancePx = minLaneDistancePx;
  const placements = [];
  const lanesLastX = [];
  const sorted = sortedComposers;

  for (const c of sorted) {
    const ratio = (c.birth - minYear) / span;
    const x = paddingLeft + ratio * axisWidth;

    let laneIndex = 0;
    while (
      laneIndex < lanesLastX.length &&
      x - lanesLastX[laneIndex] < minDistancePx
    ) {
      laneIndex++;
    }
    if (laneIndex === lanesLastX.length) {
      lanesLastX.push(x);
    } else {
      lanesLastX[laneIndex] = x;
    }

    placements.push({ composer: c, x, laneIndex });
  }

  const laneCount = Math.max(1, lanesLastX.length);

  const cardHalfWidthApprox = 190; // тот же запас, что и выше
  const visiblePlacements = placements.filter(
    (p) => p.x >= xStart - cardHalfWidthApprox &&
           p.x <= xEnd + cardHalfWidthApprox
  );

  const visibleLaneSet = new Set();
  const visibleYearSet = new Set();

  for (const p of visiblePlacements) {
    visibleLaneSet.add(p.laneIndex);
    // несколько композиторов с одним годом воспринимаем как одну палочку
    if (p.composer && typeof p.composer.birth === "number") {
      visibleYearSet.add(p.composer.birth);
    }
  }

  const visibleLaneCount = visibleLaneSet.size;

  let minHorizontalDistPx = Infinity;
  const visibleYears = Array.from(visibleYearSet);
  if (visibleYears.length > 1) {
    visibleYears.sort((a, b) => a - b);
    for (let i = 0; i < visibleYears.length - 1; i++) {
      const dy = visibleYears[i + 1] - visibleYears[i];
      const dPx = dy * pxPerYear;
      if (dPx < minHorizontalDistPx) {
        minHorizontalDistPx = dPx;
      }
    }
  } else {
    // если один или ноль уникальных годов, считаем, что по горизонтали "просторно"
    minHorizontalDistPx = viewportWidth;
  }

  // видимый диапазон лет
  const axisRight = axisLeft + axisWidth;
  const visibleAxisStart = Math.max(axisLeft, xStart);
  const visibleAxisEnd = Math.min(axisRight, xEnd);

  let visibleStartYear = minYear;
  let visibleEndYear = maxYear;

  if (visibleAxisEnd > visibleAxisStart) {
    const ratioStart = (visibleAxisStart - axisLeft) / axisWidth;
    const ratioEnd = (visibleAxisEnd - axisLeft) / axisWidth;
    visibleStartYear = minYear + ratioStart * span;
    visibleEndYear = minYear + ratioEnd * span;
  }

  const hasLeft = visibleStartYear > minBirth;
  const hasRight = visibleEndYear < maxBirth;

  // вертикальная вместимость по высоте экрана — используем ту же функцию,
  // что и авто-зум, чтобы не было расхождений.
  const maxVerticalStacks =
    computeMaxVerticalStacksForViewport(scrollContainer);
  const minVerticalStacksDesired = Math.max(
    1,
    Math.ceil(maxVerticalStacks / 2)
  );

  return {
    laneCount,
    visibleLaneCount,
    minHorizontalDistPx,
    maxVerticalStacks,
    minVerticalStacksDesired,
    hasLeft,
    hasRight,
    viewportWidth,
  };
}

/**
 * Оцениваем, сколько вертикальных рядов потребуется,
 * если указанный год находится в центре экрана при данном zуме.
 */
function computeLaneCountForCenterYear(
  scrollContainer,
  centerYear,
  pxPerYear,
  maxVerticalStacks
) {
  const viewportWidth = scrollContainer.clientWidth || window.innerWidth;
  const axisWidth = span * pxPerYear;
  const axisLeft = paddingLeft;

  const centerX = axisLeft + ((centerYear - minYear) / span) * axisWidth;
  const xStart = centerX - viewportWidth / 2;
  const xEnd = centerX + viewportWidth / 2;

  const minDistancePx = minLaneDistancePx;
  const lanesLastX = [];

  // сколько *видимых* рядов реально понадобится при глобальной раскладке
  let maxVisibleLaneIndex = -1;

  // Запас по ширине карточки, чтобы учесть элементы,
  // центр которых уже вышел за край, но сама карточка ещё видна.
  // Ширина .composer = 360px, берём половину + небольшой запас.
  const cardHalfWidthApprox = 190; // ~360 / 2 + небольшой запас
  const visibleStart = xStart - cardHalfWidthApprox;
  const visibleEnd = xEnd + cardHalfWidthApprox;

  for (const c of sortedComposers) {
    const ratio = (c.birth - minYear) / span;
    const x = axisLeft + ratio * axisWidth;

    // 1) ВСЕГДА считаем laneIndex так же, как в renderTimeline — глобально
    let laneIndex = 0;
    while (
      laneIndex < lanesLastX.length &&
      x - lanesLastX[laneIndex] < minDistancePx
    ) {
      laneIndex++;
    }
    if (laneIndex === lanesLastX.length) {
      lanesLastX.push(x);
    } else {
      lanesLastX[laneIndex] = x;
    }

    // 2) Только после этого проверяем, попадает ли карточка в окно по X
    if (x < visibleStart || x > visibleEnd) {
      continue;
    }

    if (laneIndex > maxVisibleLaneIndex) {
      maxVisibleLaneIndex = laneIndex;
    }

    // если уже превысили допустимое количество *видимых* рядов — можно прерывать
    if (maxVisibleLaneIndex + 1 > maxVerticalStacks) {
      return maxVisibleLaneIndex + 1;
    }
  }

  return Math.max(0, maxVisibleLaneIndex + 1);
}

function computeMaxVerticalStacksForViewport(scrollContainer) {
  const viewportHeight = getViewportHeight(scrollContainer);

  const metrics = ensureDynamicLaneMetrics(scrollContainer);

  const available =
    viewportHeight -
    topMarginPx -
    axisBottom -
    cardOffsetPx -
    metrics.cardHeight;

  if (available <= 0 || !isFinite(available)) {
    lastMaxVisibleLaneCount = 1;
    return 1;
  }

  const extraStacks =
    metrics.laneHeight > 0
      ? Math.floor(available / metrics.laneHeight)
      : 0;
  const maxStacks = Math.max(
    1,
    Math.min(maxVerticalLanes, 1 + extraStacks)
  );

  lastMaxVisibleLaneCount = maxStacks;

  return maxStacks;
}

function computeOptimalPxPerYearForCenter(scrollContainer, centerYear) {
  const maxVerticalStacks =
    computeMaxVerticalStacksForViewport(scrollContainer);

  // Проверяем минимальный зум ПЕРВЫМ
  const lanesAtMin = computeLaneCountForCenterYear(
    scrollContainer,
    centerYear,
    minPxPerYear,
    maxVerticalStacks
  );

  console.log("computeOptimalPxPerYearForCenter:", {
    centerYear: centerYear.toFixed(2),
    currentPxPerYear: currentPxPerYear?.toFixed(2),
    minPxPerYear,
    lanesAtMin,
    maxVerticalStacks,
  });

  if (lanesAtMin <= maxVerticalStacks) {
    // Минимальный зум подходит - это оптимально
    console.log("  -> Возвращаем minPxPerYear:", minPxPerYear);
    return minPxPerYear;
  }

  // Минимальный не подходит - ищем минимальный зум, при котором всё помещается
  let low = minPxPerYear;
  let high = maxPxPerYear * 3;
  let best = high;

  for (let iter = 0; iter < 15; iter++) {
    const mid = (low + high) / 2;
    const lanes = computeLaneCountForCenterYear(
      scrollContainer,
      centerYear,
      mid,
      maxVerticalStacks
    );

    if (lanes <= maxVerticalStacks) {
      best = mid;
      high = mid; // ищем меньше
    } else {
      low = mid; // нужно больше
    }
  }

  console.log("  -> Бинарный поиск вернул:", best.toFixed(2));
  return best;
}

/**
 * Предрасчитываем удобный зум для каждого года,
 * исходя из того, сколько рядов помещается по вертикали.
 */
function precomputeYearZoomMap(scrollContainer) {
  const maxVerticalStacks =
    computeMaxVerticalStacksForViewport(scrollContainer);

  const effectiveMaxVerticalStacks = Math.max(1, maxVerticalStacks);

  const map = {};
  const stepYear = 1;

  for (let y = minYear; y <= maxYear; y += stepYear) {
    const lanesAtMin = computeLaneCountForCenterYear(
      scrollContainer,
      y,
      minPxPerYear,
      effectiveMaxVerticalStacks
    );

    let best;
    if (lanesAtMin <= effectiveMaxVerticalStacks) {
      best = minPxPerYear;
    } else {
      let low = minPxPerYear;
      let high = maxPxPerYear * 2; // уменьшаем с *3 до *2
      best = high;

      for (let iter = 0; iter < 12; iter++) {
        const mid = (low + high) / 2;
        const lanes = computeLaneCountForCenterYear(
          scrollContainer,
          y,
          mid,
          effectiveMaxVerticalStacks
        );

        if (lanes <= effectiveMaxVerticalStacks) {
          best = mid;
          high = mid;
        } else {
          low = mid;
        }
      }
    }

    const key = Math.round(y);
    map[key] = best;
  }

  // Сглаживание
  const keys = Object.keys(map)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);

  // Минимальное сглаживание
  const smoothed = {};
  const radius = 1; // ТОЛЬКО ближайшие соседи

  for (const key of keys) {
    let maxZoom = map[key]; // начинаем с текущего значения
    for (let yy = key - radius; yy <= key + radius; yy++) {
      if (map.hasOwnProperty(yy) && map[yy] > maxZoom) {
        maxZoom = map[yy];
      }
    }
    smoothed[key] = maxZoom;
  }

  yearZoomMap = smoothed;
}

function autoZoomDuringPan(scrollContainer, direction) {
  if (currentPxPerYear == null) return;

  const viewportWidth = scrollContainer.clientWidth || window.innerWidth;
  const axisWidth = span * currentPxPerYear;
  const axisLeft = paddingLeft;

  const centerX = scrollContainer.scrollLeft + viewportWidth / 2;
  let centerRatio = (centerX - axisLeft) / axisWidth;
  if (!isFinite(centerRatio)) {
    centerRatio = 0.5;
  }
  centerRatio = Math.max(0, Math.min(1, centerRatio));
  const centerYear = minYear + centerRatio * span;

  const desiredPxPerYear = computeOptimalPxPerYearForCenter(
    scrollContainer,
    centerYear
  );

  if (
    desiredPxPerYear == null ||
    Math.abs(desiredPxPerYear - currentPxPerYear) < 1.0
  ) {
    return;
  }

  const maxStacks = computeMaxVerticalStacksForViewport(scrollContainer);
  const currentLanes = computeLaneCountForCenterYear(
    scrollContainer,
    centerYear,
    currentPxPerYear,
    maxStacks
  );
  
  // ИСПРАВЛЕННАЯ ЛОГИКА:
  // Блокируем только если всё помещается И хотят увеличить зум
  // Разрешаем уменьшение зума (desiredPxPerYear < currentPxPerYear)
  if (currentLanes <= maxStacks && desiredPxPerYear >= currentPxPerYear) {
    // Всё помещается и нам НЕ предлагают уменьшить - не нужно
    return;
  }

  revealLocked = true;
  updateVisibilityForElements(scrollContainer, { allowReveal: false });

  console.log("Auto-zoom:", {
    reason: "maximize_horizontal_subject_to_vertical",
    direction,
    centerYear: centerYear.toFixed(2),
    pxPerYearCurrent: currentPxPerYear.toFixed(2),
    pxPerYearTarget: desiredPxPerYear.toFixed(2),
    isZoomOut: desiredPxPerYear < currentPxPerYear
  });

  let anchorYearForZoom = centerYear;
  let anchorSideForZoom = "center";
  if (direction === "init") {
    anchorYearForZoom = minYear;
    anchorSideForZoom = "left";
  }

  animateZoomTo(desiredPxPerYear, anchorYearForZoom, anchorSideForZoom);
}

function initPanning() {
  const scrollContainer = document.getElementById("timeline");
  let isPanning = false;
  let startX = 0;
  let startScrollLeft = 0;
  let activePointerId = null;
  let lastScrollLeftDuringPan = 0;

  // вспомогательная функция для авто-зума после завершения перетаскивания
  function triggerAutoZoomAfterPan() {
    const endScrollLeft = scrollContainer.scrollLeft;
    if (endScrollLeft === startScrollLeft) {
      return; // не было реального сдвига
    }
    const direction = endScrollLeft > startScrollLeft ? "right" : "left";
    autoZoomDuringPan(scrollContainer, direction);
  }

  scrollContainer.addEventListener("pointerdown", (e) => {
    isPanning = true;
    isUserPanning = true;
    activePointerId = e.pointerId;
    scrollContainer.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startScrollLeft = scrollContainer.scrollLeft;
    lastScrollLeftDuringPan = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
  });

  scrollContainer.addEventListener("pointermove", (e) => {
    if (!isPanning || e.pointerId !== activePointerId) return;
    const dx = e.clientX - startX;
    scrollContainer.scrollLeft = startScrollLeft - dx;

    // просто запоминаем последний scrollLeft во время перетаскивания
    const currentScrollLeft = scrollContainer.scrollLeft;
    lastScrollLeftDuringPan = currentScrollLeft;

    // сразу обновляем видимость, чтобы обрезанные карточки скрывались
    updateVisibilityForElements(scrollContainer, { allowReveal: false });
  });

  function endPan(e) {
    if (!isPanning || (e && e.pointerId !== activePointerId)) return;

    // один раз запускаем авто-зум после окончания перетаскивания
    triggerAutoZoomAfterPan();

    isPanning = false;
    activePointerId = null;
    isUserPanning = false;
    scrollContainer.style.cursor = "grab";
  }

  scrollContainer.addEventListener("pointerup", endPan);
  scrollContainer.addEventListener("pointercancel", endPan);
  scrollContainer.addEventListener("pointerleave", endPan);
}

window.addEventListener("load", () => {
  const scrollContainer = document.getElementById("timeline");

  // Hide timeline during the very first layout + auto-zoom,
  // so the user sees only the final, correctly zoomed state.
  if (scrollContainer) {
    // scrollContainer.style.visibility = "hidden";
  }

  currentPxPerYear = computeInitialPxPerYear(scrollContainer);
  basePxPerYear = currentPxPerYear;
  precomputeYearZoomMap(scrollContainer);
  renderTimeline();

  // Run initial auto-zoom (with anchor on the left edge) while the
  // timeline is hidden. It will unhide itself when the animation ends.
  autoZoomDuringPan(scrollContainer, "init");

  scrollContainer.addEventListener("scroll", () =>
    updateVisibilityForElements(scrollContainer, {
      allowReveal: !isUserPanning && zoomAnimation === null,
    })
  );
  initPanning();
});

window.addEventListener("resize", () => {
  const scrollContainer = document.getElementById("timeline");
  if (scrollContainer) {
    precomputeYearZoomMap(scrollContainer);
  }
  renderTimeline();
});
