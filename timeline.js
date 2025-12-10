const minBirth = Math.min(...composers.map((c) => c.birth));
const maxBirth = Math.max(...composers.map((c) => c.birth));
const maxDeath = Math.max(...composers.map((c) => c.death));
const minYear = minBirth - 10;
const maxYear = Math.max(maxBirth, maxDeath) + 5;
const span = maxYear - minYear;

const sortedComposers = [...composers].sort((a, b) => a.birth - b.birth);

const paddingLeft = 0; // даём запас, чтобы самая левая карточка не уезжала за край
const paddingRight = 0;
const axisBottom = 80;
const maxVerticalLanes = 4; // по высоте помещаем не больше 4 рядов
const extraViewportWidthPx = 600; // считаем зум как будто по 300px слева и справа
const zoomMultiplier = 1; // множитель для базового зума по горизонтали
const placeholderMinPx = 50; // нижняя граница квадратика
const placeholderTopPx = 10; // отступ от верхнего края карточки до начала квадрата
const placeholderGapPx = 4; // расстояние между низом квадрата и датой рождения
const cardBottomPaddingPx = 6; // запас под датой рождения
const laneGapPx = 20; // вертикальный зазор между рядами
const cardOffsetPx = 50; // отступ от оси до первого ряда карточек

// делаем палочки и ряды в 1.5 раза ниже
const verticalScale = 2 / 4;

const topMarginPx = 10; // запас сверху, чтобы верхний ряд не упирался в край окна

const minLaneDistancePx = 290; // минимальное расстояние по X между элементами в одном ряду

const minPxPerYear = 6;
const maxPxPerYear = 120;
let currentPxPerYear = null;
const visibilityBufferPx = 60; // небольшой запас, чтобы не мигали элементы на границе

let yearZoomMap = null; // предрассчитанные зумы по годам

let zoomAnimation = null; // состояние текущей анимации зума
let revealLocked = false; // блокируем показ новых элементов до завершения зума
let autoZoomRafPending = false; // не даём запускать пересчёт зума слишком часто

let isPanning = false; // находимся ли сейчас в режиме перетаскивания таймлайна мышкой

// Динамические размеры, которые зависят от высоты viewport
let currentPlaceholderSizePx = 100;
let currentCardHeightPx = 120;
let currentLaneHeightPx = 140;

function getEffectiveViewportWidth(scrollContainer) {
  const baseWidth =
    (scrollContainer && scrollContainer.clientWidth) || window.innerWidth || 0;
  return baseWidth + extraViewportWidthPx; // шире на 300px с каждой стороны
}

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

  const containerRect = scrollContainer.getBoundingClientRect();

  const viewportTopPx = 0;
  const viewportBottomPx =
    window.innerHeight || document.documentElement.clientHeight || 0;
  const viewportLeftPx = containerRect.left;
  const viewportRightPx = containerRect.right;

  const nodes = container.querySelectorAll("[data-x]");

  nodes.forEach((el) => {
    // 1) Базовая видимость: по пересечению реального прямоугольника элемента
    //    с видимой областью окна и контейнера таймлайна.
    const rect = el.getBoundingClientRect();
    const horizontallyVisible =
      rect.right >= viewportLeftPx - visibilityBufferPx &&
      rect.left <= viewportRightPx + visibilityBufferPx;
    const verticallyVisible =
      rect.bottom >= viewportTopPx && rect.top <= viewportBottomPx;

    let shouldBeVisible = horizontallyVisible && verticallyVisible;

    // 2) Вертикальный лимит по количеству рядов.
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

    // 3) Применяем класс offscreen с учётом блокировки reveal во время зума.
    const isVisible = !el.classList.contains("offscreen");

    if (shouldBeVisible && (allowReveal || isVisible)) {
      el.classList.remove("offscreen");
    } else if (!shouldBeVisible) {
      el.classList.add("offscreen");
    }
  });
}

// --- Throttle for visibility updates ---
let visibilityRafPending = false;

