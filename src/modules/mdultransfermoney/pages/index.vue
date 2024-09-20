<template>
  <div>
    <h1>(Transfermoney) Index Page</h1>
    <NuxtLink to="/transfermoney">transfermoney</NuxtLink>   
    
  </div>
</template>

<script setup lang="ts">
const { setNavLinks } = useThemeSettings();
setNavLinks([
  { label: 'Transfermoney', to: '/transfermoney' },
  { label: 'Create', to: '/transfermoney/create' },
]);
const modules = [{
  title: 'กู้ฉุกเฉิน',
  description: 'ดำเนินการนพรุจ ชูกุลสิทธิธรรม/สั่งจ่ายเช็ค/จ่ายเช็ค',
  to: '/cheques',
  icon: 'i-mdi-cheque-book'
}, {
  title: 'กู้ทั่วไป',
  description: 'อนุมัติรายการจ่ายเช็ค/โอนเงินให้สมาชิก',
  to: '/financials',
  icon: 'i-mdi-file-report-outline'
}, {
  title: 'กู้หุ้น',
  description: 'รายการฝาก-ถอนประจำวัน/ปิดยอดส่งเรื่องให้กับบัญชี',
  to: '/financials/rptPaid',
  icon: 'i-heroicons-printer'
}]
</script>
