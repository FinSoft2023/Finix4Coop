<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/withdrawals/create"
          icon="i-heroicons-plus-circle">รับคิว</UButton>
        <UButton to="/withdrawals/create/close"
          icon="i-heroicons-x-circle">ปิดยอดเคาน์เตอร์</UButton>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.completed');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet({ 'fltr-val': 'completed' });


function selectItem(item: any) {
  navigateTo(`/withdrawals/${item.id}`);
}
</script>
