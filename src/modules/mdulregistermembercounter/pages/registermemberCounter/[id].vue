<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'ปริ้น QR ทับฟอร์ม', to: '/qrPrint' },
    { label: 'กรอกฟอร์มสมัคร', to: '/' },
    { label: 'scan เอกสาร', to: '/scanPaper' },
    { label: 'ปริ้นเอกสาร(เซ็นยืนยัน)', to: '/print' },
    { label: 'ยืนยันตัวตัน ', to: '/edit' },
    { label: 'เอกสารหักเงิน', to: '/addInformation' },
    { label: 'อนุมัติ', to: '/cancel' },
    { label: 'ไม่ผ่าน', to: '/cancel' },
  ],
  pageDef,
);
</script>
