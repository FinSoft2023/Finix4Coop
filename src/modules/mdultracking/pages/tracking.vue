<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTrackingModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Tracking',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/tracking',
  },
]);
useSmartTabs([
  {
    label: 'ทั้งหมด',
    to: '/tracking',
  },
  {
    label: 'เดือนที่ 1',
    to: '/tracking/month1',
  },
  {
    label: 'เดือนที่ 2',
    to: '/tracking/month2',
  },
  {
    label: 'เดือนที่ 3',
    to: '/tracking/month3',
  },
  // {
  //   label: 'Closed',
  //   to: '/tracking/closed',
  // },
]);
</script>
