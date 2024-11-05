<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useGuaranteeModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Guarantee',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/guarantee',
  },
]);
useSmartTabs([
  {
    label: 'ไม่ผ่าน',
    to: '/guarantee/listmenu',
  },
  {
    label: 'อนุมัติแล้ว',
    to: '/guarantee',
  }, 
]);
</script>
