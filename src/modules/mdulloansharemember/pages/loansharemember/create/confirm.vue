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
         
        </DItemGrid>

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton type="submit">ขอกู้หุ้น</UButton>
          </template>
        </BPartButtonsBand>
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
  navigateTo(`/loansharemember${redirectPath}`);
};
</script>
