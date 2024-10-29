<template>
  <DTestTable :data="data"
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
  key: 'Amount',
  label: 'Amount'
}, {
  key: 'Amountsent',
  label: 'Amountsent'
}, {
  key: 'date',
  label: 'Date'
}, {
  key: 'id',
  label: 'Id'
},{
  key: 'row-actions',
}];
</script>
