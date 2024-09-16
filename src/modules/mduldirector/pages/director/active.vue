<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/director/printsheet"
          icon="i-heroicons-plus-circle">ปริ้นใบประหน้า</UButton>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>กู้ฉุกเฉิน</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :pending />

      <BPartSectionTitle>กู้หุ้น</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :pending />

      <BPartSectionTitle>กู้สามัญ</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.active');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/director/${item.id}`);
}
</script>
