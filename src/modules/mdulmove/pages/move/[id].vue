<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'หน้าแรก', to: '/' },
    { label: 'ปริ้นเอกสาร', to: '/print' },
    { label: 'สแกนเอกสารเข้าระบบ', to: '/scan' },
    // { label: 'ปริ้นเอกสารติดตามทวงหนี้', to: '/print' },
    { label: 'ปริ้นข้อมูลสมาชิก', to: '/print' },
    { label: 'ทำบันทึกข้อความ', to: '/report' },
    { label: 'ทำหักเงินเดือน', to: '/reportDoc' },
  ],
  pageDef,
);
</script>
