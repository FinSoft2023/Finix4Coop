<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTransactionphoneModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Transactionphone',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/Transactionphone',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/Transactionphone',
  },
  {
    label: 'Closed',
    to: '/Transactionphone/closed',
  },
]);
</script>
