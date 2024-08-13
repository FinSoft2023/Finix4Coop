<template>
  <div>
    <h1>(Director) Index Page</h1>
    <NuxtLink to="/director">director</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Director', to: '/director' },
  { label: 'Create', to: '/director/create' },
]);
</script>
