<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton @click="toggleModal">ปริ้นรายงาน</UButton>
        <UButton @click="toggleModal"
          >ปริ้นเอกสารหักเงินเดือน</UButton
        >
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>รายชื่อสมัครใหม่ทั้งหมด</BPartSectionTitle>
      <FSelectable @selection-changed="selectItem" :data :pending />
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
        @click.self="toggleModal"
      >
        <div
          class="relative p-4 w-full max-w-3xl max-h-full bg-white rounded-lg shadow dark:bg-gray-800"
        >
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5">
            <h3 class="text-lg text-gray-500 dark:text-gray-400">
              ยืนยันรายการ
            </h3>
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
            <FTableOfTxs @selection-changed="selectItem" :data :pending />

            <div class="flex gap-4">
              <UButton to="/registermemberCounter/scan/qrPrint"
                >ยืนยันรายการ</UButton
              >
              <UButton to="/registermemberCounter/listCheck" color="gray"
                >ยกเลิก</UButton
              >
            </div>
          </div>
        </div>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.confirm');
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
