<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoanordinarymemberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Loanordinarymember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loanordinarymember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/loanordinarymember',
  },
  {
    label: 'Closed',
    to: '/loanordinarymember/closed',
  },
]);
</script>
