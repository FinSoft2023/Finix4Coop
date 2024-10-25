<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const moduleRef = useLoanofficerModule();
setModulePageRoot([
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Loanofficer',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/loanofficer',
  },
]);
useSmartTabs([
  {
    label: 'เตรียมเอกสาร',
    to: '/loanofficer',
  },
  {
    label: 'รายการจากที่ประชุม',
    to: '/loanofficer/closed',
  },
  // {
  //   label: 'เสร็จสิ้น',
  //   to: '/loanofficer/finished',
  // },
  // {
  //   label: 'ปริ้นรายงาน',
  //   to: '/loanofficer/completed',
  // },
]);
</script>
