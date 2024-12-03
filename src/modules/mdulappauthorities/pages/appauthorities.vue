<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useAppauthoritiesModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Appauthorities',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/appauthorities',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/appauthorities',
  },
  {
    label: 'Closed',
    to: '/appauthorities/closed',
  },
]);
</script>
