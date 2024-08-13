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
    label: 'กรรมการเงินกู้',
    to: '/director',
  },
  {
    label: 'อนุมัติแล้ว',
    to: '/director/completed',
  },
]);
</script>
