<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ปริ้นใบปะหน้า', icon: 'i-heroicons-printer', to: '/printReport' },
  { label: 'ถ่ายรูปเอกสารอนุมัติคำขอ', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
