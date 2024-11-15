<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-book-open"
      description="ระบุรายละเอียดขั้นตอนการทำงาน"
      :title="pageDef.label"
    />
<UCard>
    <BPartPageBody>
      <!-- <DEntitySection v-model="data" :entries :pending /> -->
      <!-- <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          คิว A1
        </h2> -->
      <section class="bg-white dark:bg-gray-900">
        <div class="py-6 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h1
            class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-4xl text-gray-900 dark:text-white"
          >
            ตรวจสอบขอกู้
          </h1>       
          <div class="mx-auto max-w-screen-sm text-center">
            <!-- <h1
              class="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
            >
              สามารถกู้ได้
            </h1>
            <h1
              class="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
            >
              100,000 บ.
            </h1> -->
            <h1
              class="mb-4 text-5xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-primary-500"
            >
              ไม่สามารถกู้ได้
            </h1>
            <p class=" text-lg font-light text-gray-500 dark:text-gray-400">
              ระบบได้ทำการตรวจสอบข้อมูลของท่าน สามารถขอกู้ในครั้งถัดไป
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
                      <li
                        class="flex items-center text-gray-500 dark:text-gray-400 text-md"
                      >
                        <svg
                          class="w-4 h-4 text-red-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM12.707 7.293a1 1 0 00-1.414 0L10 8.586 8.707 7.293a1 1 0 10-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        ระยะเวลาการเป็นสมาชิก
                      </li>
                      <li
                        class="flex items-center text-gray-500 dark:text-gray-400 text-md"
                      >
                        <svg
                          class="w-4 h-4 text-red-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM12.707 7.293a1 1 0 00-1.414 0L10 8.586 8.707 7.293a1 1 0 10-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        รายได้ต่อเดือน
                      </li>
                      <li
                        class="flex items-center text-gray-500 dark:text-gray-400 text-md"
                      >
                        <svg
                          class="w-4 h-4 text-red-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM12.707 7.293a1 1 0 00-1.414 0L10 8.586 8.707 7.293a1 1 0 10-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        ตำแหน่งงาน
                      </li>
                    </ul>
        </p>
      </div>
    </template>
  </UAccordion>
      </section>
      <div class="flex justify-center">
        <UButton class="mr-5" size="xl" variant="solid" :trailing="true" to="">
          เสร็จสิ้น
        </UButton>
        <!-- <UButton size="xl" variant="solid" :trailing="true">
                    ไม่ต้องการ
                  </UButton> -->
      </div>
    </BPartPageBody>
  </UCard>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.loan');
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

const items = [{
  label: 'เงื่อนไขในการขอกู้',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'getting-started'
},]
</script>
