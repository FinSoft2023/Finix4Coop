<template>
  <BSideNavPage>
    <UPageBody>
      <!-- <div>
        <h1>(Guarantee) Index Page</h1>
        <NuxtLink to="/guarantee">guarantee</NuxtLink>
      </div> -->
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
    title: 'ดาวโหลดไฟล์เอกสาร',
    description: 'ดาวโหลดไฟล์เอกสาร',
    to: '/guarantee/closed',
    // icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ปริ้นรายงาน',
    description: 'ปริ้นรายงาน',
    to: '/guarantee/print1/print1',
    // icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ใบขอเบิก',
    description: 'ปริ้นเอกสารขอเบิก',
    to: '/guarantee/detail/detail',
    // icon: 'i-heroicons-printer',
  },
  {
    title: 'ใบขอโอนเงิน',
    description: 'สถานะรายการ',
    to: '/guarantee/detail/detail',
    // icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'โอนเงินคืน',
    description: 'รายชื่อไม่ผ่านการอนุมัติ',
    to: '/guarantee/listmenu',
    // icon: 'i-mdi-file-report-outline',
  },
];
</script>
