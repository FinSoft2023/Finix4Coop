<template>
  <div>
    <h1>(Approve) Index Page</h1>
    <NuxtLink to="/approve">approve</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Approve', to: '/approve' },
  { label: 'Create', to: '/approve/create' },
]);
</script>
