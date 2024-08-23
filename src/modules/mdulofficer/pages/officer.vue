<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useOfficerModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Officer',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/officer',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/officer',
  },
  {
    label: 'Closed',
    to: '/officer/closed',
  },
]);
</script>
