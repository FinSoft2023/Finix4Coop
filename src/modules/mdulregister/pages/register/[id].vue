<template>
  <NuxtPage />
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  useComponentResolver(defaultViewResolvers);
  useSubLinks(
    [
      { label: 'ปริ้นใบสมัคร', to: '/print' },
      { label: 'สแกนเอกสาร', to: '/scan' },
      { label: 'ลายเซ็น', to: '/takePhoto' },
      { label: 'ยกเลิก', to: '/cancel' },
    ],
    pageDef,
  );
</script>
