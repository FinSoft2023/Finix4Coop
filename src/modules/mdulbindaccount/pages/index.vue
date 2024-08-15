<template>
  <div>
    <h1>(Bindaccount) Index Page</h1>
    <NuxtLink to="/bindaccount">bindaccount</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Bindaccount', to: '/bindaccount' },
  { label: 'Create', to: '/bindaccount/create' },
]);
</script>
