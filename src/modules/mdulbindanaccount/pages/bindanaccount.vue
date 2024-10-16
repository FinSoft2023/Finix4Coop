<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useBindanaccountModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Bindanaccount',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/bindanaccount',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/bindanaccount',
  },
  {
    label: 'Closed',
    to: '/bindanaccount/closed',
  },
]);
</script>
