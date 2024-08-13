<template>
  <DTable :data="data"
    :columns
    :pending="pending" />
</template>

<script setup
  lang="ts"
  generic="T extends { id: any, [key: string]: any }">
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
    key: 'txcode',
    label: 'ประเภท'
  }, {
    key: 'name',
    label: 'ชื่อ-สกุล'
  }, {
    key: 'amount',
    label: 'ขอกู้'
  }, {
    key: 'amount',
    label: 'งวด'
  },{
    key: 'amount',
    label: 'ยอดผ่อน'
  }, {
    key: 'bankAccount',
    label: 'บัญชีธนาคาร'
  }, {
    key: 'forperson',
    label: 'ผู้รับอำนาจรับเงินแทน'
  }, {
    key: 'counter',
    label: 'เคาน์เตอร์'
  }, {
    key: 'row-actions',
  }];
</script>
