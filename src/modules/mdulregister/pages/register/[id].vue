<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
  { label: 'ปริ้นใบสมัครสมาชิก', icon: 'i-heroicons-printer', to: '/print' },
  { label: 'สแกนเอกสาร', icon: 'i-heroicons-arrow-down-on-square', to: '/scan' },
  { label: 'ผูก Chat Bot Line', icon: 'i-heroicons-arrow-down-on-square', to: '/qrCode' },
  { label: 'ยกเลิก', icon: 'i-heroicons-x-circle', to: '/cancel' }
  ],
  pageDef,
);
</script>
