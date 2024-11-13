<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>
      </div>

      <!-- Speed Dial Menu -->
      <div class="fixed bottom-6 end-24 group">
        <div v-if="isSpeedDialOpen"
          class="flex flex-col items-center mb-4 space-y-3">
          <NuxtLink v-for="(action, idx) in actions"
            :key="idx"
            :to="action.to">
            <button type="button"
              class="w-[72px] h-[72px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
              <i :class="['w-6 h-6 mx-auto -mb-2', action.icon]"
                aria-hidden="true"></i>
              <span class="block mb-px text-sm font-medium">{{ action.label }}</span>
            </button>
          </NuxtLink>
        </div>

        <button @click="toggleSpeedDial"
          type="button"
          class="ml-2 flex items-center justify-center text-white bg-blue-700 rounded-full w-16 h-16 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
          <svg class="w-6 h-6 transition-transform"
            :class="{ 'rotate-45': isSpeedDialOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18">
            <path stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16" />
          </svg>
          <span class="sr-only">Open actions menu</span>
        </button>
      </div>


      <BPartButtonsBand>
        <template #next>
          <!-- <UButton icon="i-heroicons-plus-circle"
            >ดาวโหลดไฟล์เอกสาร</UButton
          > -->
          <!-- <DSmartTabs /> -->

        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxs4 @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
    <!-- <template #side>
      <UButton icon="i-heroicons-plus-circle"
            >ดาวโหลดไฟล์เอกสาร</UButton
          >
      <DSmartTabs />
      <UHeaderPopoverLinks :links="links" />
    </template> -->
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/guarantee/${item.id}`);
}

const links = [
  {
    label: 'ดาวโหลดไฟล์เอกสาร',
    description: 'ดาวโหลดไฟล์เอกสาร',
    to: '/guarantee/closed',
    icon: 'i-mdi-cheque-book',
  },
  {
    label: 'ปริ้นรายงาน',
    description: 'ปริ้นรายงาน',
    to: '/guarantee/print1/print1',
    icon: 'i-mdi-cheque-book',
  },
  {
    label: 'ใบขอเบิก',
    description: 'ปริ้นเอกสารขอเบิก',
    to: '/guarantee/detail/detail',
    icon: 'i-heroicons-printer'
  },
  {
    label: 'ใบขอโอนเงิน',
    description: 'สถานะรายการ',
    to: '/guarantee/detail/detail',
    icon: 'i-mdi-file-report-outline',
  },
  {
    label: 'โอนเงินคืน',
    description: 'รายชื่อไม่ผ่านการอนุมัติ',
    to: '/guarantee/listmenu',
    icon: 'i-mdi-file-report-outline',
  },
];
const modules = [
  {
    title: 'ดาวโหลดไฟล์เอกสาร',
    description: 'ดาวโหลดไฟล์เอกสาร',
    to: '/guarantee/closed',
    // icon: 'i-mdi-cheque-book',
  },
  {
    title: 'ปริ้นรายงาน',
    description: 'ปริ้นรายงาน',
    to: '/guarantee/print1/print1',
    // icon: 'i-mdi-cheque-book',
  },
  // {
  //   title: 'ใบขอเบิก',
  //   description: 'ปริ้นเอกสารขอเบิก',
  //   to: '/guarantee/detail/detail',
  //   // icon: 'i-heroicons-printer',
  // },
  // {
  //   title: 'ใบขอโอนเงิน',
  //   description: 'สถานะรายการ',
  //   to: '/guarantee/detail/detail',
  //   // icon: 'i-mdi-file-report-outline',
  // },
  // {
  //   title: 'โอนเงินคืน',
  //   description: 'สถานะรายการ',
  //   to: '/guarantee/detail/detail',
  //   // icon: 'i-mdi-file-report-outline',
  // },

];

const isSpeedDialOpen = ref(false);
const actions = [
  {
    label: 'ใบขอเบิก',
    icon: 'i-mdi-note-text-outline',
    to: '/guarantee/detail/detail',

  },
  {
    label: 'ใบขอโอนเงิน',
    icon: 'i-mdi-paper-outline',
    to: '/guarantee/detail/detail',

  },
  {
    label: 'โอนเงินคืน',
    icon: 'i-mdi-money-100',
    to: '/guarantee/detail/detail',
  },
];

function toggleSpeedDial() {
  isSpeedDialOpen.value = !isSpeedDialOpen.value;
}
</script>
<style scoped>
.small-icon .icon {
  font-size: 1rem;
}

.rotate-45 {
  transform: rotate(45deg);
}
</style>
