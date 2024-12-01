<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'ปริ้นเอกสาร', to: '/printDocument' },
    { label: 'สแกนเก็บเอกสาร', to: '/scanPaper' },
    { label: 'ยืนยันตัวตน', to: '/edit' },
    { label: 'ปริ้น QR', to: '/printQR' },
    { label: 'กรอกฟอร์มสมัคร', to: '/fillInformation' },
    { label: 'อนุมัติ', to: '/approve' },
    { label: 'ยกเลิก', to: '/cancel' },
  ],
  pageDef,
);
</script>
