<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <!-- <UButton to="/transfermoney/create" icon="i-heroicons-plus-circle"
          >New</UButton
        > -->
        <UButton to="/transfermoney/active/"
        icon="i-mdi-auto-pay">โอนเงิน</UButton>        
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>กู้ฉุกเฉิน</BPartSectionTitle>
      <FSelectable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้หุ้น</BPartSectionTitle>
      <FSelectable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้สามัญ</BPartSectionTitle>
      <FSelectable @selection-changed="selectItem" :data :pending />
      <BPartSectionTitle>กู้พิเศษ</BPartSectionTitle>
      <FSelectable @selection-changed="selectItem" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/transfermoney/${item.id}`);
}
</script>
