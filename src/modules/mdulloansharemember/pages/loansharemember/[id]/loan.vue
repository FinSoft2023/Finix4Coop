<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <UCard>
          <p class="text-sm mb-2 text-red-500 dark:text-white">
            วงเงินที่สามารถกู้ได้ (30,000 บาท สูงสุด)
          </p>
          <DEntitySection v-model="data" :entries="entries" :pending />
        </UCard>

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
        <p class="font-bold">เพิ่มคนค้ำประกัน</p>
        <UCard class="mt-2" @click="goToScan">
          <p class="text-center">+ เพิ่มรายชื่อ</p>
        </UCard>
        <UCard class="mt-2 items-center">
        <div class="flex justify-between">
          <p>สมชาย ใจดี</p>
          <span
            @click="removeSelectedName"
            class="cursor-pointer text-red-500"
          >
            &times;
            <!-- This is the กากะบาท (×) symbol -->
          </span>
        </div>
      </UCard>
    
        <div class="flex justify-end">
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
import { ref } from 'vue';

const pageDef = useActiveModulePage('each.loan');
useBreadcrumb('Edit');

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
  router.push('./takePhoto');
};

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./takePhoto');
};
</script>
