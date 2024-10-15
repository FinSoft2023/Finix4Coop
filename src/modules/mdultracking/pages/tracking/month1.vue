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
      <p class="font-bold text-red-500">ค้างชำระ</p>
      <DTable @selection-changed="selectItem" :data :pending />
      <p class="font-bold text-green-500">ชำระแล้ว</p>
      <DTable @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.month1');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/tracking/${item.id}`);
}
</script>
