<template>
  <NuxtPage />
</template>

<script setup
  lang="ts">
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
      label: 'วัน',
      to: '/accounting/daily',
    },
    {
      label: 'เดือน',
      to: '/accounting/monthly',
    },
    {
      label: 'ปี',
      to: '/accounting/yearly',
    },
  ]);
</script>
