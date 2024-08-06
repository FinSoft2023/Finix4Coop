<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTransferonlineModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Transferonline',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/transferonline',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/transferonline',
  },
  {
    label: 'Closed',
    to: '/transferonline/closed',
  },
]);
</script>
