<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'อนุมัติ', to: '/' },
    { label: 'ไม่อนุมัติ', to: '/closed' },
  ],
  pageDef,
);
</script>
