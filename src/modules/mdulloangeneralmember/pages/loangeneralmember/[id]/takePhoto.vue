<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <UAlert
      icon="i-heroicons-document-check"
      description="กรุณาเลือกผู้ค้ำประกันจากการค้นหารายชื่อ"
      :title="pageDef.label"
    />
    <BPartPageBody>
      <!-- Custom Search Form -->
      <form @submit.prevent class="flex items-center max-w-sm mx-auto">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM15 15l5 5"
              />
            </svg>
          </div>
          <input
            v-model="searchTerm"
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ค้นหารายชื่อ..."
            @input="filterNames"
            required
          />
        </div>
      </form>

      <!-- Search Results -->
      <ul v-if="filteredNames.length && !selectedName">
        <li
          v-for="name in filteredNames"
          :key="name.id"
          @click="selectName(name)"
          class="name-option cursor-pointer p-4 bg-gray-100 rounded-lg  hover:bg-gray-200"
        >
          <p class="font-bold">{{ name.idNumber }}</p> <p class="font-bold">{{ name.fullName }}</p>
        </li>
      </ul>
      <!-- <div v-if="filteredNames.length && !selectedName">
        <a  v-for="name in filteredNames"
          :key="name.id"
          @click="selectName(name)" class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="text-md font-bold tracking-tight text-gray-900 dark:text-white">{{ name.idNumber }}</h5>
      <p class="text-md text-gray-500 truncate dark:text-gray-400">{{ name.fullName }}</p>
      </a>
      </div> -->
    
      <!-- Show message if no name is selected -->


      <!-- <div class="mt-5">
        <div v-if="!selectedName" class="mt-10 flex justify-center">
        <img
                    class="w-40 h-40 rounded-full"
                    src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"
                    alt="Profile image"
                  />
                </div>
        <p v-if="!selectedName" class="mt-2 text-gray-300 text-4xl text-center">
          ยังไม่มีผู้ค้ำประกัน
        </p>
      </div> -->

      <!-- Selected Name Card -->
      <div v-if="selectedName" class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"
                    alt="Profile image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                    {{ selectedName.idNumber }}
                  </p>
                  <p class="text-md text-gray-500 truncate dark:text-gray-400">
                    {{ selectedName.fullName }}
                  </p>
                </div>
                <button @click="removeSelectedName" class="text-gray-500">
  <!-- X Icon -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Action Button (Visible after selecting a name) -->
      <div v-if="selectedName" class="mt-4 text-center">
        <div class="flex justify-end">
          <UButton type="submit">บันทึก</UButton>
        </div>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pageDef = useActiveModulePage('each.takePhoto');
useBreadcrumb('Edit');

// Sample name list with IDs
const nameList = ref([
  { id: 1, fullName: 'นางสำลี ข้าวสวย', idNumber: '002405' },
  { id: 2, fullName: 'นายมาดี สมใจมาก', idNumber: '003120' },
]);

// States for search, filtered results, and selected name
const searchTerm = ref('');
const filteredNames = ref([...nameList.value]);
const selectedName = ref(null);

// Filter names based on search term
const filterNames = () => {
  filteredNames.value = nameList.value.filter(name =>
    name.fullName.includes(searchTerm.value)
  );
};

// Handle name selection with navigation
const selectName = (name) => {
  selectedName.value = name;
  searchTerm.value = ''; // Clear search term after selection
  filteredNames.value = []; // Clear filtered list

  // Navigate to the specified URL
  router.push('/loangeneralmember/3s8e8csypfplpiilqz22/loan');
};

// Remove selected name
const removeSelectedName = () => {
  selectedName.value = null;
};

// Perform action on button click
const performAction = () => {
  alert('ดำเนินการต่อ');
};
</script>


<style scoped>
.name-option {
  cursor: pointer;
}
</style>
