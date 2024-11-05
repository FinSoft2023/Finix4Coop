<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useMoveModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Move',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/move',
  },
]);
useSmartTabs([
  {
    label: 'รายการทั้งหมด',
    to: '/move',
  },
  // {
  //   label: 'Closed',
  //   to: '/move/closed',
  // },
]);
</script>
