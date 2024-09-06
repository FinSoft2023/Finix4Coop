<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/regmembers/create" icon="i-heroicons-plus-circle"
          >New</UButton
        >
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable @selection-changed="selectItem" :data="members" :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { error, pending } = apiGet();
const txStore = useTxStore();
const { members } = storeToRefs(txStore);

function selectItem(item: any) {
  navigateTo(`/regmembers/${item.id}`);
}
</script>
