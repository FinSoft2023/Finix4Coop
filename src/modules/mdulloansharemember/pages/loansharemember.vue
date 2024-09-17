<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoansharememberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Loansharemember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loansharemember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/loansharemember',
  },
  {
    label: 'Closed',
    to: '/loansharemember/closed',
  },
]);
</script>
