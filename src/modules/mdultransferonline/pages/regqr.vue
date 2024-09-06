<template>
  <UButton @click="handleScan">Start Scan</UButton>
  <p>Result will goes here: {{ result }}</p>
</template>

<script setup lang="ts">
const { runLiff } = useLiff();

const result = ref('');
const handleScan = async () => {
  await runLiff(async liff => {
    const res = await liff.scanCodeV2();
    result.value = res.value ?? 'No result';
  });
};
</script>