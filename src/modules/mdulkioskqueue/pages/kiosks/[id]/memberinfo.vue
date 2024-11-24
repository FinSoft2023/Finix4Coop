<template>
  <BFullPage>
    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-6 px-6 mx-auto max-w-screen-md lg:py-12 lg:px-10">
          <UCard>
            <h1 class="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
              ข้อมูลสมาชิก
            </h1>
            <div class="space-y-6">
              <!-- Member ID -->
              <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <span class="text-xl font-semibold text-gray-700 dark:text-gray-300">เลขสมาชิก:</span>
                <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ memberData.id }}</span>
              </div>
              <!-- Member Name -->
              <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <span class="text-xl font-semibold text-gray-700 dark:text-gray-300">ชื่อ:</span>
                <span class="text-xl font-bold text-gray-900 dark:text-white">{{ memberData.name }}</span>
              </div>
              <!-- Status -->
              <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <span class="text-xl font-semibold text-gray-700 dark:text-gray-300">สถานะ:</span>
                <span class="text-xl font-bold text-green-500 dark:text-green-400">{{ memberData.status }}</span>
              </div>
              <!-- Registration Date -->
              <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <span class="text-xl font-semibold text-gray-700 dark:text-gray-300">วันที่สมัคร:</span>
                <span class="text-xl font-bold text-gray-900 dark:text-white">{{ memberData.registrationDate }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </BPartPageBody>
    <BPartButtonsBand>
      <UButton class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/create/choice">
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton size="xl"
          variant="solid"
          icon="i-heroicons-chevron-right-16-solid"
          :trailing="true"
          to="/kiosks/create/scankiosk">
          ถัดไป
        </UButton>
      </template>
    </BPartButtonsBand>
  </BFullPage>
</template>

<script setup lang="ts">
const { query } = useRoute();
const memberData = reactive({
  id: query.id || "2001",
  name: "นายตัวอย่าง สมมติ",
  status: "สมาชิกปัจจุบัน",
  registrationDate: "10 มกราคม 2564",
});
</script>
