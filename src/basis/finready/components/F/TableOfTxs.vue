<template>
  <DTable :data="data"
    :columns
    :pending="pending" />
</template>

<script setup lang="ts" generic="T extends { id: any, [key: string]: any }">
const selected = defineModel<T[] | undefined>({
  // default: [],
});
const props = defineProps<{
  data: T[],
  pending?: boolean,
}>();

const columns = [{
  key: 'row-id',
  label: 'ลำดับที่'
}, {
  key: 'accNo',
  label: 'เลขบัญชี'
}, {
  key: 'name',
  label: 'ชื่อบัญชี'
}, {
  key: 'txcode',
  label: 'ฝาก/ถอน'
}, {
  key: 'transferChannel',
  label: 'ช่องทาง'
}, {
  key: 'amount',
  label: 'จำนวนเงิน'
}, {
  key: 'counter',
  label: 'เคาน์เตอร์'
},{
  key: 'row-actions',
}];
</script>
