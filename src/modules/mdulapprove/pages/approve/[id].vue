<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'บันทึกชุดใบสมัคร', to: '/' },
    { label: 'บันทึกใบยินยอมหักเงิน', to: '/edit' },
    { label: 'ยกเลิกรายการ', to: '/edit' },
  ],
  pageDef,
);
</script>
