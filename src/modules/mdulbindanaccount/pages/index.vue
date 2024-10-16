<template>
  <div>
    <h1>(Bindanaccount) Index Page</h1>
    <NuxtLink to="/bindanaccount">bindanaccount</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Bindanaccount', to: '/bindanaccount' },
  { label: 'Create', to: '/bindanaccount/create' },
]);
</script>
