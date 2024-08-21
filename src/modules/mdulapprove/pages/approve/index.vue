<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/approve/create"
          icon="i-heroicons-plus-circle">ปริ้นใบรายงาน</UButton>
        <UButton to="/approve/create"
          icon="i-heroicons-plus-circle">ปริ้นใบปะหน้า</UButton>
        <UButton to="/approve/create"
          icon="i-heroicons-plus-circle">นำเข้าเอกสารที่ตรวสอบ</UButton>
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
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/approve/${item.id}`);
  }
</script>
