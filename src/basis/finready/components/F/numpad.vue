<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-6 mx-auto max-w-screen-sm lg:py-6 lg:px-8">
      <h1 class="mb-6 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        กรุณากรอกเลขสมาชิกของท่าน
      </h1>
      <h2 class="mb-6 text-center text-xl tracking-tight font-light text-gray-700 dark:text-gray-300">
        หากยังไม่มีเลขสมาชิกสามารถกดปุ่ม "ยังไม่เป็นสมาชิก" ด้านล่าง
      </h2>
      <!-- Input Section -->
      <div class="flex items-center justify-center">
        <input v-model="membershipNumber"
          type="text"
          placeholder="กรอกเลขสมาชิก"
          class="text-center text-3xl p-4 w-full border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
          readonly />
      </div>
      <!-- Number Pad -->
      <div class="grid grid-cols-3 gap-4 mt-6">
        <button v-for="num in numberPad"
          :key="num"
          @click="appendNumber(num)"
          class="p-5 text-2xl font-bold bg-gray-100 text-gray-900 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          {{ num }}
        </button>
        <!-- Empty Spacer for Layout -->
        <div></div>
        <!-- Zero Button -->
        <button @click="appendNumber(0)"
          class="p-5 text-2xl font-bold bg-gray-100 text-gray-900 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
          0
        </button>
        <!-- Clear Button -->
        <button @click="clearNumber"
          class="p-5 text-2xl font-bold bg-red-400 text-white rounded-lg shadow hover:bg-red-600">
          ลบ
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const membershipNumber = ref('');
const numberPad = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const appendNumber = (num: number) => {
  if (membershipNumber.value.length < 10) {
    membershipNumber.value += num;
  }
};

const clearNumber = () => {
  membershipNumber.value = '';
};
</script>