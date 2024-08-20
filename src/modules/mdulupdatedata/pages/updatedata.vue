<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useUpdatedataModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Updatedata',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/updatedata',
  },
]);
useSmartTabs([
  {
    label: 'กำลังดำเนินการ',
    to: '/updatedata',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/updatedata/closed',
  },
]);
</script>
