<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useAccountingModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Accounting',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/accounting',
  },
]);
useSmartTabs([
  {
    label: 'Active',
    to: '/accounting',
  },
  {
    label: 'Closed',
    to: '/accounting/closed',
  },
]);
</script>
