<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useDirectorModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Director',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/director',
  },
]);
useSmartTabs([
  {
    label: 'สั่งจ่ายกู้ฉุกเฉิน',
    to: '/director',
  },
  {
    label: 'กรรมการสินชื่อ',
    to: '/director/active',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/director/completed',
  },
]);
</script>
