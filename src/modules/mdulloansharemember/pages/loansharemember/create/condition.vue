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
        <UCard>
          <section class="bg-white dark:bg-gray-900">
            <div class="mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div
                class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
              >
                <div class="flex items-start">
                  <div
                    class="flex justify-center items-center mr-4 w-8 h-8 "
                  >
                  <svg
                          class="w-10 h-10 text-red-500 "
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
                  </div>

                  <div>
                    <h3
                      class="mb-2 text-xl font-bold dark:text-white text-red-600"
                    >
                      คุณไม่ผ่านเงื่อนไข
                    </h3>
                    <p class="mb-3 text-gray-500 dark:text-gray-400 text-md">
                      ระบบได้ทำการตรวจสอบข้อมูลของคุณแล้ว
                      คุณยังไม่สามารถขอกู้สินเชื่อได้.
                    </p>
                    <h3 class="text-md font-bold dark:text-white">เงื่อนไข</h3>
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
                  </div>
                </div>
              </div>

              <div
                class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5"
              >
                <!-- <div class="flex items-start">
    <div
      class="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 lg:h-14 lg:w-14 dark:bg-primary-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="#11bb0e"
          d="M16 12c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m5.45 5.6c-.39-.4-.88-.6-1.45-.6h-7l-2.08-.73l.33-.94L13 16h2.8c.35 0 .63-.14.86-.37s.34-.51.34-.82c0-.54-.26-.91-.78-1.12L8.95 11H7v9l7 2l8.03-3c.01-.53-.19-1-.58-1.4M5 11H.984v11H5z"
        />
      </svg>
    </div>

    <div>
      <h3 class="text-md font-bold dark:text-white text-green-600 ">
        30,000 บาท (สูงสุดที่กู้ได้)
      </h3>
    </div>
  </div> -->
              </div>
            </div>
          </section>
        </UCard>
        <!-- <DItemGrid col="x3">
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

        </DItemGrid> -->

        <BPartButtonsBand>
          <template #next>
            <UButton type="submit">เสร็จสิ้น</UButton>
          </template>
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
