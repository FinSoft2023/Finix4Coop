<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="#"
          icon="i-heroicons-plus-circle"
          >บันทึกข้อมูล</UButton
        >
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>อนุมัติแล้ว</BPartSectionTitle>

      <FTableOfTxs2 @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.stateCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}
</script>
