<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UButton to="/transferonline/create"
        icon="i-mdi-instant-deposit"
        block>ฝากเงิน</UButton>

      <UCard>
        สมาชิกเลขที่ {{ memcode }}
        ยอดเงินฝาก (บาท)
        <p>{{ amount }}</p>
      </UCard>
      
      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :columns
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// const store = useModuleStore();
// const { setdata } = storeToRefs(store);

// if (setdata.value.memberId === "") {
//   navigateTo('/');
// }

const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const memSto = useLinkMemberStore();
const { memcode, amount, data } = storeToRefs(memSto);

const { apiGet } = useHostApi(pageDef);
const { error, pending } = apiGet({ 'fltr-val': memcode.value });

function selectItem(item: any) {
  // navigateTo(`/transferonline/${item.id}`);
}

const columns = [{
  key: 'amount',
  label: 'ยอดเงินฝาก'
}, {
  key: 'txat',
  label: 'เวลาทำรายการ'
},];
</script>
