<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useRegistermemberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Registermember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/registermember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/registermember',
  },
  {
    label: 'Closed',
    to: '/registermember/closed',
  },
]);
</script>
