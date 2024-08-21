<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <!-- <UButton to="/register/create"
          icon="i-heroicons-plus-circle">รับเรื่อง</UButton> -->
        <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">ยืนยันส่งเรื่องให้กับ รพ</UButton>
        <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">Export เอกสาร</UButton>

        <!-- <template #next>
          <DSmartTabs />
        </template> -->
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <NTableOfTxsListName @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.closed');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/register/${item.id}`);
  }
</script>
