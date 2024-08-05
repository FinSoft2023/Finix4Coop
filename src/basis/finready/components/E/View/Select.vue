<template>
  <DInfoField :modelValue="selected"
    as-is />
</template>

<script setup lang="ts">
// TODO: Replace with actual implementation
import { bigDataLinkFactory } from 'bigplatdefibp';

const props = defineProps<{
  modelValue?: string;
  choices?: string;
}>();
const { getChoicesList } = bigDataLinkFactory();

const choiceName = props.choices;
if (!choiceName) {
  throw new Error('choicesDef is required');
}

const choicesList = getChoicesList(choiceName) ?? [];
async function search(query: string) {
  const result = choicesList.filter((choice: any) => {
    return choice.label.toLowerCase().includes(query.toLowerCase());
  });

  return result;
}

const selected = computed(() => {
  const noDataText = '';
  const inputValue = props.modelValue;
  if (!inputValue) {
    return noDataText;
  }
  const result = choicesList.find((choice: any) => choice.value === inputValue);
  if (!result) {
    return noDataText;
  }
  return result.label;
});
</script>