function scheduleVisibilityUpdate(scrollContainer, allowReveal) {
  if (visibilityRafPending) return;
  visibilityRafPending = true;
  requestAnimationFrame(() => {
    visibilityRafPending = false;
    updateVisibilityForElements(scrollContainer, { allowReveal });
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
  const finishedAnchorYear = zoomAnimation.anchorYear;
  const finishedAnchorSide = zoomAnimation.anchorSide;
  zoomAnimation = null;
  revealLocked = false;
  renderTimeline({
    anchorYear: finishedAnchorYear,
    anchorSide: finishedAnchorSide,
    forceReveal: true,
  });

  const scrollContainer = document.getElementById("timeline");
  if (scrollContainer && scrollContainer.style.visibility === "hidden") {
    scrollContainer.style.visibility = "visible";
  }

  if (scrollContainer) {
    // Держим тот же тип якоря, что и в анимации (в твоём случае — left)
    scheduleAutoZoom(scrollContainer, {
      anchorSide: finishedAnchorSide,
    });
  }
}
  }

  requestAnimationFrame(step);
}

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

  // скейлим отступ от оси и межрядный зазор
  const scaledCardOffset = cardOffsetPx * verticalScale;
  const scaledLaneGap = laneGapPx * verticalScale;

  // Раскладываем maxVerticalLanes рядов в доступную высоту
  const rawPlaceholder =
    (viewportHeight -
      topMarginPx -
      axisBottom -
      scaledCardOffset -
      (maxVerticalLanes - 1) * scaledLaneGap -
      maxVerticalLanes * extraCardSpace) /
    maxVerticalLanes;

  const placeholderSize = Math.max(
    placeholderMinPx,
    Math.floor(rawPlaceholder || 0)
  );
  const cardHeight = placeholderSize + extraCardSpace;
  const laneHeight = cardHeight + scaledLaneGap;

  // Сколько рядов реально поместится
  const availableAfterFirstRow =
    viewportHeight - topMarginPx - axisBottom - scaledCardOffset - cardHeight;

  const extraStacks =
    availableAfterFirstRow > 0
      ? Math.floor(availableAfterFirstRow / laneHeight)
      : 0;

  const maxStacks = Math.max(1, Math.min(maxVerticalLanes, 1 + extraStacks));

  // важно – возвращаем ещё и отступ от оси
  return {
    laneHeight,
    placeholderSize,
    cardHeight,
    maxStacks,
    cardOffset: scaledCardOffset,
  };
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

function computeInitialPxPerYear(scrollContainer) {
  const viewportWidth = getEffectiveViewportWidth(scrollContainer);
  const availableWidth = Math.max(
    200,
    viewportWidth - paddingLeft - paddingRight
  );
  const basePxPerYear = availableWidth / span;
  // Делаем стартовый зум в zoomMultiplier раз крупнее
  const pxPerYear = basePxPerYear * zoomMultiplier;
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
  let anchorSide = "left"; // "center" или "left"
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
  lastLaneCount = laneCount;
  const cardOffset = metrics.cardOffset; // уже сжатый отступ
  const laneHeight = metrics.laneHeight; // уже сжатый шаг по вертикали

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
    deathLabel.style.bottom = lifeY - 16 + "px";
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
    // star is added via CSS ::before ("★ ")
    years.textContent = String(c.birth);
    years.style.left = x + "px";
    years.style.bottom = lifeY - 2 + "px"; // ставим на место бывшего birth-dot
    years.dataset.x = x;
    years.dataset.laneIndex = String(laneIndex);

    card.appendChild(placeholder);
    card.appendChild(name);
    container.appendChild(card);
    container.appendChild(years);
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
    allowReveal: forceReveal || (!revealLocked && zoomAnimation === null),
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
  const viewportWidth = getEffectiveViewportWidth(scrollContainer);
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
    metrics.cardOffset -
    metrics.cardHeight;

  if (available <= 0 || !isFinite(available)) {
    lastMaxVisibleLaneCount = 1;
    return 1;
  }

  const extraStacks =
    metrics.laneHeight > 0 ? Math.floor(available / metrics.laneHeight) : 0;
  const maxStacks = Math.max(1, Math.min(maxVerticalLanes, 1 + extraStacks));

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

  if (lanesAtMin <= maxVerticalStacks) {
    // Можно использовать минимальный зум — это даёт максимальный охват «пустынь».
    return minPxPerYear;
  }

  // Минимальный не подходит - ищем минимальный зум, при котором всё помещается
  let low = minPxPerYear;
  let high = maxPxPerYear;
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

  return Math.min(maxPxPerYear, best);
}

