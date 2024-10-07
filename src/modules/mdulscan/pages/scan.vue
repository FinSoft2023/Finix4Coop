<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useScanModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Scan',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/scan',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/scan',
  },
  {
    label: 'Closed',
    to: '/scan/closed',
  },
]);
</script>
