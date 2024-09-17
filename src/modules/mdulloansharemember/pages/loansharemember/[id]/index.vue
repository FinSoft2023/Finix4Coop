<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <dl>

<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
  คุณมีจำนวนหุ้นอยู่ทั้งหมด
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  100 หุ้น
</dd>

<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
  ยอดที่ขอกู้
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  30,000 บาท (สามหมื่นบาทท้วน)
</dd>
<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
  ชำระเป็นจำนวนงวด
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  12 งวด
</dd>
<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
 งวดละ
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  2,500 บาท
</dd>
</dl>
        <!-- <DEntitySection v-model="data" :entries :pending /> -->
      </UCard>
      <div class="flex justify-end">  <UButton :to="`/loansharemember/09sm9o1w63petsuyibz4/loan`">ขอกู้หุ้น</UButton></div>
    


    </BPartPageBody>

    <template #side>
      <!-- <DSubLinks /> -->
      
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
