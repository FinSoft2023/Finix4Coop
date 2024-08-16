<template>
  <div>
    <h1>(Register) Index Page</h1>
    <NuxtLink to="/register">register</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Register', to: '/register' },
  { label: 'Create', to: '/register/create' },
]);
</script>
