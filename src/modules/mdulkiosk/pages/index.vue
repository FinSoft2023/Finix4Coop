<template>
  <div>
    <h1>(Kiosks) Index Page</h1>
    <NuxtLink to="/kiosks">kiosks</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Kiosks', to: '/kiosks' },
  { label: 'Create', to: '/kiosks/create' },
]);
</script>
