<template>
  <NuxtPage />
  
</template>

<script setup lang="ts">
const moduleRef = useTransfermoneyModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Transfermoney',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/transfermoney',
  },
]);
useSmartTabs([
  {
    label: 'รอจ่าย',
    to: '/transfermoney',
  },
  {
    label: 'จ่ายแล้ว',
    to: '/transfermoney/success',
  }, 
]);


</script>
