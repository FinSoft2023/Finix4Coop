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
        <UCard class="col-span-2">
         
          <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <!-- <h1
            class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-4xl text-gray-900 dark:text-white"
          >
            ตรวจสอบขอกู้
          </h1>        -->
          <div class="mx-auto max-w-screen-sm text-center">
            <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <svg aria-hidden="true" class="w-12 h-12 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Success</span>
            </div>
            <h1
              class="mb-3 text-3xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
            >
              คุณสามารถขอสินเชื่อได้
            </h1>

            <!-- <h1
              class="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-primary-500"
            >
              ไม่สามารถกู้ได้
            </h1> -->
            
            <p class=" text-lg font-light text-gray-500 dark:text-gray-400">
              ระบบได้ทำการตรวจสอบข้อมูลของท่าน สามารถดำเนินการขอกู้ในขั้นตอนถัดไปได้.
            </p>
          </div>
        </div>
      
        <UAccordion :items="items" variant="soft">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #getting-started>
      <div class="text-gray-900 dark:text-white text-center">
        <Logo class="w-auto h-8 mx-auto" />

        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
         
          <ul class="space-y-2">
  <li class="flex items-center text-gray-500 dark:text-gray-400 text-md">
    <div class="ml-3 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
      <svg
        class="w-3 h-3 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    ระยะเวลาการเป็นสมาชิก
  </li>
  <li class="flex items-center text-gray-500 dark:text-gray-400 text-md">
    <div class="ml-3 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
      <svg
        class="w-3 h-3 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    รายได้ต่อเดือน
  </li>
  <li class="flex items-center text-gray-500 dark:text-gray-400 text-md">
    <div class="ml-3 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
      <svg
        class="w-3 h-3 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    ตำแหน่งงาน
  </li>
</ul>


        </p>
      </div>
    </template>
  </UAccordion>
      </section>
        </UCard>

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton type="submit">เริ่มขอสินเชื่อ</UButton>
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
  navigateTo(`/loansharemember${redirectPath}/loan`);
};

const items = [{
  label: 'เงื่อนไขการขอสินเชื่อ',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
},]
</script>
