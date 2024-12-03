<template>
  <div>
    <h1>(Queues) Index Page</h1>
    <NuxtLink to="/queues">queues</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Queues', to: '/queues' },
  { label: 'Create', to: '/queues/create' },
]);
</script>
