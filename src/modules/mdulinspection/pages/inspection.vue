<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useInspectionModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Inspection',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/inspection',
  },
]);
useSmartTabs([
  {
    label: 'ตรวจสอบข้อมูล',
    to: '/inspection',
  },
  {
    label: 'เสร็จสื้น',
    to: '/inspection/closed',
  },
]);
</script>
