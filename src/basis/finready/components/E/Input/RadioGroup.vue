<template>
  <URadioGroup v-model="inputModel"
    :options="choicesList"
    :legend="label" />
</template>

<script setup lang="ts">
const inputModel = defineModel<string>();
const props = defineProps<{
  label: string;
  // icon?: string;
  // placeholder?: string;
  choices?: string;
  labelField?: string;
  valueField?: string;
}>();
const emits = defineEmits(['update:modelValue']);

const { choicesList } = listAllChoicesAvailable(props.choices ?? '', { labelField: props.labelField, valueField: props.valueField });
</script>