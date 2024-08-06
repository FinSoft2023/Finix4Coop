<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/regmembers/create"
          icon="i-heroicons-plus-circle">New</UButton>
        <a href="/api/regmembers/_by/txmonitor" target="_blank">
          <UButton icon="i-heroicons-inbox-arrow-down-20-solid"
            variant="outline">Download</UButton>
        </a>
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
const pageDef = useActiveModulePage('list.txmonitor');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/regmembers/${item.id}`);
}
</script>
