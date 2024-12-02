<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'ขอกู้หุ้น', to: '/loan' },
    // { label: 'ปริ้นเอกสารขอกู้หุ้น', to: '/print' },
  ],
  pageDef,
);
</script>
