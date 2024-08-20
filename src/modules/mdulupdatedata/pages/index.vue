<template>
  <div>
    <h1>(Updatedata) Index Page</h1>
    <NuxtLink to="/updatedata">updatedata</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Updatedata', to: '/updatedata' },
  { label: 'Create', to: '/updatedata/create' },
]);
</script>
