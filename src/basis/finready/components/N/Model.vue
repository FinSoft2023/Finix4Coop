<template>
  <UModal v-model="showModal" @close="handleClose">
    <UCard>
      <slot></slot>

      <template #header>
        <div class="text-lg font-semibold">{{ label }}</div>
      </template>
      <template #footer>
        <div class="flex justify-end space-x-2">
          <UCard>
            <URadioGroup
              v-model="selected"
              legend="ผลอนุมัติที่ประชุม"
              :options="options"
            />
            <URadioGroup
              v-if="selected === 'con'"
              v-model="selected2"
              legend="ส่งเอกสารหักเงิน"
              :options="options2"
            />
          </UCard>
          <UButton @click="handleClose" color="darkgray" variant="outline"
            >Cancel</UButton
          >
          <UButton @click="emits('action')">{{ actionText }}</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; actionText: string }>();
const emits = defineEmits(['action']);

const showModal = ref(true);

function handleClose() {
  showModal.value = false;
  useRouter().back();
}

const selected = ref<string | null>(null);
const selected2 = ref<string | null>(null);
const showImage = ref(false);
const options = [
  {
    value: 'con',
    label: 'อนุมัติ',
  },
  {
    value: 'sms',
    label: 'ไม่อนุมัติ',
  },
];
const options2 = [
  {
    value: 'yes',
    label: 'ส่งเอกสารให้ รพ',
  },
  {
    value: 'No',
    label: 'ไม่ส่ง',
  },
];
</script>
