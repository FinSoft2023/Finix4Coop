<template>
  <UFormGroup>
    <USelectMenu @update:model-value="handleSelect"
      :model-value="selected"
      :loading="pending"
      :searchable="search"
      :debounce="389"
      clear-search-on-close
      :icon="icon"
      :placeholder="placeholder" />
    <!-- <USelectMenu v-model="selected"
      :loading="loading"
      :searchable="search"
      :option-attribute="optionField"
      :by="valueField"
      :debounce="389"
      clear-search-on-close
      :icon="icon"
      :placeholder="placeholder" /> -->
  </UFormGroup>
</template>

<script setup lang="ts">
const inputModel = defineModel<string>();
const props = defineProps<{
  icon?: string;
  placeholder?: string;
  choices?: string;
  labelField?: string;
  valueField?: string;
}>();
const emits = defineEmits(['update:modelValue']);

const { choicesList, pending, search } = listAllChoicesAvailable(props.choices ?? '', { labelField: props.labelField, valueField: props.valueField });

const selected = computed(() => {
  const inputValue = inputModel.value;
  if (!inputValue) {
    return {};
  }
  const result = choicesList.value.find((choice: any) => choice.value === inputValue);
  if (!result) {
    return {};
  }
  return result;
});

function handleSelect(select: any) {
  const matched = choicesList.value.find((choice: any) => choice.value === select.value);
  if (!matched) {
    inputModel.value = undefined;
  } else {
    inputModel.value = matched.value;
  }
}
</script>