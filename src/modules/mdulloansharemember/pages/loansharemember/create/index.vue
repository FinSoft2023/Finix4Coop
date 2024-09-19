<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-book-open"
      description="ตรวจสอบสิทธิขอกู้"
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
            <h1 class="text-xl font-bold">ตรวจสอบสิทธิขอกู้</h1>
            <p class="text-sm text-gray-500 dark:text-white">
              หากคุณต้องการขอกู้สินเชื่อกรุณากดที่ปุ่ม "ตรวจสอบ"
              เพื่อทำการตรวจสอบข้อมูลในการกู้ก่อน
            </p>
            <dl>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
                ชื่อ-สกุล
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                นพรุจ ชูธรรมสิทธิกุล
              </dd>

              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
                รหัสสมาชิก
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                00191
              </dd>
            </dl>
            <div class="flex justify-center mt-5">
              <UButton type="submit">ตรวจสอบ</UButton>
            </div>
          </UCard>

       
        </DItemGrid>

        <BPartButtonsBand>
          <template #next>
            <!-- <UButton type="submit">ตรวจสอบขอกู้</UButton> -->
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.root');
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
