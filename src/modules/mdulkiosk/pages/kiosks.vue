<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useKiosksModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Kiosks',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/kiosks',
  },
]);
useSmartTabs([
  {
    label: 'Welcome',
    to: '/kiosks',
  },
  {
    label: 'Addline',
    to: '/kiosks/addline',
  },
  {
    label: 'Scanqr',
    to: '/kiosks/scanqr',
  },
]);
</script>
