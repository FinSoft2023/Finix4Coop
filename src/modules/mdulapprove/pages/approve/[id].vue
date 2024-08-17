<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

useComponentResolver(defaultViewResolvers);
useSubLinks(
  [
    { label: 'บันทึกชุดใบสมัคร', to: '/scan1' },
    { label: 'บันทึกใบยินยอมหักเงิน', to: '/scan2' },
    { label: 'ยกเลิกรายการ', to: '/cancel' },
  ],
  pageDef,
);
</script>
