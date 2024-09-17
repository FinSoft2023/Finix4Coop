<template>
  <div>
    <h1>(Loanordinarymember) Index Page</h1>
    <NuxtLink to="/loanordinarymember">loanordinarymember</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Loanordinarymember', to: '/loanordinarymember' },
  { label: 'Create', to: '/loanordinarymember/create' },
]);
</script>
