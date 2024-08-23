<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        หน้าสำหรับ scan QR code
      </h2>
      <UForm @submit="handleUpdateData"
        :state="setdata" class="space-y-4">
        <p>เลขสมาชิก</p>
        <UInput v-model="setdata.memberId"></UInput>
        <p>เลขบัญชีออมทรัพย์พิเศษ</p>
        <UInput v-model="setdata.accountNo"></UInput>
        <UButton type="submit" variant="solid" block>ยืนยัน</UButton>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">

const store = useModuleStore();
const { setdata } = storeToRefs(store);


const handleUpdateData = () => {
//   const newData = {
//   memberId: '1',
//   accoutNo: '1234567890',
// };
//   setdata.value = newData;
  // console.log('data updated', setdata);
  navigateTo('/transferonline/create/success');

};
</script>
