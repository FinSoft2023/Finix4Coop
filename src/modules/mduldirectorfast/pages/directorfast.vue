<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useDirectorfastModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Directorfast',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/directorfast',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/directorfast',
  },
  {
    label: 'Closed',
    to: '/directorfast/closed',
  },
]);
</script>
