<template>
  <div>
    <h1>(Cheques) Index Page</h1>
    <NuxtLink to="/cheques">cheques</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Cheques', to: '/cheques' },
  { label: 'Create', to: '/cheques/create' },
]);
</script>
