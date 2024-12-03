<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'ข้อมูลสมาชิก', to: '/' },
    { label: 'ถ่ายรูปประจำตัว', to: '/takePhoto' },
    { label: 'สแกนเก็บลายเซ็น', to: '/signature' },
    { label: 'QR Code ยืนยันตัวตน', to: '/verifyIdentityQR' },
  ],
  pageDef,
);
</script>
