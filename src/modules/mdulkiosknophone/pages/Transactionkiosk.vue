<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTransactionkioskModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Transactionkiosk',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/Transactionkiosk',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/Transactionkiosk',
  },
  {
    label: 'Closed',
    to: '/Transactionkiosk/closed',
  },
]);
</script>
