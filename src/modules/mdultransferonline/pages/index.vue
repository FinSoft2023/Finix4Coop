<template>
  <BPartPageBody>
    <DItemGrid col="x3">
      <UPageCard v-for="(module, index) in modules"
        :key="index"
        class="text-red-500"
        v-bind="module">
        <template #description>
          <span class="line-clamp-2 ">{{ module.description }}</span>
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

const modules = [{
  title: 'ยืนยันตัวตน',
  to: '/transferonline/create/sacncenterque',
  icon: 'i-mdi-account-lock-outline'
}, {
  title: 'เงินฝาก',
  to: !accNo.value ? '' : '/transferonline',
  icon: 'i-heroicons-wallet'
}, {
  title: 'กู้ฉุกเฉิน',
  to: !memcode.value ? '' :  '/loanfast',
  icon: 'i-mdi-cash-fast'
}, {
  title: 'ข้อมูลสมาชิก',
  to: '/',
  icon: 'i-mdi-user-card-details-outline'
}, {
  title: 'สัญญากู้',
  to: '/',
  icon: 'i-mdi-file-document'
}, {
  title: 'ลงทะเบียน',
  to: '/regqr',
  icon: 'i-mdi-file-document'
}, {
  title: 'ฌาปนกิจ',
  to: '/',
  icon: 'i-mdi-account-child'
}, {
  title: 'รายการหักเดือนล่าสุด',
  to: '',
  icon: 'i-mdi-report-box-outline'
}, {
  title: 'เงินปันผลและเฉลี่ยคืน',
  to: '',
  icon: 'i-heroicons-currency-dollar  '
}]
</script>
