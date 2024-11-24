<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-6 px-6 mx-auto max-w-screen-md lg:py-12 lg:px-10">
      <h1 class="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
        ข้อมูลสมาชิก
      </h1>
        <UCard >
          <div class="space-y-2">
            <!-- Member ID -->
            <div class="items-center">
              <p class="text-base font-normal text-gray-700 dark:text-gray-300">เลขสมาชิก</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">{{ memberData.id }}</p>
            </div>
            <!-- Member Name -->
            <div class="items-center">
              <p class="text-base font-normal text-gray-700 dark:text-gray-300">ชื่อ</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">{{ memberData.name }}</p>
            </div>
            <!-- Status -->
            <div class="items-center">
              <p class="text-base font-normal text-gray-700 dark:text-gray-300">สถานะ</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white">{{ memberData.status }}</p>
            </div>
          </div>
        </UCard>
       
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  memberData: {
    type: Object,
    required: true,
  },
});
</script>
