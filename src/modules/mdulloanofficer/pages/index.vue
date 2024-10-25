<template>
  <div>
    <h1>(Loanofficer) Index Page</h1>
    <NuxtLink to="/loanofficer">loanofficer</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Loanofficer', to: '/loanofficer' },
  { label: 'Create', to: '/loanofficer/create' },
]);
</script>
