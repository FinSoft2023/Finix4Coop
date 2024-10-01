<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/' },
    { label: 'ประวัติชำระหนี้', to: '/history' },
  ],
  pageDef,
);
</script>