/**
 * Предрасчитываем удобный зум для каждого года,
 * исходя из того, сколько рядов помещается по вертикали.
 */
function precomputeYearZoomMap(scrollContainer) {
  const map = {};
  const stepYear = 1;

  for (let y = minYear; y <= maxYear; y += stepYear) {
    const key = Math.round(y);
    const zoom = computeOptimalPxPerYearForCenter(scrollContainer, y);
    map[key] = zoom;
  }

  // Сглаживание
  const keys = Object.keys(map)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);

  // Минимальное сглаживание
  const smoothed = {};
  const radius = 2; // небольшой радиус, чтобы не было резких скачков при прокрутке

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

function getCenterYear(scrollContainer) {
  const viewportWidth = scrollContainer.clientWidth || window.innerWidth || 0;
  const axisWidth = span * currentPxPerYear;
  const axisLeft = paddingLeft;

  if (!isFinite(axisWidth) || axisWidth <= 0) {
    return (minYear + maxYear) / 2;
  }

  const centerX = scrollContainer.scrollLeft + viewportWidth / 2;
  let centerRatio = (centerX - axisLeft) / axisWidth;
  if (!isFinite(centerRatio)) {
    centerRatio = 0.5;
  }
  centerRatio = Math.max(0, Math.min(1, centerRatio));
  return minYear + centerRatio * span;
}

function lookupZoomFromMap(centerYear) {
  if (!yearZoomMap) return null;

  const rounded = Math.round(centerYear);
  const radius = 2;
  let maxZoom = -Infinity;

  for (let y = rounded - radius; y <= rounded + radius; y++) {
    if (Object.prototype.hasOwnProperty.call(yearZoomMap, y)) {
      maxZoom = Math.max(maxZoom, yearZoomMap[y]);
    }
  }

  return Number.isFinite(maxZoom) ? maxZoom : null;
}

function computeDesiredPxPerYear(scrollContainer, centerYear) {
  const fromMap = lookupZoomFromMap(centerYear);
  if (fromMap != null) {
    return fromMap;
  }
  return computeOptimalPxPerYearForCenter(scrollContainer, centerYear);
}

function scheduleAutoZoom(scrollContainer, options = {}) {
  if (autoZoomRafPending) return;
  autoZoomRafPending = true;
  const opts = { ...options };
  requestAnimationFrame(() => {
    autoZoomRafPending = false;
    applyAutoZoom(scrollContainer, opts);
  });
}

