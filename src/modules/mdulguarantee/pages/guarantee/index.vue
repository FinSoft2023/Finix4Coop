<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <UPageCard
          v-for="(module, index) in modules"
          :key="index"
          v-bind="module"
        >
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </div>
      <BPartButtonsBand>
        <template #next>
          <!-- <UButton icon="i-heroicons-plus-circle"
            >ดาวโหลดไฟล์เอกสาร</UButton
          > -->
          <!-- <DSmartTabs /> -->
           
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxs4 @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
    <template #side>
      <!-- <UButton icon="i-heroicons-plus-circle"
            >ดาวโหลดไฟล์เอกสาร</UButton
          > -->
      <!-- <DSmartTabs /> -->
      <UHeaderPopoverLinks :links="links" />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/guarantee/${item.id}`);
}

const links = [
  {
    label: 'ดาวโหลดไฟล์เอกสาร',
    description: 'ดาวโหลดไฟล์เอกสาร',
    to: '/guarantee/closed',
    icon: 'i-mdi-cheque-book',
  },
  {
    label: 'ปริ้นรายงาน',
    description: 'ปริ้นรายงาน',
    to: '/guarantee/print1/print1',
    icon: 'i-mdi-cheque-book',
  },
  {
    label: 'ใบขอเบิก',
    description: 'ปริ้นเอกสารขอเบิก',
    to: '/guarantee/detail/detail',
    icon: 'i-heroicons-printer'
  },
  {
    label: 'ใบขอโอนเงิน',
    description: 'สถานะรายการ',
    to: '/guarantee/detail/detail',
    icon: 'i-mdi-file-report-outline',
  },
  {
    label: 'โอนเงินคืน',
    description: 'รายชื่อไม่ผ่านการอนุมัติ',
    to: '/guarantee/listmenu',
    icon: 'i-mdi-file-report-outline',
  },
];
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
<style scoped>
.small-icon .icon {
  font-size: 1rem; /* Adjust this value as needed */
}
</style>
