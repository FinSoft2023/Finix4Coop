<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useGeneralloanModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Generalloan',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/generalloan',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/generalloan',
  },
  {
    label: 'Closed',
    to: '/generalloan/closed',
  },
]);
</script>
