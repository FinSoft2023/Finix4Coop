<template>
  <UContainer class="bg-gray-400 py-4 print:py-0">
    <UHeader :title>
      <template #right>
        <UButton @click="printDoc">Print</UButton>
        <UButton @click="$router.back">กลับ</UButton>
      </template>
    </UHeader>

    <slot></slot>

  </UContainer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), { title: 'Document (print)' });
const emits = defineEmits(['printed']);

function printDoc() {
  window.print();
  emits('printed');
}
</script>

<style>
@media print {
  header {
    display: none;
  }

  footer {
    display: none;
  }

  .paperDoc {
    margin: 0;
    padding: 0;
    /*
      border: initial;
      border-radius: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always; */
    print-color-adjust: exact;
  }

  /* .pagebreak {
    clear: both;
    page-break-after: always;
  } */

  /* #page {padding: none; margin: none; border: none; box-shadow: none;} */
}
</style>
