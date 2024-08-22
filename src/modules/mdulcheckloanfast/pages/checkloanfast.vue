<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useCheckloanfastModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Checkloanfast',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/checkloanfast',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/checkloanfast',
  },
  {
    label: 'Closed',
    to: '/checkloanfast/closed',
  },
]);
</script>
