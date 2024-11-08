<template>
  <div class="flex justify-end">
    <UPagination v-model="page" :page-count="5" :total="items.length" />
  </div>
</template>
<script setup lang="ts">
const page = ref(1);
const items = ref(Array(55));
</script>
