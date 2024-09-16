<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoanFastModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'LoanFast',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loanFast',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/loanFast',
  },
  {
    label: 'Complete',
    to: '/loanFast/completed',
  },
]);
</script>
