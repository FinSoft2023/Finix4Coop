<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>
      <BPartSectionTitle>รายชื่อที่ต้องการส่ง</BPartSectionTitle>
      <UCard>
        <FTableOfTxs2 @selection-changed="selectItem" :data :pending />
      </UCard>
      <div class="flex justify-end gap-8">
        <UButton 
        @click="toggleModal">ยืนยันส่งข้อมูล</UButton
        >
        <UButton to="/registermemberCounter/listCheck" color="red"
          >ยกเลิก</UButton
        >
      </div>
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
        @click.self="toggleModal"
      >
        <div
          class="relative p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow dark:bg-gray-800"
        >
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5">
            <h3 class="text-lg text-gray-500 dark:text-gray-400">แชร์ลิงค์</h3>
            <button
              type="button"
              @click="toggleModal"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="px-4 pb-4 md:px-5 md:pb-5">
            <label
              for="course-url"
              class="text-sm font-medium text-gray-900 dark:text-white mb-2 block"
              >แบ่งปันลิงก์หลักสูตรด้านล่างกับเพื่อนของคุณ:</label
            >
            <div class="relative mb-4">
              <input
                id="course-url"
                type="text"
                :value="courseUrl"
                class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled
                readonly
              />
              <button
                @click="copyToClipboard"
                class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
              >
                <span v-if="!isCopied" class="flex items-center">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path
                      d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                    />
                  </svg>
                </span>
                <span v-else class="top-1/3 -translate-y-1/2 flex items-center">
                  <svg
                    class="w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
              </button>
              <div
                v-if="isCopied"
                class="text-sm text-blue-700 dark:text-blue-500 mt-2"
              >
                คัดลอกแล้ว!
              </div>
            </div>

            <button
              type="button"
              @click="toggleModal"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              ออก
            </button>
          </div>
        </div>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.confrimCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/registermemberCounter/${item.id}`);
}

const isModalOpen = ref(false);
const isCopied = ref(false);
const courseUrl = 'http://localhost:3000/registermemberCounter/login/login';

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
  if (isModalOpen.value) {
    isCopied.value = false; // Reset the copied state when opening the modal
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(courseUrl).then(() => {
    isCopied.value = true;
  });
}
</script>
