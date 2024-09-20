<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/transfermoney/qrcodeloanfast/"
        icon="i-mdi-auto-pay">สร้าง QR Code โอนเงิน</UButton>        
      </BPartButtonsBand>

      <BPartSectionTitle>กู้ฉุกเฉิน</BPartSectionTitle>
      <DTable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้หุ้น</BPartSectionTitle>
      <DTable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้สามัญ</BPartSectionTitle>
      <DTable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้พิเศษ</BPartSectionTitle>
      <DTable @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">

const pageDef = useActiveModulePage('list.active');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/transfermoney/${item.id}`);
}
</script>
