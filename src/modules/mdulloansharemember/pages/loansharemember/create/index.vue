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
        <UCard class="col-span-2">
          <!-- <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          คิว A1
        </h2> -->
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  <h1
    class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-4xl text-gray-900 dark:text-white"
  >
    ตรวจสอบขอกู้
  </h1>
  <div class="mx-auto max-w-screen-sm text-center">
    <h1
      class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 flex items-center justify-center space-x-4"
    >
    <!-- <UIcon name="i-heroicons-clipboard-document-check"
    class="w-32 h-32 text-green-500 dark:text-green-400"></UIcon> -->
    <!-- <img src="https://www.saving-sskh.com/images/logo-saving.png" alt="Logo" style="width: 50%; height: auto;" class="mx-auto mb-3 mt-3" /> -->
    <UIcon name="i-heroicons-document-magnifying-glass"
    class="w-32 h-32 text-green-500 dark:text-green-500 "></UIcon>
    </h1>
    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
      กรุณาทำการตรวจสอบขอกู้ก่อนเพื่อตรวจสอบข้อมูลของท่านกับเงื่อนไขของสหกรณ์
    </p>
    <div class="flex justify-center mt-5">
        <UButton type="submit">เริ่มตรวจสอบ</UButton>
      </div>
  </div>
</div>
      </section>
        </UCard>
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
