<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/' },
    { label: 'QR Code', to: '/scan' },
    { label: 'Online Deposit', to: '/deposit' },
  ],
  pageDef,
);
</script>
