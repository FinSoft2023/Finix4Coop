<template>
  <div>
    <h1>(Trainmember) Index Page</h1>
    <NuxtLink to="/trainmember">trainmember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Trainmember', to: '/trainmember' },
  { label: 'Create', to: '/trainmember/create' },
]);
</script>
