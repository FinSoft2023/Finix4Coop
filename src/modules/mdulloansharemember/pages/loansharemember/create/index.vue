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
        <UCard>
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-md font-bold leading-none text-gray-500 dark:text-white">
              รายรับของคุณ
            </h5>
            <div class="flex items-center space-x-0.5">
              <UIcon
                name="i-heroicons-pencil-square"
                class="w-5 h-5 text-green-500 dark:text-green-400"
              ></UIcon>
              <a
                @click="navigateTo('/loansharemember/create/fillin')"
                class="text-sm font-bold text-green-600 hover:underline dark:text-green-500"
              >
                เปลี่ยน
              </a>
            </div>
          </div>

          <div class="flex justify-start">
            <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white">
              100,000 บาท
            </h5>
          </div>
          <hr class="border-gray-300 my-4 mt-5" />
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-md font-bold leading-none text-gray-500 dark:text-white">
              รายจ่ายของคุณ
            </h5>
            <div class="flex items-center space-x-0.5">
              <UIcon
                name="i-heroicons-pencil-square"
                class="w-5 h-5 text-green-500 dark:text-green-400"
              ></UIcon>
              <a
                @click="navigateTo('/loansharemember/create/fillin2')"
                class="text-sm font-bold text-green-600 hover:underline dark:text-green-500"
              >
                เปลี่ยน
              </a>
            </div>
          </div>

          <div class="flex justify-start">
            <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white">
              50,000 บาท
            </h5>
          </div>
          <hr class="border-gray-300 my-4 mt-5" />
          <div class="flex justify-center">
            <UButton @click="showCard = true">ตรวจสอบขอกู้</UButton>
          </div>
        </UCard>
        <UCard v-if="showCard" class="mt-4">
        <p class="text-center text-green-600 font-bold mb-5">ผ่านเงื่อนไขแล้ว</p>
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
  <BPartButtonsBand>
    <template #next>
      <UButton type="submit">ขอกู้</UButton>
    </template>
  </BPartButtonsBand>
      </UCard>
      </UForm>

    
    </BPartPageBody>
    
  </BFullPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageDef = useActiveModulePage('create.root');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);

const { apiGet, apiPost } = useLocalStage(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = getNextStep(pageDef);
  navigateTo(`/loansharemember/create/${redirectPath}`);
};

const showCard = ref(false);
const items = [{
  label: 'เงื่อนไขการขอสินเชื่อ',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
},]
</script>