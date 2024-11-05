<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'หน้าแรก', to: '/' },
    { label: 'ปริ้นเอกสาร', to: '/print' },
    { label: 'สแกนเอกสารเข้าระบบ', to: '/scan' },
    // { label: 'สแกนเก็บลายเซ็น', to: '/scanSignature' },
    // { label: 'ถ่ายภาพหลักฐาน', to: '/takePhoto' },
    // { label: 'Qr Code ยืนยันตัวตน', to: '/qrCode' },
    { label: 'รับเงินค่าฌาปนกิจ', to: '/fillData' },
    // { label: 'อนุมัติวงเงิน', to: '/free' },
  ],
  pageDef,
);
</script>
