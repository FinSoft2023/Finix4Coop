<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useChequesModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Cheques',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/cheques',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/cheques',
  },
  {
    label: 'Closed',
    to: '/cheques/closed',
  },
]);
</script>
