<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useDeductionModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Deduction',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/deduction',
  },
]);
useSmartTabs([
  {
    label: 'รายชื่อผู้ค้างชำระ',
    to: '/deduction',
  },
  // {
  //   label: 'Closed',
  //   to: '/deduction/closed',
  // },
]);
</script>
