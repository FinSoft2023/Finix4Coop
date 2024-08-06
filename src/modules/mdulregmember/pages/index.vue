<template>
  <div>
    <h1>(Regmembers) Index Page</h1>
    <NuxtLink to="/regmembers">regmembers</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'ลงทะเบียนผูกบัญชี', to: '/regmembers' },
  { label: 'ผูกบัญชี (ชั่วคราว)', to: '/regmembers/create' },
]);
</script>
