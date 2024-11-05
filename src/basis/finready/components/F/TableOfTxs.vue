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
  key: 'id',
  label: 'ลำดับที่'
}, {
  key: 'name',
  label: 'ชื่อ-สกุล'
}, {
  key: 'membercode',
  label: 'รหัสสมาชิก'
},{
  key: 'transaction',
  label: 'วัตถุประสงค์'
},{
  key: 'row-actions',
}];
</script>
