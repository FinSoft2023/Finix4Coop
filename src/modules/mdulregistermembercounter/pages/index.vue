<template>
  <BSideNavPage>
    <UPageBody>
      <UPageGrid>
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
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
  { label: 'RegistermemberCounter', to: '/registermemberCounter' },
  { label: 'Create', to: '/registermemberCounter/create' },
]);

const modules = [
  {
    title: 'เรียกคิว',
    description: 'บริการสมาชิก',
    to: '/registermemberCounter',
    icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ส่งตรวจข้อมูล',
    description: 'ข้อมูลรอตรวจสอบ',
    to: '/registermemberCounter/listCheck',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'ปิดยอด',
    description: 'ปิดยอดเคาน์เตอร์',
    to: '/registermemberCounter/confirm',
    icon: 'i-heroicons-printer',
  },
];
</script>

