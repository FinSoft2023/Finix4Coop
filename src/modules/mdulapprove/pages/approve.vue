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
  { label: 'ตรวจสอบข้อมูล', to: '/approve' },
  { label: 'ใบรายงาน', to: '/approve/attendance' },
  { label: 'ใบปะหน้า', to: '/approve/coversheet' },
  { label: 'เซ็นอนุมัติคำขอ', to: '/approve/approval' },
  { label: 'เสร็จสิ้น', to: '/approve/completed' },
]);
</script>
