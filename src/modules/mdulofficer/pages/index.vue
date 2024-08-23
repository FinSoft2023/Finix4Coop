<template>
  <div>
    <h1>(Officer) Index Page</h1>
    <NuxtLink to="/officer">officer</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Officer', to: '/officer' },
  { label: 'Create', to: '/officer/create' },
]);
</script>
