<template>
  <DTablesta2 :data="data" :columns :pending="pending" />
</template>

<script setup lang="ts" generic="T extends { id: any; [key: string]: any }">
const selected = defineModel<T[] | undefined>({
  // default: [],
});
const props = defineProps<{
  data: T[];
  pending?: boolean;
}>();

const columns = [
  {
    key: 'id',
    label: 'ลำดับที่',
  },
  {
    key: 'accNo',
    label: 'รหัส',
  },
  {
    key: 'name',
    label: 'ชื่อ',
  },
  {
    key: 'txcode',
    label: 'สกุล',
  },
  {
    key: 'transferChannel',
    label: 'ตำแหน่ง',
  },
  {
    key: 'amount',
    label: 'เงินเดือน',
  },
  {
    key: 'row-actions',
    label: 'สถานะ',
  },
];
</script>
