<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useCounterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Counter',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/counter',
  },
]);
useSmartTabs([
  {
    label: 'กำลังดำเนินการ',
    to: '/counter',
  },
  {
    label: 'ดำเนินการเสร็จสิ้น',
    to: '/counter/closed',
  },
]);
</script>
