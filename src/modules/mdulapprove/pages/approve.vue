<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useApproveModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Approve',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/approve',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/approve',
  },
  {
    label: 'Closed',
    to: '/approve/closed',
  },
]);
</script>
