<template>
  <div>
    <h1>(Tracking) Index Page</h1>
    <NuxtLink to="/tracking">tracking</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Tracking', to: '/tracking' },
  { label: 'Create', to: '/tracking/create' },
]);
</script>
