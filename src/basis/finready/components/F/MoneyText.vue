<template>
  <span>{{ amountInWords }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { convertToThaiBaht } from '@/utils/convertToThaiBaht';

const props = defineProps<{
  amount: number;
}>();

const amountInWords = computed(() => convertToThaiBaht(props.amount));
</script>
