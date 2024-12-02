<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'ยืนยันตัวตน', to: '/verifyIdentity' },
  ],
  pageDef,
);
</script>
