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
    { label: 'กรอกข้อมูล', to: '/fillInformation' },
    { label: 'ปริ้น QR ทับ', to: '/printQR' },
    { label: 'ยืนยันตัวตน', to: '/verifyIdentity' },
    { label: 'อนุมัติ', to: '/approve' },
    { label: 'ยกเลิก', to: '/cancel' },
  ],
  pageDef,
);
</script>
