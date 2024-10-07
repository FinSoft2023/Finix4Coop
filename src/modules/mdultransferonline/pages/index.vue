<template>
  <BPartPageBody>
    <DItemGrid col="x3">
      <UPageCard v-for="(module, index) in modules"
        :key="index"
        class="text-red-500"
        v-bind="module">
        <template #description>
          <span class="line-clamp-2">{{ module.description }}</span>
        </template>
      </UPageCard>
    </DItemGrid>
  </BPartPageBody>
</template>

<script setup lang="ts">
const qrstore = useLinkMemberStore();
const { memcode, amount, accNo } = storeToRefs(qrstore);

const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Transferonline', to: '/transferonline' },
  { label: 'Create', to: '/transferonline/create' },
]);

// const modules = [
//   {
//     title: 'ข้อมูลสมาชิก',
//     to:'/transferonline/id/memberInformation',
//     icon: 'i-mdi-user-card-details-outline',
//   },
//   {
//     title: 'ยืนยันตัวตน',
//     to: '/transferonline/create/sacncenterque',
//     icon: 'i-mdi-account-lock-outline',
//   },
//   {
//     title: 'เงินฝาก',
//     to:'/transferonline',
//     icon: 'i-heroicons-wallet',
//   },
//   {
//     title: 'กู้ฉุกเฉิน',
//     to:'/loanfastmember',
//     icon: 'i-mdi-cash-fast',
//   },
//   {
//     title: 'สัญญากู้',
//     to:'/transferonline/id/loanContract',
//     icon: 'i-mdi-file-document',
//   },
//   {
//     title: 'ฌาปนกิจ',
//     to:'/transferonline/id/insurance',
//     icon: 'i-mdi-account-child',
//   },
//   {
//     title: 'รายการหักเดือนล่าสุด',
//     to:'/transferonline/id/debtPaymentReceipt',
//     icon: 'i-mdi-report-box-outline',
//   },
//   {
//     title: 'เงินปันผลและเฉลี่ยคืน',
//     to:'/transferonline/id/dividend',
//     icon: 'i-heroicons-currency-dollar  ',
//   },
// ];
const modules = [
  {
    title: 'ข้อมูลสมาชิก',
    to: '/transferonline/id/memberInformation',
    icon: 'i-mdi-user-card-details-outline',
  },
  {
    title: 'ยืนยันตัวตน',
    to: '/transferonline/create/sacncenterque',
    icon: 'i-mdi-account-lock-outline',
  },
  {
    title: 'เงินฝาก',
    to: !accNo.value ? '' : '/transferonline',
    icon: 'i-heroicons-wallet',
  },
  {
    title: 'กู้ฉุกเฉิน',
    to: !memcode.value ? '' : '/loanfastmember',
    icon: 'i-mdi-cash-fast',
  },
  {
    title: 'สัญญากู้',
    to: !accNo.value ? '' : '/transferonline/id/loanContract',
    icon: 'i-mdi-file-document',
  },
  {
    title: 'ฌาปนกิจ',
    to: !accNo.value ? '' : '/transferonline/id/insurance',
    icon: 'i-mdi-account-child',
  },
  {
    title: 'รายการหักเดือนล่าสุด',
    to: !accNo.value ? '' : '/transferonline/id/debtPaymentReceipt',
    icon: 'i-mdi-report-box-outline',
  },
  {
    title: 'เงินปันผลและเฉลี่ยคืน',
    to: !accNo.value ? '' : '/transferonline/id/dividend',
    icon: 'i-heroicons-currency-dollar  ',
  },
];
</script>
