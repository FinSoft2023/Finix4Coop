<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        
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

<script setup lang="ts">
const pageDef = useActiveModulePage('list.completed');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/director/${item.id}`);
}
</script>
