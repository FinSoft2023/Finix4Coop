<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="/registermemberCounter/linkeCheck"
          icon="i-heroicons-plus-circle"
          >ยืนยัน</UButton
        >
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อที่ต้องการส่ง</BPartSectionTitle>
      <UCard>
        <FTableOfTxs @selection-changed="selectItem" :data :pending />
      </UCard>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.confrimCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}
</script>
