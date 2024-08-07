<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/accounting/printDay"
          icon="i-heroicons-printer">ปริ้นรายงาน</UButton>
          <UButton to="/accounting/create"
          icon="i-heroicons-x-circle">ปิดยอดรายวัน</UButton>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxs @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.root');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'account' });


  function selectItem(item: any) {
    navigateTo(`/accounting/${item.id}`);
  }
</script>
