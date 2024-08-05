<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useWithdrawalsModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Withdrawals',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/withdrawals',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/withdrawals',
  },
  {
    label: 'Closed',
    to: '/withdrawals/closed',
  },
]);
</script>
