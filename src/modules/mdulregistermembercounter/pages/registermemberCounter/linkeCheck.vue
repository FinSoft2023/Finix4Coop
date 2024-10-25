<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>       
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อรอตรวจสอบ</BPartSectionTitle>

      <FTableOfTxs2 @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.linkeCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}
</script>
