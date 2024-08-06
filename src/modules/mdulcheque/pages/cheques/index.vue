<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>
      <FTableOfTxs @selection-changed="selectItem"
        :data
        :pending />
      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>
      <DTable @selection-changed="selectItem"
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
  const { data, error, pending } = apiGet({ 'fltr-val': 'closecounter' });

  function selectItem(item: any) {
    navigateTo(`/cheques/${item.id}`);
  }
</script>
