<template>
  <div>
    <UButton to="/scan/create" block>สแกน QR บนเอกสาร</UButton>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Scan', to: '/scan' },
  { label: 'Create', to: '/scan/create' },
]);
</script>
