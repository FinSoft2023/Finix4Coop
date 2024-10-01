<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/' },
    { label: 'ปริ้นเอกสารติดตามทวงหนี้', to: '/print' },
    { label: 'ประวัติ', to: '/cancel' },
  ],
  pageDef,
);
</script>
