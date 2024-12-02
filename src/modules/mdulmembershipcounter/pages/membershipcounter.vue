<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useMembershipcounterModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Membershipcounter',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/membershipcounter',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/membershipcounter',
  },
  {
    label: 'Closed',
    to: '/membershipcounter/closed',
  },
]);
</script>
