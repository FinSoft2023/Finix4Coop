<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'บันทึกใบประหน้า', to: '/scan' },
    { label: 'ยกเลิก', to: '/cancel' },
  ],
  pageDef,
);
</script>
