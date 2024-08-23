<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoanfastmemberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Loanfastmember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loanfastmember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/loanfastmember',
  },
  {
    label: 'Closed',
    to: '/loanfastmember/closed',
  },
]);
</script>
