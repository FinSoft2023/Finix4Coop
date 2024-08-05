<template>
  <UTable v-if="!selected"
    :rows="data ?? []"
    :loading="pending"
    @select="select"
    :columns="columns">
    <template #row-actions-data="{ row }">
      <slot>
        <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" />
      </slot>
    </template>
  </UTable>
  <UTable v-else
    v-model="selected"
    :rows="data ?? []"
    :loading="pending"
    @select="select"
    :columns="columns">
    <template #row-actions-data="{ row }">
      <slot>
        <UIcon name="i-heroicons-arrow-top-right-on-square-16-solid" />
      </slot>
    </template>
  </UTable>
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
  }];

  function select(row: T) {
    if (!selected.value) {
      emits('selectionChanged', row);
      return;
    }

    const index = selected.value!.findIndex((item) => item.id === row.id)
    if (index === -1) {
      selected.value!.push(row)
    } else {
      selected.value!.splice(index, 1)
    }
    emits('selectionChanged', row);
  }
</script>
