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
    // { label: 'ปริ้นบันทึกข้อความ', to: '/print' },
    // { label: 'ปริ้นหักเงินเดือน', to: '/print' },
  ],
  pageDef,
);
</script>
