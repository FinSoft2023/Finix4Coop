<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useChequesModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Cheques',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/cheques',
  },
]);
useSmartTabs([
{
    label: 'ปริ้นเช็ค',
    to: '/cheques',
  },
  {
    label: 'สั่งจ่ายเช็ค',
    to: '/cheques/Active',
  },
  {
    label: 'จ่ายเช็ค',
    to: '/cheques/deliver',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/cheques/completed',
  },
]);
</script>
