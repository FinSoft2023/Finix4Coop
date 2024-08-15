<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ถ่ายรูปสมาชิก', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'บันทึกลายเซ็น', icon: 'i-heroicons-arrow-down-on-square', to: '/signature' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
