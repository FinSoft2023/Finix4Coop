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
    label: 'ค้าง 1 เดือน',
    to: '/tracking/month1',
  },
  {
    label: 'ค้าง 2 เดือน',
    to: '/tracking/month2',
  },
  {
    label: 'ค้าง 3 เดือน',
    to: '/tracking/month3',
  },
]);
</script>
