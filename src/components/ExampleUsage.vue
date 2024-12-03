
<template>
  <div>
    <h1>QR Scanner Example</h1>
    <QrScanner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QrScanner from "../basis/finready/components/F/QrScanner.vue";

export default defineComponent({
  name: "ExampleUsage",
  components: {
    QrScanner,
  },
});
</script>

<style scoped>
/* Add any styles for your example usage here */
</style>