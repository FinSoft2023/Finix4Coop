<template>
  <div>
    <h1>(LoanFast) Index Page</h1>
    <NuxtLink to="/loanFast">loanFast</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'LoanFast', to: '/loanFast' },
  { label: 'Create', to: '/loanFast/create' },
]);
</script>
