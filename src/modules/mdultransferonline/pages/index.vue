<template>
  <div>
    <h1>(Transferonline) Index Page</h1>
    <NuxtLink to="/transferonline">transferonline</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Transferonline', to: '/transferonline' },
  { label: 'Create', to: '/transferonline/create' },
]);
</script>
