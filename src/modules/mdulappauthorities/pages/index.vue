<template>
  <div>
    <h1>(Appauthorities) Index Page</h1>
    <NuxtLink to="/appauthorities">appauthorities</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Appauthorities', to: '/appauthorities' },
  { label: 'Create', to: '/appauthorities/create' },
]);
</script>
