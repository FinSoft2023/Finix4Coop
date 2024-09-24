<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>


    <UButton to="/director"
      icon="i-heroicons-plus-circle">ยืนยันส่งจ่ายการเงิน</UButton>
    <template #next>
      <DSmartTabs />
    </template>

    <BPartSectionTitle>ส่งจ่ายกู้ฉุกเฉิน</BPartSectionTitle>

    <DTable @selection-changed="selectItem"
      :data
      :pending />

    <BPartSectionTitle>กู้หุ้น</BPartSectionTitle>

    <DTable @selection-changed="selectItem"
      :data
      :pending />
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.sendpayment');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/director/${item.id}`);
}
</script>
