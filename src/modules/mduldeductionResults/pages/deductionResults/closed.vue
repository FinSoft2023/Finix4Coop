<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/deductionResults/create" icon="i-heroicons-plus-circle"
          >New</UButton
        >
        <UButton to="/deductionResults" icon="i-heroicons-plus-circle"
          >บันทึกรายชื่อ</UButton
        >
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>
      <div class="flex justify-between">
        <p class="font-bold">ค้างชำระ</p>
        <p class="font-bold">จำนวน 2 คน / ยอดเงินที่ค้าง 4,500 บาท</p>
      </div>
      <DTable @selection-changed="selectItem" :data :pending />
      <div class="flex justify-between">
        <p class="font-bold">สามารถหักได้</p>
        <p class="font-bold">จำนวน 2 คน / ยอดเงินที่ค้าง 4,500 บาท</p>
      </div>
      <DTable @selection-changed="selectItem" :data :pending />
      
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.closed');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/deductionResults/${item.id}`);
}
</script>
