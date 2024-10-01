<template>
  <div>
    <h1>(DeductionResults) Index Page</h1>
    <NuxtLink to="/deductionResults">deductionResults</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'DeductionResults', to: '/deductionResults' },
  { label: 'Create', to: '/deductionResults/create' },
]);
</script>
