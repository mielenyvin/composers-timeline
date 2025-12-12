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
import { onMounted, onBeforeUnmount } from "vue";
import { initTimeline } from "../timeline-core";

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
  window.timeline = initTimeline();
});

onBeforeUnmount(() => {
  const timelineEl = document.getElementById("timeline");
  if (timelineEl) {
    timelineEl.removeEventListener("click", handleClick);
  }
});
</script>

<style scoped>
.timeline-wrapper {
  position: relative;
  height: 100%;
}
</style>
