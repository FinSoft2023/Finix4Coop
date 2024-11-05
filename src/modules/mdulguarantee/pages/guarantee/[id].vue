<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'อนุมัติ', to: '/cancel' },
  { label: 'ไม่ผ่าน', to: '/cancel' },
  ],
  pageDef,
);
</script>
