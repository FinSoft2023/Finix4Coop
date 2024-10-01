<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useDeductionResultsModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'DeductionResults',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/deductionResults',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/deductionResults',
  },
  {
    label: 'Closed',
    to: '/deductionResults/closed',
  },
]);
</script>
