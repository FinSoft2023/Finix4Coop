<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UButton to="/transferonline/create"
        icon="i-mdi-instant-deposit"
        block>ฝากเงิน</UButton>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :columns
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.root');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/transferonline/${item.id}`);
  }

  const columns = [{
    key: 'amount',
    label: 'ยอดเงินฝาก'
  },];
</script>
