<template>
  <div>
    <h1>(Loanfastmember) Index Page</h1>
    <NuxtLink to="/loanfastmember">loanfastmember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Loanfastmember', to: '/loanfastmember' },
  { label: 'Create', to: '/loanfastmember/create' },
]);
</script>
