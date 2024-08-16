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
    label: 'สร้างรายงาน',
    to: '/approve',
  },
  {
    label: 'เข้าประชุม',
    to: '/approve/attendance',
  },
  {
    label: 'สร้างใบประหน้า',
    to: '/approve/coversheet',
  },
  {
    label: 'เซ็นอนุมัติคำขอ',
    to: '/approve/approval',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/approve/closed',
  },
]);
</script>
