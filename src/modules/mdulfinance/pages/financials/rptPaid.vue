<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <!-- <UButton to="/financials/create" icon="i-heroicons-plus-circle"
          >New</UButton
        > -->
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
  const pageDef = useActiveModulePage('list.rptPaid');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'payout' });
  

  function selectItem(item: any) {
    navigateTo(`/financials/${item.id}`);
  }
  useSmartTabs([
    {
      label: 'จ่ายเช็ค - โอนเงินเสร็จสิ้น',
      to: '/financials/rptPaid',
    },
    {
      label: 'รายงาน ณ สิ้นวัน',
      to: '/financials/rptDaily',
    },
  ]);
</script>
