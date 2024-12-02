<template>
 <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-book-open"
      description="กรอกข้อมูลครอบครัวของสมาชิก"
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

        <!-- Trigger Modal -->
        <!-- Show selected name inside a UCard after selection with a close icon -->
        <UCard v-if="selectedName" class="mt-2 items-center">
          <div class="flex justify-between">
            <p>{{ selectedName.fullName }}</p>
            <!-- กากะบาท (×) icon to remove the selected name -->
            <span
              @click="removeSelectedName"
              class="cursor-pointer text-red-500"
            >
              &times;
              <!-- This is the กากะบาท (×) symbol -->
            </span>
          </div>
        </UCard>

        <div
          class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex items-center justify-between mb-4">
            <h5
              class="text-md font-bold leading-none text-gray-900 dark:text-white"
            >
              ข้อมูลครอบครัวของคุณ
            </h5>
            <a
              @click="goToScan"
              class="text-sm font-bold text-green-600 hover:underline dark:text-green-500"
            >
              + เพิ่มรายชื่อ
            </a>
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
                    <button
                      @click="removeGuarantor(index)"
                      class="text-gray-500"
                    >
                      <!-- X Icon -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-between">
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <UButton type="submit">ถัดไป</UButton>
        </div>
      </UForm>
    </BPartPageBody>

    <!-- UModal for selecting names -->
    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
        <div class="space-y-2 mt-4">
          <form class="flex items-center max-w-sm mx-auto">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>

          <p
            v-for="name in nameList"
            :key="name.id"
            @click="selectName(name)"
            class="cursor-pointer"
          >
            {{ name.fullName }}
          </p>
        </div>
      </div>
    </UModal>

    <template #side>
      <!-- <DSubLinks /> -->
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.memberFamily');
useSmartStepper(pageDef);
useBreadcrumb('Create');


const { entries, schema } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { executePost } = apiPost();
useComponentResolver(defaultEditResolvers);

// Modal state
const isOpen = ref(false);
const numGuarantors = ref(''); // Number of selected guarantors
const guarantors = ref<string[]>([]); // Array to hold guarantor names

// Selected name state
const selectedName = ref(null);

// Sample name list for the modal
const nameList = ref([
  { id: 1, fullName: 'สมชาย ใจดี' },
  { id: 2, fullName: 'สมหญิง ใจงาม' },
  { id: 3, fullName: 'สมคิด ใจเด็ด' },
]);

// Handle name selection from the modal
const selectName = (name: { id: number; fullName: string }) => {
  selectedName.value = name; // Store the selected name
  isOpen.value = false; // Close the modal after selecting
};

watch(numGuarantors, (newValue) => {
  guarantors.value = Array.from({ length: parseInt(newValue) || 0 }, () => '');
});

// Remove the selected name when X is clicked
const removeSelectedName = () => {
  selectedName.value = null; // Clear the selected name, hiding the UCard
};

const router = useRouter();
const goToScan = () => {
  router.push('./memberFamily2');
};

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./beneficiary');
};

const guarantorsList = ref([{ id: 'นางสำลี ข้าวสวย', fullName: 'บุตร' }]);

const removeGuarantor = (index: number) => {
  guarantorsList.value.splice(index, 1);
};
</script>
