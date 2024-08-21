<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useApproveModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Approve',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/approve',
  },
]);
useSmartTabs([
  {
    label: 'ข้อมูลตรวสอบแล้ว',
    to: '/approve',
  },
  {
    label: 'เก็บเอกสารที่อนุมัติ',
    to: '/approve/completed',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/approve/closed',
  },
]);
</script>
