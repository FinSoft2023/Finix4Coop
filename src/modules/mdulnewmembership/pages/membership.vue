<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useMembershipModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Membership',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/membership',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/membership',
  },
  {
    label: 'Closed',
    to: '/membership/closed',
  },
]);
</script>
