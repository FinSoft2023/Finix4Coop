<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-document-check"
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
            <h1 class="text-xl font-bold text-green-600">คุณสามารถขอกู้ได้</h1>
            <p class="text-sm text-gray-500 dark:text-white">
              ระบบได้ทำการตรวจสอบเงื่อนไขตามข้อกำหนดในการขอกู้ของท่านเรียบร้อยแล้ว
            </p>
            <dl>
              <h1 class="text-md font-bold mt-2">เงื่อนไข</h1>
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
            <p class="text-md font-bold  dark:text-white">
              วงเงินสูงสุดที่ท่านสามารถกู้ได้
            </p>
            <p class="text-md font-bold text-green-600 dark:text-white">
              30,000 บาท (สูงสุด)
            </p>
            <p class="text-sm text-gray-500 dark:text-white">
              หากท่านต้องการขอกู้สามารถกดที่ปุ่ม "ดำเนินการต่อ"
              และสามารถกรอกข้อมูลในการขอกู้เพิ่มเติมได้.
            </p>
            <div class="flex justify-center mt-5">
              
              <UButton type="submit">ดำเนินการต่อ</UButton>
            </div>
          </UCard>
        </DItemGrid>

        <!-- <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton type="submit">ดำเนินการต่อ</UButton>
          </template>
        </BPartButtonsBand> -->
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.confirm');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

useComponentResolver(defaultViewResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/loansharemember${redirectPath}/loan`);
};
</script>
