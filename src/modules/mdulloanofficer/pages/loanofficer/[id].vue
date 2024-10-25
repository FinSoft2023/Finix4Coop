<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'หน้าแรก', to: '/' },
    { label: 'ปริ้นใบปะหน้า', to: '/print' },
    { label: 'สแกนเอกสารเข้าระบบ', to: '/scan' },
  ],
  pageDef,
);
</script>
