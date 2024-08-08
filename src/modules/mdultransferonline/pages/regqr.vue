<template>
  <UButton @click="handleScan">Start Scan</UButton>
  <a v-if="result" :href="result" target="_blank">Start Demo App</a>
</template>

<script setup lang="ts">
const { runLiff } = useLiff();

const result = ref('');
const handleScan = async () => {
  await runLiff(async liff => {
    result.value = await liff.scanCodeV2();
  });
};
</script>