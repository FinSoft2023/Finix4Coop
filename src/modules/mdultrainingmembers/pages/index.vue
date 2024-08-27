<template>
  <div>
    <h1>(Trainingmembers) Index Page</h1>
    <NuxtLink to="/trainingmembers">trainingmembers</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Trainingmembers', to: '/trainingmembers' },
  { label: 'Create', to: '/trainingmembers/create' },
]);
</script>
