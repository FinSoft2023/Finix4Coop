<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/financials/printDoc"
          icon="i-heroicons-printer">ปริ้นเอกสาร</UButton>
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

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.root');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/financials/${item.id}`);
  }

  useSmartTabs([
    {
      label: 'รายการคำอนุมัติ',
      to: '/financials',
    },
    {
      label: 'รายการเตรียมรอจ่าย',
      to: '/financials/active',
    },
  ]);
</script>
