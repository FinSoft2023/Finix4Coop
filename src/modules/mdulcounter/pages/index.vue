<template>
  <div>
    <h1>(Counter) Index Page</h1>
    <NuxtLink to="/counter">counter</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Counter', to: '/counter' },
  { label: 'Create', to: '/counter/create' },
]);
</script>
