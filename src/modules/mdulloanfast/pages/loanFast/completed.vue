<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/loanFast/printsheet"
        icon="i-heroicons-printer">ปริ้นใบปะหน้า</UButton>
        <UButton to="/loanFast/create/close"
          icon="i-heroicons-x-circle">ปิดยอด</UButton>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxsLoan @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.completed');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/loanFast/${item.id}`);
  }
</script>
