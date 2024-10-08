<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/loanfastmember/create">ขอกู้ฉุกเฉิน</UButton>
        <!-- <template #next>
          <DSmartTabs />
        </template> -->
      </BPartButtonsBand>

      <BPartSectionTitle>รายการขอกู้ล่าสุด</BPartSectionTitle>
      <LineLoann></LineLoann>
      <!-- <UCard>
        <h1>วันที่ :16/09/2567</h1>
        <p>วงเงินที่อนุมัติ : 25,000 บาท</p>
        <p>งวดทั้งหมด : 12</p>
        <p>ผ่อนชำระ :2,083 บาท</p></UCard
      > -->

      <!-- <FTableOfTxs @selection-changed="selectItem" :data :pending /> -->
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/loanfastmember/${item.id}`);
}
</script>