function applyAutoZoom(
  scrollContainer,
  { anchorSide = "center", animate = true } = {}
) {
  const targetContainer =
    scrollContainer || document.getElementById("timeline");
  if (!targetContainer) return;
  if (currentPxPerYear == null) return;
  if (zoomAnimation && !animate) {
    // мгновенная подстройка важнее текущей анимации
    zoomAnimation = null;
  } else if (zoomAnimation) {
    return;
  }

  const centerYear = getCenterYear(targetContainer);
  const maxStacks = computeMaxVerticalStacksForViewport(targetContainer);
  const lanesNow = computeLaneCountForCenterYear(
    targetContainer,
    centerYear,
    currentPxPerYear,
    maxStacks
  );

  const desiredPxPerYear = computeDesiredPxPerYear(
    targetContainer,
    centerYear
  );
  if (desiredPxPerYear == null) return;

  // Если уже больше 4 рядов — сразу ставим необходимый зум без анимации и бленда,
  // чтобы никто не скрывался.
if (lanesNow > maxStacks) {
  const forcedPxPerYear = computeOptimalPxPerYearForCenter(
    targetContainer,
    centerYear
  );
  currentPxPerYear = Math.min(
    maxPxPerYear,
    Math.max(minPxPerYear, forcedPxPerYear)
  );
  // Если якорь по левому краю — фиксируем именно minYear
  const forcedAnchorYear =
    anchorSide === "left" ? minYear : centerYear;
  renderTimeline({ anchorYear: forcedAnchorYear, anchorSide });
  revealLocked = false;
  updateVisibilityForElements(targetContainer, { allowReveal: true });
  return;
}

  if (Math.abs(desiredPxPerYear - currentPxPerYear) < 0.05) {
    return;
  }

  if (!animate) {
    const blended =
      currentPxPerYear +
      (desiredPxPerYear - currentPxPerYear) * 0.3; // ещё мягче подстраиваем без рывков
    currentPxPerYear = Math.max(
      minPxPerYear,
      Math.min(maxPxPerYear, blended)
    );
    renderTimeline({ anchorYear: centerYear, anchorSide });
    revealLocked = false;
    updateVisibilityForElements(targetContainer, { allowReveal: true });
    return;
  }

  revealLocked = true;
  updateVisibilityForElements(targetContainer, { allowReveal: false });

  const anchorYear = anchorSide === "left" ? minYear : centerYear;

  animateZoomTo(desiredPxPerYear, anchorYear, anchorSide);
}

function initPanning() {
  const scrollContainer = document.getElementById("timeline");
  let startX = 0;
  let startScrollLeft = 0;
  let activePointerId = null;

  scrollContainer.addEventListener("pointerdown", (e) => {
    isPanning = true;
    activePointerId = e.pointerId;
    scrollContainer.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startScrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
  });

  scrollContainer.addEventListener("pointermove", (e) => {
    if (!isPanning || e.pointerId !== activePointerId) return;
    const dx = e.clientX - startX;
    scrollContainer.scrollLeft = startScrollLeft - dx;

    // обновляем видимость с throttle через requestAnimationFrame,
    // чтобы не тормозить перетаскивание
    scheduleVisibilityUpdate(scrollContainer, true);
  });

  function endPan(e) {
    if (!isPanning || (e && e.pointerId !== activePointerId)) return;

    // просто завершаем перетаскивание
    isPanning = false;
    activePointerId = null;
    scrollContainer.style.cursor = "grab";

    // после того, как пользователь отпустил мышь, один раз плавно подстраиваем зум
    scheduleAutoZoom(scrollContainer);
  }

  scrollContainer.addEventListener("pointerup", endPan);
  scrollContainer.addEventListener("pointercancel", endPan);
  scrollContainer.addEventListener("pointerleave", endPan);
}

window.addEventListener("load", () => {
  const scrollContainer = document.getElementById("timeline");

  currentPxPerYear = computeInitialPxPerYear(scrollContainer);
  precomputeYearZoomMap(scrollContainer);

  // Сразу рисуем так, как будто проскроллили максимально влево
  renderTimeline({ anchorYear: minYear, anchorSide: "left" });

  // Автозум тоже привязываем к левому краю
  scheduleAutoZoom(scrollContainer, { anchorSide: "left" });

  scrollContainer.addEventListener("scroll", () => {
    scheduleVisibilityUpdate(
      scrollContainer,
      // во время анимации зума новые элементы не показываем (revealLocked),
      // при обычной прокрутке — да
      zoomAnimation === null && !revealLocked
    );

    // Во время обычного скролла (колёсико, ползунок) — подстраиваем зум сразу,
    // а во время перетаскивания мышкой не трогаем зум, чтобы не было дёрганий.
    if (!isPanning) {
      scheduleAutoZoom(scrollContainer, { animate: false });
    }
  });
  initPanning();
});

window.addEventListener("resize", () => {
  const scrollContainer = document.getElementById("timeline");
  if (scrollContainer) {
    precomputeYearZoomMap(scrollContainer);
    scheduleAutoZoom(scrollContainer);
  }
  renderTimeline();
});
