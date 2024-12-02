<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-book-open"
      description="กรอกข้อมูลสำหรับตรวจสอบข้อมูล"
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
        <UCard class="col-span-2">
          <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white">
              รายรับของคุณ
            </h5>
        <p class="mt-3 mb-1 text-md">เงินเดือน (บาท)</p>
        <UInput v-model="value" />
        <p class="mt-3 mb-1 text-md">เงินประจำตำแหน่ง (บาท)</p>
        <UInput v-model="value" />
        </UCard>
        <div class="flex justify-end">
          <UButton @click="navigateTo('/loangeneralmember/create')">บันทึก</UButton>
        </div>



        <BPartButtonsBand>
          <!-- <template #next>
            <UButton type="submit">บันทึก</UButton>
          </template> -->
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
  navigateTo(`/loangeneralmember/create/${redirectPath}`);
};
const value = ref('50000')
</script>
