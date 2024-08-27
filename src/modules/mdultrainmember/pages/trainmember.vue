<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useTrainmemberModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Trainmember',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/trainmember',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/trainmember',
  },
  {
    label: 'Closed',
    to: '/trainmember/closed',
  },
]);
</script>
