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
    to: '/registermemberCounter/create',
    icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ปิดยอด',
    description: 'ปิดยอดเคาน์เตอร์',
    to: '/registermemberCounter',
    icon: 'i-heroicons-printer',
  },
  {
    title: 'ส่งตรวจข้อมูล',
    description: 'ข้อมูลรอตรวจสอบ',
    to: '/registermemberCounter/listCheck',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'ปริ้นรายงาน',
    description: 'ปริ้นรายงานสมาชิกใหม่',
    to: '/registermemberCounter/confirm',
    icon: 'i-mdi-file-report-outline',
  },
];
</script>

