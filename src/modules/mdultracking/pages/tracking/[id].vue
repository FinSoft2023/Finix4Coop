<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'หน้าแรก', to: '/' },
    { label: 'ประวัติ', to: '/history' },
    { label: 'ปริ้นเอกสาร', to: '/print' },
  ],
  pageDef,
);
</script>
