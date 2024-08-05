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
const emits = defineEmits(['selectionChanged']);

const columns = [{
  key: 'id',
  label: 'ลำดับที่'
}, {
  key: 'accountNumber',
  label: 'เลขบัญชี'
}, {
  key: 'accountName',
  label: 'ชื่อบัญชี'
}, {
  key: 'transactionType',
  label: 'ฝาก/ถอน'
}, {
  key: 'method',
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
