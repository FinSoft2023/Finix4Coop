<template>
  <div>
    <UButton to="/appsacn/create" block>สแกน QR บนเอกสาร</UButton>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Appsacn', to: '/appsacn' },
  { label: 'Create', to: '/appsacn/create' },
]);
</script>
