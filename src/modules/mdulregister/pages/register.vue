<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useRegisterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Register',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/register',
  },
]);
useSmartTabs([
  {
    label: 'กำลังดำเนินการ',
    to: '/register',
  },
  {
    label: 'เสร็จสิ้น',
    to: '/register/completed',
  },
]);
</script>
