<template>
  <div class="flex items-center space-x-4">
    <USkeleton v-if="icon"
      class="h-12 w-12"
      :ui="{ rounded: 'rounded-full' }" />
    <div class="space-y-2">
      <USkeleton class="h-4 w-[250px]" />
      <USkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: boolean,
}>(), { icon: false });
</script>