<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/loan' },
    { label: 'Edit', to: '/edit' },
  ],
  pageDef,
);
</script>
