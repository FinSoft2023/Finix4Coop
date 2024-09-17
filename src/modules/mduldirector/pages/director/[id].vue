<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/' },
    { label: 'สแกนเอกสาร', to: '/scan' },
  ],
  pageDef,
);
</script>
