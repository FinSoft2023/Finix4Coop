<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ปริ้นเอกสาร', icon: 'i-heroicons-printer', to: '/print' },
  { label: 'บันทึกเอกสาร', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'ลายเซ็น', icon: 'i-heroicons-arrow-down-on-square', to: '/takePhoto' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
