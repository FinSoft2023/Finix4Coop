<template>
  <div>
    <h1>(Registermember) Index Page</h1>
    <NuxtLink to="/registermember">registermember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Registermember', to: '/registermember' },
  { label: 'Create', to: '/registermember/create' },
]);
</script>
