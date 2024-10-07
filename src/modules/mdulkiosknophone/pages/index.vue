<template>
  <div>
    <h1>(Transactionkiosk) Index Page</h1>
    <NuxtLink to="/Transactionkiosk">Transactionkiosk</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Transactionkiosk', to: '/Transactionkiosk' },
  { label: 'Create', to: '/Transactionkiosk/create' },
]);
</script>
