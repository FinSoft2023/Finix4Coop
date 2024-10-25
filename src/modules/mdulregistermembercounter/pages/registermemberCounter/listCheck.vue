<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="/registermemberCounter/confrimCheck"
          icon="i-heroicons-plus-circle"
          >ส่งตรวจข้อมูล</UButton
        >
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อสมัครทั้งหมด</BPartSectionTitle>

      <FTableOfTxs @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.listCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}
</script>
