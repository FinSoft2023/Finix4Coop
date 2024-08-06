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
    label: 'ฝาก',
    to: '/transferonline',
  },
  {
    label: 'ถอน',
    to: '/transferonline/closed',
  },
]);
</script>
