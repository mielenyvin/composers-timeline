<template>
  <!-- This wrapper takes full height under the top bar -->
  <div class="timeline-wrapper">
    <div id="timeline">
      <div class="timeline-inner">
        <div id="axis" class="axis"></div>
        <div id="gantt"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch } from "vue";
import { initTimeline } from "../timeline-core";

const props = defineProps({
  composers: {
    type: Array,
    default: () => [],
  },
  settings: {
    type: Object,
    default: () => ({}),
  },
});

let timelineInstance = null;

const handleClick = (event) => {
  const bar = event.target?.closest?.(".bar");
  if (!bar) return;
  const name = bar.getAttribute("data-name");
  const laneIndex = Number(bar.getAttribute("data-lane-index"));
  window.dispatchEvent(
    new CustomEvent("composer-select", {
      detail: {
        composer: name ? { name } : null,
        laneIndex: Number.isNaN(laneIndex) ? null : laneIndex,
      },
    })
  );
};

onMounted(() => {
  const timelineEl = document.getElementById("timeline");
  if (timelineEl) {
    timelineEl.addEventListener("click", handleClick);
  }
  timelineInstance = initTimeline({
    composers: props.composers,
    settings: props.settings,
  });
  window.timeline = timelineInstance;
});

onBeforeUnmount(() => {
  const timelineEl = document.getElementById("timeline");
  if (timelineEl) {
    timelineEl.removeEventListener("click", handleClick);
  }
  timelineInstance?.destroy?.();
  timelineInstance = null;
});

watch(
  () => props.composers,
  (next) => {
    if (!timelineInstance) return;
    timelineInstance.setComposers(next);
  },
  { deep: true }
);

watch(
  () => props.settings,
  (next) => {
    if (!timelineInstance || !timelineInstance.updateSettings) return;
    timelineInstance.updateSettings(next);
  },
  { deep: true }
);
</script>

<style scoped>
.timeline-wrapper {
  position: relative;
  height: 100%;
}
</style>
