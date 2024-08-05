<template>
  <NuxtPage />
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  useComponentResolver(defaultViewResolvers);
  useSubLinks(
    [
      { label: 'สั่งจ่ายเช็ค', icon: 'i-heroicons-ticket', to: '/orderCheque' },
      { label: 'จ่ายเช็ค', icon: 'i-heroicons-arrow-down-on-square', to: '/payCheque' }
    ],
    pageDef,
  );
</script>
