<template>
  <div>
    <h1>(Loansharemember) Index Page</h1>
    <NuxtLink to="/loansharemember">loansharemember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Loansharemember', to: '/loansharemember' },
  { label: 'Create', to: '/loansharemember/create' },
]);
</script>
