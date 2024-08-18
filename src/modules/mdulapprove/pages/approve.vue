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
    label: 'รายการทั้งหมด',
    to: '/approve',
  },
  {
    label: 'เก็บเอกสารที่อนุมัติ',
    to: '/approve/',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/approve/closed',
  },
]);
</script>
