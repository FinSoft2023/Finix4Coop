<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-book-open"
      description="ผู้รับผลประโยชน์"
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
      <div
          class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex items-center justify-between mb-4">
            <h5
              class="text-md font-bold leading-none text-gray-900 dark:text-white"
            >
              เลือกรายชื่อผู้รับผลประโยชน์
            </h5>
            <!-- <a
              @click="goToScan"
              class="text-sm font-bold text-green-600 hover:underline dark:text-green-500"
            >
              + เพิ่มรายชื่อ
            </a> -->
          </div>

          <p
            v-if="guarantorsList.length === 0"
            class="mt-8 text-gray-400 text-md text-center"
          >
            คุณยังไม่ได้เพิ่มรายชื่อ
          </p>
          <p
            v-if="guarantorsList.length === 0"
            class="mb-5 text-gray-400 text-md text-center"
          >
            กรุณากดที่ปุ่ม "เพิ่มรายชื่อ"
          </p>

          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li
                v-for="(guarantor, index) in guarantorsList"
                :key="guarantor.id"
                class="py-3 sm:py-4"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"
                      :alt="`${guarantor.fullName} image`"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p
                      class="text-md font-medium text-gray-900 truncate dark:text-white"
                    >
                      {{ guarantor.id }}
                    </p>
                    <p
                      class="text-md text-gray-500 truncate dark:text-gray-400"
                    >
                      {{ guarantor.fullName }}
                    </p>
                  </div>
                  <div
  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
>

 <UButton
            @click="navigateTo('/registermember/create/memberfamily')"
          >เลือก</UButton>
</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >Back</UButton
          >
          <template #next>
            <!-- <UButton
            @click="navigateTo('/registermember/create/beneficiary')"
          >บันทึกข้อมูล</UButton> -->
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.beneficiary');
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
  navigateTo(`/registermember/create/${redirectPath}`);
};

const guarantorsList = ref([{ id: 'นางสำลี ข้าวสวย', fullName: 'บุตร' }]);
</script>
