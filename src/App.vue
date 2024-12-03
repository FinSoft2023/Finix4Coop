<template>
  <div id="app">
    <!-- ...existing code... -->
    <QrScanner />
    <ExampleUsage />
    <!-- ...existing code... -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QrScanner from "./basis/finready/components/F/QrScanner.vue";
import ExampleUsage from "./components/ExampleUsage.vue";

export default defineComponent({
  name: "App",
  components: {
    QrScanner,
    ExampleUsage,
  },
  // ...existing code...
});
</script>

<style>
/* ...existing code... */
</style>