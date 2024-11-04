<template>
  <BSideNavPage>
    <UPageBody>
      <div>
        <h1>(Guarantee) Index Page</h1>
        <NuxtLink to="/guarantee">guarantee</NuxtLink>
      </div>
      <UPageGrid>
        <UPageCard
          v-for="(module, index) in modules"
          :key="index"
          v-bind="module"
        >
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageBody>
  </BSideNavPage>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Guarantee', to: '/guarantee' },
  { label: 'Create', to: '/guarantee/create' },
]);

const modules = [
  {
    title: 'เรียกคิว',
    description: 'บริการสมาชิก',
    to: '/guarantee/create',
    icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ปิดเคาน์เตอร์',
    description: 'ปิดยอดเคาน์เตอร์',
    to: '/guarantee/listmenu',
    icon: 'i-heroicons-printer',
  },
  {
    title: 'ฌาปนกิจ',
    description: 'สถานะรายการ',
    to: '/guarantee',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'ส่งตรวจข้อมูลให้ฝ่ายการเงิน',
    description: 'สถานะรายการ',
    to: '/guarantee/closed',
    icon: 'i-mdi-file-report-outline',
  },
];
</script>
