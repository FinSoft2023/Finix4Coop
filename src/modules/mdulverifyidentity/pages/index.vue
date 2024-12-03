<template>
  <div>
    <h1>(Identificationcounter) Index Page</h1>
    <NuxtLink to="/Identificationcounter">Identificationcounter</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Identificationcounter', to: '/Identificationcounter' },
  { label: 'Create', to: '/Identificationcounter/create' },
]);
</script>
