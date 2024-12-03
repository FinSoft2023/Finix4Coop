<template>
  <div>
    <h1></h1>
    <!-- <NuxtLink to="/appauthorities">appauthorities</NuxtLink> -->
    <UButton to="/appauthorities">Scan</UButton>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Appauthorities', to: '/appauthorities' },
  { label: 'Create', to: '/appauthorities/create' },
]);
</script>
