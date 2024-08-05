<template>
  <NuxtPage />
</template>

<script setup
  lang="ts">
  const moduleRef = useFinancesModule();
  setModulePageRoot([
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/',
    },
    {
      label: 'Finances',
      icon: 'i-heroicons-square-3-stack-3d',
      to: '/financials',
    },
  ]);
  useSmartTabs([
    {
      label: 'รายการคำอนุมัติ',
      to: '/financials',
    },
    {
      label: 'รายการเตรียมรอจ่าย',
      to: '/financials/active',
    },
  ]);
</script>
