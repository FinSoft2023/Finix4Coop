<template>
  <div>
    <h1>(Checkloanfast) Index Page</h1>
    <NuxtLink to="/checkloanfast">checkloanfast</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Checkloanfast', to: '/checkloanfast' },
  { label: 'Create', to: '/checkloanfast/create' },
]);
</script>
