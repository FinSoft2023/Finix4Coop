<template>
  <UModal v-model="showModal"
    @close="handleClose">
    <UCard>

      <slot></slot>

      <template #header>
        <div class="text-lg font-semibold">{{ label }}</div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-2">
          <UButton @click="handleClose" color="darkgray" variant="outline" >Cancel</UButton>
          <UButton @click="emits('action')">{{ actionText }}</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; actionText: string; }>();
const emits = defineEmits(['action']);

const showModal = ref(true);

function handleClose() {
  showModal.value = false;
  useRouter().back();
}
</script>
