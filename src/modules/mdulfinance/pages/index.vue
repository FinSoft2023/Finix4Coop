<template>
  <div>
    <h1>(Finances) Index Page</h1>
    <NuxtLink to="/financials">finances</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Finances', to: '/financials' },
  { label: 'Create', to: '/financials/create' },
]);
</script>
