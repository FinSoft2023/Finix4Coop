<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/financials/printReport"
          icon="i-heroicons-printer">ปริ้นรายงาน</UButton>
        <UButton to="/financials/create/close"
          icon="i-mdi-invoice-text-send-outline">ส่งเรื่องให้บัญชี</UButton>
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
  const pageDef = useActiveModulePage('list.rptDaily');
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
