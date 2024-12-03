<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <DItemGrid col="x2">
        <UPageCard
          v-for="(module, index) in modules"
          :key="index"
          :class="[
            'cursor-pointer',
            { 'border-green-500 border-2': isSelected(index) },
          ]"
          highlight
          v-bind="module"
          @click="toggleCard(index)"
        >
        </UPageCard>
      </DItemGrid>
    </div>
  </section>
  <!-- <UButton size="xl"
    color="primary"
    to="/Transactionphone/create" block>
    ดำเนินการต่อ
  </UButton> -->

  <!-- แสดงข้อมูลของการ์ดที่ถูกเลือก -->
  <!-- <pre>{{ selectedModules }}</pre> -->
  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// สร้างตัวแปรเพื่อเก็บดัชนีการ์ดที่ถูกเลือกหลายใบ
const selectedCards = ref<number[]>([]);

// ฟังก์ชันตรวจสอบว่าการ์ดถูกเลือกหรือไม่
const isSelected = (index: number) => {
  return selectedCards.value.includes(index);
};

// ฟังก์ชันสำหรับเพิ่มหรือลบการ์ดจากการเลือก
const toggleCard = (index: number) => {
  if (selectedCards.value.includes(index)) {
    // ถ้าการ์ดถูกเลือกแล้ว ให้ลบออกจากอาร์เรย์
    selectedCards.value = selectedCards.value.filter((i) => i !== index);
  } else {
    // ถ้ายังไม่ถูกเลือก ให้เพิ่มเข้าไปในอาร์เรย์
    selectedCards.value.push(index);
  }
};

// สร้าง computed เพื่อเก็บชื่อการ์ดที่ถูกเลือก
const selectedModules = computed(() =>
  selectedCards.value.map((index) => modules[index].title),
);

const modules = [
  {
    title: 'ฝากเงิน',
    to: '',
    icon: 'i-heroicons-wallet',
  },
  {
    title: 'ถอนเงิน',
    to: '',
    icon: 'i-heroicons-banknotes',
  },
  {
    title: 'กู้สามัญ',
    to: '',
    icon: 'i-heroicons-newspaper',
  },
  {
    title: 'กู้ฉุกเฉิน',
    to: '',
    icon: 'i-heroicons-newspaper',
  },
  {
    title: 'สมัครฌาปนกิจ',
    to: '',
    icon: 'i-mdi-grave-stone',
  },
  {
    title: 'สมัครสมาชิก',
    to: '',
    icon: 'i-heroicons-user-plus',
  },
  {
    title: 'สอบถามข้อมูล และอื่นๆ',
    to: '',
    icon: 'i-heroicons-chat-bubble-left-ellipsis',
  },
];
</script>
