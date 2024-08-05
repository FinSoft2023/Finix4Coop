<template>
  <div>
    <h1>(Regmembers) Index Page</h1>
    <NuxtLink to="/regmembers">regmembers</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Regmembers', to: '/regmembers' },
  { label: 'Create', to: '/regmembers/create' },
]);
</script>
