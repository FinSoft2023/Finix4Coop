<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="/registermemberCounter/linkeCheck" target="_blank" rel="noopener noreferrer"
          icon="i-heroicons-plus-circle"
          >แชร์ลิงค์</UButton
        >
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อที่ต้องการส่ง</BPartSectionTitle>
      <UCard>
        <FTableOfTxs2 @selection-changed="selectItem" :data :pending />
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
