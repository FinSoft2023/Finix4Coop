<template>
  <div>
    <h1>(Inspection) Index Page</h1>
    <NuxtLink to="/inspection">inspection</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Inspection', to: '/inspection' },
  { label: 'Create', to: '/inspection/create' },
]);
</script>
