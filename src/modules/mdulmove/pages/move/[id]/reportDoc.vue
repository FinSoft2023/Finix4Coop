<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <DItemGrid col="x3">
        <UCard class="col-span-2">
          <div class="flex justify-start">  <p class="font-bold text-md text-gray-900 sm:mb-5 dark:text-gray-400">ออมทรัพย์และหุ้น </p>
            <p class="font-bold text-md text-green-600 sm:mb-5 dark:text-gray-400"> (1,500,000 บาท)</p>
          </div>
          <dl>
            <dt
              class=" font-light leading-none text-gray-400 dark:text-white"
            >
            เงินออมทรัพย์
            </dt>
            <dd
              class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
            >
            <p>1. บัญชีกรุงไทย 250,000 บาท</p>
            <p>2. บัญชีกสิกร 250,000 บาท</p>
            </dd>
            <dt
              class=" font-light leading-none text-gray-400 dark:text-white"
            >
            ทุนเรือนหุ้น
            </dt>
            <dd
              class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
            >
            <p>มีหุ้นสหกรณ์จำนวน 10,000 หุ้น</p>
        
            </dd>
          </dl>
          <!-- <DEntitySection v-model="data" :entries :pending /> -->
        </UCard>
        
        <UCard> <DEntitySection v-model="data" :entries :pending /></UCard>
       
      </DItemGrid>
      
      <UCard>
        
        <dl>
            <dt
              class="mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            เรื่อง
            </dt>
            <UInput v-model="value" />
            <dt
              class="mt-2 mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            เรียน
            </dt>
            <UInput v-model="value" />

            <dt
              class="mt-2 mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            บันทึกข้อความ
            </dt>
            <UInput v-model="value" />
           
          </dl>
      </UCard>
      <div class="flex justify-end">
        <UButton>บันทึกข้อความ</UButton>
        <UButton to="/move/gwacyixeidxrxjx4fjb0/print" class="ml-3">ปริ้นเอกสาร</UButton>
      </div>
      
    </BPartPageBody>


    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.reportDoc');

const value = ref('')
const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
