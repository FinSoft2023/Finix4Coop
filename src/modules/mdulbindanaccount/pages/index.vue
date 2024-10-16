<template>
  <div>
    <!-- <h1>(Bindanaccount) Index Page</h1>
    <NuxtLink to="/bindanaccount">bindanaccount</NuxtLink> -->
    <div class="flex justify-center mt-8">
      <Icon
        class="w-20 h-20 text-green-400"
        name="i-mdi-user"
      ></Icon>
    </div>
    <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white mt-4">
      สมัครสมาชิกใหม่ใช่หรือไม่?
    </h2>
    <h3 class="text-center text-gray-500 dark:text-gray-300 mt-4">
      ขอเราทำความรู้จักคุณหน่อยได้ไหม
    </h3>
    <div class="flex justify-center mt-8">
      <UButton to="/bindanaccount/create">ยินยอม</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Bindanaccount', to: '/bindanaccount' },
  { label: 'Create', to: '/bindanaccount/create' },
]);
</script>
