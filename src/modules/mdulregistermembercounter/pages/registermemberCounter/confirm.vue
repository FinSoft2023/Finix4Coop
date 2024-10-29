<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <div class="flex justify-end gap-8">
          <UButton to="/registermemberCounter/qrPrint/qrPrint"
            >ปริ้นรายงาน</UButton
          >
          <UButton to="/registermemberCounter" color="gray">ยกเลิก</UButton>
        </div>
        <!-- <UButton to="/registermemberCounter/linkeCheck"
          >ปริ้นเอกสารหักเงินเดือน</UButton
        > -->
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อสมัครใหม่ทั้งหมด</BPartSectionTitle>
      <UCard>
        <FTableOfTxs @selection-changed="selectItem" :data :pending />
      </UCard>
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
