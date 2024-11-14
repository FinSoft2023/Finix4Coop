<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <!-- Speed Dial button -->
      <div class="flex justify-end">
        <button type="button"
          @click="toggleSpeedDial"
          data-dial-toggle="speed-dial-menu-text-inside-button-square"
          aria-controls="speed-dial-menu-text-inside-button-square"
          aria-expanded="false"
          class="flex items-center justify-center text-gray rounded-lg w-20 h-full ">
          เมนูอื่น ๆ
          <svg xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-5': isSpeedDialOpen }"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z" />
          </svg>
          <span class="sr-only">Open actions menu</span>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-4 content-start sm:grid-cols-3 xl:grid-cols-3 relative ">
        <UPageCard v-for="(module, index) in modules"
          :key="index"
          v-bind="module">
          <template #description>
            <span class="line-clamp-2">{{ module.description }}</span>
          </template>
        </UPageCard>

        <!-- Speed Dial Menu -->
      </div>
      <!-- Speed Dial Menu -->
      <div v-show="isSpeedDialOpen"
        id="speed-dial-menu-horizontal"
        class="flex items-center space-x-3 h-30 grid grid-cols-3 gap-4 content-start">
        <UPageCard v-for="(actions, index) in actions"
          :key="index"
          v-bind="actions">
          <template #description>
            <span class="line-clamp-2">{{ actions.description }}</span>
          </template>
        </UPageCard>
      </div>
      <BPartButtonsBand>
        <template #next>


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
  {
    title: 'ใบขอเบิก',
    description: 'ปริ้นเอกสารขอเบิก',
    to: '/guarantee/detail/detail',
    // icon: 'i-heroicons-printer',
  },
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
    title: 'ใบขอโอนเงิน',
    description: 'ดาวโหลดไฟล์เอกสาร',
    to: '/guarantee/closed',
    // icon: 'i-mdi-cheque-book',
  },
  {
    title: 'โอนเงินคืน',
    description: 'ปริ้นรายงาน',
    to: '/guarantee/print1/print1',
    // icon: 'i-mdi-cheque-book',
  },
  {
    title: 'โอนเงินคืน',
    description: 'ปริ้นเอกสารขอเบิก',
    to: '/guarantee/detail/detail',
    // icon: 'i-heroicons-printer',
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
