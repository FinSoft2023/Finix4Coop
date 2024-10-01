<template>
  <div>
    <h1>(Deduction) Index Page</h1>
    <NuxtLink to="/deduction">deduction</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Deduction', to: '/deduction' },
  { label: 'Create', to: '/deduction/create' },
]);
</script>
