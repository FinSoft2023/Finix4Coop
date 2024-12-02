<template>
  <div>
    <h1>(Membershipcounter) Index Page</h1>
    <NuxtLink to="/membershipcounter">membershipcounter</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Membershipcounter', to: '/membershipcounter' },
  { label: 'Create', to: '/membershipcounter/create' },
]);
</script>
