<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <!-- <UButton to="/" icon="i-heroicons-plus-circle">ปิดยอด</UButton> -->
        <template #next>
          <!-- <DSmartTabs /> -->
        </template>
      </BPartButtonsBand>

      <UButton @click.self="toggleModal" icon="i-mdi-send-outline"
        >ปิดยอดเคาน์เตอร์</UButton
      >     
      <BPartSectionTitle>รายการสมัครสมาชิกใหม่</BPartSectionTitle>
      <FTableOfTxs @selection-changed="selectItem" :data :pending />
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
        @click.self="toggleModal"
      >
        <div
          class="relative p-4 w-full max-w-lg max-h-full bg-white rounded-lg shadow dark:bg-gray-800"
        >
          <!-- Modal body -->
          <div class="relative p-4 text-center sm:p-5">
            <button
              type="button"
              @click="toggleModal"
              class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="successModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div
              class="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 p-2 flex items-center justify-center mx-auto mb-3.5"
            >
              <Icon
                class="w-8 h-8 text-yellow-500 dark:text-yellow-400"
                name="i-mdi-warning-circle-outline"
              ></Icon>

              <span class="sr-only">Success</span>
            </div>
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              ยืนยันปิดเคาน์เตอร์ ?
            </p>
            <div class="flex justify-center gap-4">
              <UButton @click="toggleModal" type="button" class="py-2 px-3">
                ยืนยัน
              </UButton>
              <UButton
                @click="toggleModal"
                type="button"
                class="py-2 px-3"
                color="gray"
              >
                ยกเลิก
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
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
const modules = [
  {
    title: 'ปริ้นเอกสาร',
    description: 'ปริ้นรายงานสมาชิกใหม่',
    to: '/registermemberCounter/confirm',
    icon: 'i-mdi-file-report-outline',
  },
  {
    title: 'ส่งตรวจข้อมูล',
    description: 'ข้อมูลรอตรวจสอบ',
    to: '/registermemberCounter/confrimCheck',
    icon: 'i-mdi-file-report-outline',
  },
  // {
  //   title: 'รายการสมัครสมาชิกใหม่',
  //   description: 'สถานะรายการ',
  //   to: '/registermemberCounter/linkeCheck',
  //   icon: 'i-mdi-file-report-outline',
  // },
];
</script>
