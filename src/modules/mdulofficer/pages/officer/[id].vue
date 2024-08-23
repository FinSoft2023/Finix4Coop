<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ถ่ายรูปประจำตัว', icon: 'i-heroicons-printer', to: '/takePhoto' },
  { label: 'บันทึกลายเซ็น', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'Qr Code ผูกบัญชี', icon: 'i-heroicons-arrow-down-on-square', to: '/qrCode' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
