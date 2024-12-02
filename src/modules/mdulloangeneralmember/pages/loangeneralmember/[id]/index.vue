<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard class="col-span-2">
            <h1 class="text-xl font-bold">
              คุณสามารถขอกู้ได้
            </h1>
            <p class="text-sm text-gray-500 dark:text-white">
              ระบบได้ทำการตรวจสอบเงื่อนไขตามข้อกำหนดในการขอกู้ของท่านเรียบร้อยแล้ว
            </p>
            <dl>
              <h1 class="text-md font-bold mt-2">
              เงื่อนไข
            </h1>
              <dd
                class=" text-sm text-gray-900 sm:mb-5 dark:text-gray-400"
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-4 h-4 ml-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>   ระยะเวลาการเป็นสมาชิก 
              </dd>
             
              <dd
                class="text-sm  text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-4 h-4 ml-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                ตำแหน่งงาน 
              </dd>

             
              <dd
                class="mb-2 text-sm text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-4 h-4 ml-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg> รายได้ 
              </dd>
              
            </dl>
            <p class="text-sm text-gray-500 dark:text-white">
              วงเงินสูงสุดที่ท่านสามารถกู้ได้ 
            </p>
            <p class="text-md font-bold text-green-600 dark:text-white">
 
  30,000 บาท (สูงสุด)
</p>
          </UCard>
      <div class="flex justify-end">  <UButton :to="`/loangeneralmember/09sm9o1w63petsuyibz4/loan`">ขอกู้หุ้น</UButton></div>
    


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
