<template>
  <div>
    <h1>(Withdrawals) Index Page</h1>
    <NuxtLink to="/withdrawals">withdrawals</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Withdrawals', to: '/withdrawals' },
  { label: 'Create', to: '/withdrawals/create' },
]);
</script>
