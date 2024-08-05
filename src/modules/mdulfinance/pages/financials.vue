<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useFinancesModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Finances',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/finances',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/finances',
  },
  {
    label: 'Closed',
    to: '/finances/closed',
  },
]);
</script>
