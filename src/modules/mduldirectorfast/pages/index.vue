<template>
  <div>
    <h1>(Directorfast) Index Page</h1>
    <NuxtLink to="/directorfast">directorfast</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Directorfast', to: '/directorfast' },
  { label: 'Create', to: '/directorfast/create' },
]);
</script>
