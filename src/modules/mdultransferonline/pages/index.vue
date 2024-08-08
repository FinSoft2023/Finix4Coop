<template>
  <BPartPageBody>
    <DItemGrid col="x3">
      <UPageCard v-for="(module, index) in modules"
        :key="index"
        v-bind="module">
        <template #description>
          <span class="line-clamp-2 ">{{ module.description }}</span>
        </template>
      </UPageCard>
    </DItemGrid>

  </BPartPageBody>

</template>

<script setup
  lang="ts">
  const { setNavLinks } = useThemeSettings();
  setNavLinks([
    { label: 'Transferonline', to: '/transferonline' },
    { label: 'Create', to: '/transferonline/create' },
  ]);

  const modules = [{
    title: 'ข้อมูลสมาชิก',
    to: '/',
    icon: 'i-mdi-user-card-details-outline'
  }, {
    title: 'เงินฝาก',
    to: '/transferonline',
    icon: 'i-heroicons-wallet'
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
    title: 'เงินผปันผลและเฉลี่ยคืน',
    to: '',
    icon: 'i-heroicons-currency-dollar  '
  }]
</script>
