<template>
  <UNotification v-if="showNotification"
    :icon
    :actions="[{ variant: 'solid', color: 'primary', label: actionText, click: handleAction }, { variant: 'outline', color: 'primary', label: 'ปิด' }]"
    :id
    :title="label"
    :description
    @close="handleClose"
    :timeout="0" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ id: string; label: string; description: string; actionText?: string; icon?: string; }>(), {
  icon: 'i-heroicons-information-circle',
  actionText: 'Proceed',
});
const emits = defineEmits(['action']);
const showNotification = ref(true);

const handleClose = () => {
  showNotification.value = false;
};

const handleAction = (x: any) => {
  emits('action');
};
</script>
