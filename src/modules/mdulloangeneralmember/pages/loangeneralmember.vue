<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoangeneralmemberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Loangeneralmember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loangeneralmember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/loangeneralmember',
  },
  {
    label: 'Closed',
    to: '/loangeneralmember/closed',
  },
]);
</script>
