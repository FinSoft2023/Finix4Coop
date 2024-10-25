<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton
          to="/registermemberCounter/create"
          icon="i-heroicons-plus-circle"
          >เรียกคิว</UButton
        >
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxs2 @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}
</script>
