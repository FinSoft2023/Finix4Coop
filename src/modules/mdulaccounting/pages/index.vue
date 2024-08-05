<template>
  <div>
    <h1>(Accounting) Index Page</h1>
    <NuxtLink to="/accounting">accounting</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Accounting', to: '/accounting' },
  { label: 'Create', to: '/accounting/create' },
]);
</script>
