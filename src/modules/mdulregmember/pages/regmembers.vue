<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useRegmembersModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'ลงทะเบียนผูกบัญชี',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/regmembers',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/regmembers',
  },
  {
    label: 'Closed',
    to: '/regmembers/closed',
  },
]);
</script>
