<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTrainingmembersModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Trainingmembers',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/trainingmembers',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/trainingmembers',
  },
  {
    label: 'Closed',
    to: '/trainingmembers/closed',
  },
]);
</script>
