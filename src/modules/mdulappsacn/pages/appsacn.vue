<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useAppsacnModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Appsacn',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/appsacn',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/appsacn',
  },
  {
    label: 'Closed',
    to: '/appsacn/closed',
  },
]);
</script>
