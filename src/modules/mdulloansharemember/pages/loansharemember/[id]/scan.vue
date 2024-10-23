<template>
   <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <UAlert icon="i-heroicons-document-check"
      description="ระบุรายละเอียดขั้นตอนการทำงาน"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <DItemGrid col="x3">
          
          <UCard class="col-span-2">
            <dl>

<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
  สมาชิกขอกู้เงินเป็นจำนวน
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  20,000 บาท (สองหมื่นบาทถ้วน)
</dd>

<dt class="mt-2 font-light leading-none text-gray-500 dark:text-white">
  ดอกเบี้ย
  <svg xmlns="http://www.w3.org/2000/svg"
    class="inline-block w-4 h-4 ml-1 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor">
    <path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
      clip-rule="evenodd" />
  </svg>
</dt>
<dd class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400">
  1,000 บาท (หนึ่งพันบาทถ้วน)
</dd>

</dl>
           
              
          </UCard>
       
        </DItemGrid>
        <p class="font-bold">รายชื่อคนค้ำประกัน (1 คน)</p>
        <UCard class="mt-2 items-center">
        <div class="flex justify-between">
          <p>สมชาย ใจดี</p>
        </div>
      </UCard>
        <UCard>
          <p>ยอดที่ต้องชำระ 12 เดือน ขอกู้ฉุกเฉิน </p>
          <p class="mt-5 font-light leading-none text-gray-500 dark:text-white">สมาชิกของกู้เงินพร้อมดอกเบี้ยเป็นจำนวน</p>
          <p class="font-bold">21,000 บาท (สองหมื่นหนึ่งพันบาทถ้วน)</p>
          <UTable :rows="borrow" />
        </UCard>
        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
          <template #next>
            <UButton @click="isOpen = true">ส่งคำขอกู้</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
        <div class="flex justify-center">
        <Icon class="w-20 h-20 text-green-400"
          name="line-md:confirm-circle"></Icon>
      </div>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        ส่งคำขอกู้หุ้นเรียบร้อยแล้ว
      </h2>
      <h3 class="text-center text-gray-500 dark:text-gray-300 ">
        กรุณารอเจ้าหน้าที่ดำเนินการอนุมัติทำขอ
      </h3>
      <div class="flex justify-center">
        <UButton to="/loansharemember">Home</UButton>
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
  { period: 1, month: 'กันยายน 67', payment: 1750.00 },
  { period: 2, month: 'ตุลาคม 67', payment: 1750.00 },
  { period: 3, month: 'พฤศจิกายน 67', payment: 1750.00 },
  { period: 4, month: 'ธันวาคม 67', payment: 1750.00 },
  { period: 5, month: 'มกราคม 68', payment: 1750.00 },
  { period: 6, month: 'กุมภาพันธ์ 68', payment: 1750.00 },
  { period: 7, month: 'มีนาคม 68', payment: 1750.00 },
  { period: 8, month: 'เมษายน 68', payment: 1750.00 },
  { period: 9, month: 'พฤษภาคม 68', payment: 1750.00 },
  { period: 10, month: 'มิถุนายน 68', payment: 1750.00 },
  { period: 11, month: 'กรกฎาคม 68', payment: 1750.00 },
  { period: 12, month: 'สิงหาคม 68', payment: 1750.00 },
];
</script>
