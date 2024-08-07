<template>
  <BSideNavPage>
    <UPageBody>
      <UPageGrid>
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageBody>

    <!-- <template #side>
      <UPageLinks title="Discover"
        class="pt-0 lg:pt-8"
        :links="[{ icon: 'i-heroicons-pencil-square', label: 'Edit this page' }, { icon: 'i-heroicons-star', label: 'Star on GitHub', to: 'https://github.com/nuxt/ui', target: '_blank' }, { icon: 'i-heroicons-book-open', label: 'Nuxt documentation', to: 'https://nuxt.com', target: '_blank' }]" />
    </template> -->
  </BSideNavPage>
</template>

<script setup lang="ts">
  setNavLinks([{
    label: 'เรียกคิว',
    icon: 'i-heroicons-square-3-stack-3d-20-solid',
    to: '/queues'
  }, {
    label: 'รายการคำขอ ฝาก-ถอน',
    icon: 'i-heroicons-book-open',
    to: '/withdrawals'
  }, {
    label: 'เช็คเงินสด',
    icon: 'i-heroicons-map',
    to: '/cheques'
  }, {
    label: 'การเงิน',
    icon: 'i-heroicons-map',
    to: '/financials'
  }, {
    label: 'ปริ้นรายงาน',
    icon: 'i-heroicons-map',
    to: '/financials/rptPaid'
  }, {
    label: 'บัญชี',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/accounting'
  }, {
    label: 'สมัครสมาชิก',
    icon: 'i-mdi-face-recognition',
    to: '/regmembers'
  }, {
    label: 'Monitoring',
    icon: 'i-heroicons-rocket-launch',
    to: '/regmembers/txmonitor',
    target: '_blank'
  }]);

const modules = [{
  title: 'จัดการเช็ค',
  description: 'ดำเนินการปริ้นเช็ค/สั่งจ่ายเช็ค/จ่ายเช็ค',
  to: '/cheques',
  icon: 'i-mdi-cheque-book'
}, {
  title: 'บันทึกการฝาก-ถอน',
  description: 'อนุมัติรายการจ่ายเช็ค/โอนเงินให้สมาชิก',
  to: '/financials',
  icon: 'i-mdi-file-report-outline'
}, {
  title: 'พิมพ์รายงาน',
  description: 'รายการฝาก-ถอนประจำวัน/ปิดยอดส่งเรื่องให้กับบัญชี',
  to: '/financials/rptPaid',
  icon: 'i-heroicons-printer'
}]
</script>