<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useQueuesModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Queues',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/queues',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/queues',
  },
  {
    label: 'Closed',
    to: '/queues/closed',
  },
]);
</script>
