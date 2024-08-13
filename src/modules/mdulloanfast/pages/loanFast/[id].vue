<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ปริ้นใบขอกู้ฉุกเฉิน', icon: 'i-heroicons-printer', to: '/print' },
  // { label: 'ปริ้นใบแปะหน้า', icon: 'i-heroicons-printer', to: '/printsheet' },
  { label: 'บันทึกใบขอกู้ฉุกเฉิน', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
