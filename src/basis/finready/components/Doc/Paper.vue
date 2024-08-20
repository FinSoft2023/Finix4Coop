<template>
  <div>
    <div v-if="more"
      class="pagebreak print:mt-0 mt-4"></div>
    <div class="paperDoc w-[210mm] h-[297mm] p-[5mm] print:p-0 print:m-0 mx-auto bg-white"
      :class="[pageClass]">
      <slot></slot>     
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ more?: boolean }>(), {
  more: false,
});

const pageClass = computed(() => (props.more ? 'dark:text-gray-900 print:m-0 mt-4 print:page-break-before' : ''));
</script>

<style scoped>
.paperDoc {
  position: relative;
}

.bottom-right {
  position: absolute;
  right: 5mm;
  bottom: 5mm;
  text-align: right;
}
</style>
