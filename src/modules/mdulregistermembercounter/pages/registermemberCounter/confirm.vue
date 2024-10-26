<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>     
      <BPartButtonsBand>
        <UButton
          to="/registermemberCounter/scan/qrPrint"
          >ปริ้นรายงาน</UButton
        >
        <UButton
          to="/registermemberCounter/scan/qrPrint"
          >ปริ้นเอกสารหักเงินเดือน</UButton
        >
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อสมัครใหม่ทั้งหมด</BPartSectionTitle>

      <FTableOfTxs @selection-changed="selectItem" :data :pending />
      <FSelectable></FSelectable>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.confirm');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}

</script>
