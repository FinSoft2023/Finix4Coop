<template>
  <div>
    <h1>(Transactionphone) Index Page</h1>
    <NuxtLink to="/Transactionphone">Transactionphone</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Transactionphone', to: '/Transactionphone' },
  { label: 'Create', to: '/Transactionphone/create' },
]);
</script>
