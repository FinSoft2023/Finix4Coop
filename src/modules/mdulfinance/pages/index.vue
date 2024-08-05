<template>
  <div>
    <h1>(Finances) Index Page</h1>
    <NuxtLink to="/finances">finances</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Finances', to: '/finances' },
  { label: 'Create', to: '/finances/create' },
]);
</script>
