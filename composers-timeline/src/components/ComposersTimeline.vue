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
import { onMounted } from "vue";
import { initTimeline } from "../timeline-core";

// We keep global timeline if you still want window.timeline.goToStart()
onMounted(() => {
  window.timeline = initTimeline();
});
</script>

<style scoped>
.timeline-wrapper {
  position: relative;
  height: 100%;
}
</style>