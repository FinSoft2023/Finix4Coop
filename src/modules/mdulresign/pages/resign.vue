<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useResignModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Resign',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/resign',
  },
]);
useSmartTabs([
  {
    label: 'รายการทั้งหมด',
    to: '/resign',
  },
  // {
  //   label: 'Closed',
  //   to: '/resign/closed',
  // },
]);
</script>
