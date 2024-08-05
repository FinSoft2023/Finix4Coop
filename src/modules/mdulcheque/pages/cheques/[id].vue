<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'Info', to: '/' },
    { label: 'ปริ้นเช็ค', to: '/print' },
    { label: 'สั่งจ่ายเช็ค', to: '/scan' },
    { label: 'จ่ายเช็ค', to: '/scan2deliver' },
  ],
  pageDef,
);
</script>
