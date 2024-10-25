<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useRegistermemberCounterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'RegistermemberCounter',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/registermemberCounter/listCheck',
  },
]);
useSmartTabs([
  {
    label: 'รอตรวจสอบ',
    to: '/registermemberCounter/linkeCheck',
  },
  {
    label: 'ตรวจสอบแล้ว',
    to: '/registermemberCounter/stateCheck',
  },
]);
</script>
