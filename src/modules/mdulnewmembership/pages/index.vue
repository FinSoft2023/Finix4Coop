<template>
  <div>
    <h1>(Membership) Index Page</h1>
    <NuxtLink to="/membership">membership</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Membership', to: '/membership' },
  { label: 'Create', to: '/membership/create' },
]);
</script>
