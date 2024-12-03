<template>
  <div>
    <div v-for="index in limit"
      :key="index">
      <slot name="data"
        v-if="dataLen > 0 && index <= dataLen"
        :index="index"
        :item="data[index - 1]">
      </slot>
      <slot v-else
        :index="index">
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[];
  limit: number;
}>();

const dataLen = computed(() => props.data ? props.data.length : 0);
</script>