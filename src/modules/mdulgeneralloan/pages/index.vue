<template>
  <div>
    <h1>(Generalloan) Index Page</h1>
    <NuxtLink to="/generalloan">generalloan</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Generalloan', to: '/generalloan' },
  { label: 'Create', to: '/generalloan/create' },
]);
</script>
