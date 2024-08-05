<template>
  <span>{{ formattedAmount }}</span>
</template>

<script setup
  lang="ts">
  import { computed, defineProps } from 'vue';

  const props = defineProps<{
    amount: number;
  }>();


  const formatCurrency = (value: number): string => {
    if (value === null || value === undefined) {
      return '0.00';
    }
    return value.toLocaleString('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };


  const formattedAmount = computed(() => {
    return formatCurrency(props.amount);
  });
</script>
