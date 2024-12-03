<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useIdentificationcounterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Identificationcounter',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/Identificationcounter',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/Identificationcounter',
  },
  {
    label: 'Closed',
    to: '/Identificationcounter/closed',
  },
]);
</script>
