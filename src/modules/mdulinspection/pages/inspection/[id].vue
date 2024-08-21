<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    // { label: 'Info', to: '/' },
    { label: 'แก้ไขข้อมูล', to: '/edit' },
  ],
  pageDef,
);
</script>
