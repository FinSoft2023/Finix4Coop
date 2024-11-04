<template>
  <UTable
    v-if="!selected"
    :rows="data ?? []"
    :loading="pending"
    :columns="columns"
    @select="select"
  >
    <template #row-actions-data="{ row }">
      <slot>
        <UBadge
          :ui="{ rounded: 'rounded-full' }"
          size="sm"
          color="sky"
          variant="solid"
          >รออนุมัติ</UBadge
        >
      </slot>
    </template>
  </UTable>
  <UTable
    v-else
    v-model="selected"
    :rows="data ?? []"
    :loading="pending"
    :columns="columns"
    @select="select"
  >
    <template #row-actions-data="{ row }">
      <slot>
        <UBadge
          :ui="{ rounded: 'rounded-full' }"
          size="sm"
          color="sky"
          variant="solid"
          >รออนุมัติ</UBadge
        >
      </slot>
    </template>
  </UTable>
</template>
<script setup lang="ts" generic="T extends { id: any; [key: string]: any }">
import { onMounted } from 'vue';

const selected = defineModel<T[] | undefined>({
  default: [],
});
const props = defineProps<{
  data: T[];
  pending?: boolean;
}>();
const emits = defineEmits(['selectionChanged']);

function select(row: T) {
  if (!selected.value) {
    emits('selectionChanged', row);
    return;
  }

  const index = selected.value!.findIndex((item) => item.id === row.id);
  if (index === -1) {
    selected.value!.push(row);
  } else {
    selected.value!.splice(index, 1);
  }
  emits('selectionChanged', row);
}

// Set selected to all items on initial load
onMounted(() => {
  if (props.data) {
    selected.value = [...props.data];
  }
});

// Define columns for the table
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
  // {
  //   key: 'row-actions',
  //   label: 'สถานะ',
  // },
];
</script>
