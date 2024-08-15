<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useBindaccountModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Bindaccount',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/bindaccount',
  },
]);
useSmartTabs([
  {
    label: 'กำลังดำเนินการ',
    to: '/bindaccount',
  },
  {
    label: 'ผูกบัญชีเสร็จสิ้น',
    to: '/bindaccount/completed',
  },
]);
</script>
