<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <!-- <UAlert
      icon="i-heroicons-document-check"
      description="ตรวจสอบข้อมูลขอสินเชื่อ"
      :title="pageDef.label"
    /> -->
    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
      <UCard class="items-center">
        <div class=" flex items-center">
    <div class="flex-shrink-0">
      <!-- <div>
              <div class="flex justify-center items-center  w-20 h-20 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <UIcon
          name="i-heroicons-clipboard-document-check"
          class="w-12 h-12 text-green-600 dark:text-green-500"
        ></UIcon>
              </div>
          </div> -->
      <!-- <UIcon
          name="i-mdi-currency-thai-baht"
          class="w-20 h-20 text-green-600 dark:text-green-500 mt-3.5"
        ></UIcon> -->
      <img class="w-20 h-20 rounded-full" src="https://www.saving-sskh.com/images/logo-saving.png" alt="Logo">
    </div>
    <div class="flex-1 min-w-0 ms-4">
      <p class="text-xl font-bold text-gray-900 truncate dark:text-white">ตรวจสอบข้อมูล</p>
      <p class="text-md text-gray-500 truncate dark:text-gray-400">โปรดตรวจสอบความถูกต้องของข้อมูล</p>
      <p class="text-md text-gray-500 truncate dark:text-gray-400">ก่อนส่งคำร้องให้ทางสหกรณ์</p>
    </div>
  </div>
</UCard>

        <DItemGrid col="x3">
          <UCard class="col-span-2">
  
            <dl>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
                สมาชิกขอกู้เงินเป็นจำนวน
                
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                20,000.00 บาท (สองหมื่นบาทถ้วน)
              </dd>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
                จำนวนงวด
                
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                12 งวด
              </dd>

              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
                งวดละ
               
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                1,750.00 บาท (หนึ่งพันเจ็ดร้อยห้าสิบบาท)
              </dd>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
              เพื่อวัตถุประสงค์
               
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                เพื่อการอันจำเป็น
              </dd>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
              บัญชีธนาคาร
               
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
                กรุงไทย
              </dd>
              <dt
                class="mt-2 font-light leading-none text-gray-500 dark:text-white"
              >
              สมาชิกขอกู้เงินพร้อมดอกเบี้ยเป็นจำนวน
               
              </dt>
              <dd
                class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
              >
              21,000.00 บาท (สองหมื่นหนึ่งพันบาทถ้วน)
              </dd>
            </dl>
          </UCard>
        </DItemGrid>
        <UCard class="mt-2 items-center">
            <h5
              class="text-md font-bold leading-none text-gray-900 dark:text-white"
            >
              ผู้ค้ำประกัน
            </h5>
            <div class="mt-3 flex items-center">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg" :alt="` image`">
          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-md font-medium text-gray-900 truncate dark:text-white">002405</p>
            <p class="text-md text-gray-500 truncate dark:text-gray-400">นางสำลี ข้าวสวย</p>
          </div>
        </div>
        </UCard>
        <UCard>
          <p class="text-md font-bold mb-3">ยอดขอกู้ฉุกเฉินที่ต้องชำระ 12 เดือน </p>
          <UTable :rows="borrow" />
          <!-- <p class="mt-5 ">
            สมาชิกขอกู้เงินพร้อมดอกเบี้ยเป็นจำนวน
          </p>
          <p class="font-bold">21,000 บาท (สองหมื่นหนึ่งพันบาทถ้วน)</p> -->
        </UCard>
        <UCard>
          <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="terms" class="font-light text-gray-500 dark:text-gray-300">ฉันตรวจสอบข้อมูลเรียบร้อย <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">ต้องการขอสินเชื่อ.</a> </label>
                    </div>
                </div>
        </UCard>
        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton @click="isOpen = true">ส่งคำขอสินเชื่อ</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
        <div class="flex justify-center">
          <Icon
            class="w-20 h-20 text-green-400"
            name="line-md:confirm-circle"
          ></Icon>
        </div>
        <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          ส่งคำขอกู้หุ้นเรียบร้อยแล้ว
        </h2>
        <h3 class="text-center text-gray-500 dark:text-gray-300">
          กรุณารอเจ้าหน้าที่ดำเนินการอนุมัติทำขอ
        </h3>
        <div class="flex justify-center">
          <UButton to="/loangeneralmember">หน้าแรก</UButton>
        </div>
      </div>
    </UModal>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.scan');
const isOpen = ref(false);
const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);

const borrow = [
  { period: 1, month: 'กันยายน 67', payment: 1750.0 },
  { period: 2, month: 'ตุลาคม 67', payment: 1750.0 },
  { period: 3, month: 'พฤศจิกายน 67', payment: 1750.0 },
  { period: 4, month: 'ธันวาคม 67', payment: 1750.0 },
  { period: 5, month: 'มกราคม 68', payment: 1750.0 },
  { period: 6, month: 'กุมภาพันธ์ 68', payment: 1750.0 },
  { period: 7, month: 'มีนาคม 68', payment: 1750.0 },
  { period: 8, month: 'เมษายน 68', payment: 1750.0 },
  { period: 9, month: 'พฤษภาคม 68', payment: 1750.0 },
  { period: 10, month: 'มิถุนายน 68', payment: 1750.0 },
  { period: 11, month: 'กรกฎาคม 68', payment: 1750.0 },
  { period: 12, month: 'สิงหาคม 68', payment: 1750.0 },
];

const guarantorsList = ref([{ id: '002405', fullName: 'นางสำลี ข้าวสวย' }]);
</script>
