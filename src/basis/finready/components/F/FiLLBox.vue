<template>
  <UIcon :name="iconName"
    class="inline-block align-middle" />
</template>

<script setup lang="ts">
const props = defineProps<{
  checked?: boolean;
}>();

const iconName = computed(() => {
  return props.checked ? 'i-mdi-checkbox-marked-outline' : 'i-mdi-checkbox-blank-outline';
});
</script>