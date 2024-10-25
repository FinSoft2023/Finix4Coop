<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="#"
          icon="i-heroicons-plus-circle"
          >ส่งข้อมูลให้สหกรณ์</UButton
        >
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>อนุมัติแล้ว</BPartSectionTitle>

      <FTableOfTxs @selection-changed="addInformation" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.stateCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function addInformation(item: any) {
  navigateTo(`/registermemberCounter/create/addInformation`);
}
</script>
