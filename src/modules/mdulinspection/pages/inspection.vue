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
    label: 'รอตรวจสอบ',
    to: '/inspection',
  },
  {
    label: 'ตรวจแล้ว',
    to: '/inspection/closed',
  },
]);
</script>
