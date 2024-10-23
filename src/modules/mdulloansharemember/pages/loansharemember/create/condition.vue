<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>



    <UAlert
      icon="i-heroicons-book-open"
      description="ระบุรายละเอียดขั้นตอนการทำงาน"
      :title="pageDef.label"
    />

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <DItemGrid col="x3">
          <UCard class="col-span-2"> 
            <h1 class="text-xl font-bold text-red-600">คุณไม่สามารถขอกู้ได้</h1>
            <p class="text-sm text-gray-500 dark:text-white">
              ระบบได้ทำการตรวจสอบเงื่อนไขตามข้อกำหนดในการขอกู้ของท่านเรียบร้อยแล้ว
            </p>
            <dl>
              <h1 class="text-md font-bold mt-2">เงื่อนไข</h1>
              <dd class="text-sm text-gray-900 sm:mb-5 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-4 h-4 ml-1 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 8.586l-3.293-3.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z"
                    clip-rule="evenodd"
                  />
                </svg>
                ระยะเวลาการเป็นสมาชิก
              </dd>

              <dd class="text-sm text-gray-900 sm:mb-5 dark:text-gray-400">
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

              <dd class="mb-2 text-sm text-gray-900 sm:mb-5 dark:text-gray-400">
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
                รายได้
              </dd>
            </dl>
            <p class="text-sm text-gray-500 dark:text-white text-red-600">
              "ระยะเวลาการเป็นสมาชิก" ยังไม่ผ่านตามข้อกำหนด
            </p>
            <p class="text-sm text-gray-500 dark:text-white mt-1">
              ท่านสามารถกดที่ปุ่ม "เสร็จสิ้น" และทำการตรวจสอบสิทธิได้ใหม่ในครั้งถัดไป.
            </p>
            <div class="flex justify-center mt-5">
              
              <UButton type="submit">เสร็จสิ้น</UButton>
            </div>
          </UCard>

        </DItemGrid>

        <BPartButtonsBand>
          <!-- <template #next>
            <UButton type="submit">เสร็จสิ้น</UButton>
          </template> -->
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.condition');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useLocalStage(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

// If this is the first step, you can initialize the data value like this:
// data.value = {};

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = getNextStep(pageDef);
  navigateTo(`/loansharemember/create/${redirectPath}`);
};
</script>
