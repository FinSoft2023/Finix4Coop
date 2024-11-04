<template>
  <BSideNavPage>
    <UPageBody>
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
  { label: 'กดหก', to: '/registermemberCounter' },
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
    title: 'รายการสมัครสมาชิกใหม่',
    description: 'สถานะรายการ',
    to: '/registermemberCounter/listCheck',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'ส่งตรวจข้อมูลให้ฝ่ายการเงิน',
    description: 'สถานะรายการ',
    to: '/registermemberCounter',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'สินเชื่อ',
    description: 'สถานะรายการ',
    to: '/registermemberCounter/linkeCheck',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'กู้ฉุกเฉิน',
    description: 'สถานะรายการ',
    to: '/registermemberCounter/linkeCheck',
    icon: 'i-mdi-file-report-outline',
  },
  // {
  //   title: 'กู้พิเศษ',
  //   description: 'สถานะรายการ',
  //   to: '/registermemberCounter/linkeCheck',
  //   icon: 'i-mdi-file-report-outline',
  // },
];
</script>
