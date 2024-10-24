<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useRegistermemberCounterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'RegistermemberCounter',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/registermemberCounter',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/registermemberCounter',
  },
  {
    label: 'Closed',
    to: '/registermemberCounter/closed',
  },
]);
</script>
