<template>
  <div>
    <h1>(Loangeneralmember) Index Page</h1>
    <NuxtLink to="/loangeneralmember">loangeneralmember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Loangeneralmember', to: '/loangeneralmember' },
  { label: 'Create', to: '/loangeneralmember/create' },
]);
</script>
