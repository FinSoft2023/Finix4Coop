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
      <DItemGrid col="x3">
        <UCard class="col-span-2">
          <div class="flex justify-start">
          <p class="font-bold text-md text-gray-900 sm:mb-5 dark:text-gray-400">สินเชื่อ หนี้คงเหลือรวม</p>
          <p class="font-bold text-md text-red-600 sm:mb-5 dark:text-gray-400"> (70,000 บาท)</p>
        </div>
          <dl>
            <dt
              class=" font-light leading-none text-gray-400 dark:text-white"
            >
            รายการกู้ 2 สัญญา
            </dt>
            <dd
              class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
            >
            <p>1. กู้สามัญ 50,000 บาท</p>
            <p>2. กู้สามัญ 20,000 บาท</p>
            </dd>
          </dl>
          
        </UCard>
        <UCard>
          <p class="font-bold text-md text-gray-900 sm:mb-5 dark:text-gray-400">ภาระค้ำประกันทั้งหมด</p>
          <dl>
            <dt
              class=" font-light leading-none text-gray-400 dark:text-white"
            >
            สิ้นเชื่อ 2 สัญญา
            </dt>
            <dd
              class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
            >
            <p>1. กู้สามัญ 50,000 บาท</p>
            <p>2. กู้สามัญ 20,000 บาท</p>
            </dd>
            <dt
              class=" font-light leading-none text-gray-400 dark:text-white"
            >
            เป็นผู้ค้ำ 1 สัญญา
            </dt>
            <dd
              class="mb-4 font-semibold text-gray-900 sm:mb-5 dark:text-gray-400"
            >
            <p>1. กู้สามัญ 20,000 บาท</p>
            </dd>
          </dl>
        </UCard>
      </DItemGrid>
    </BPartPageBody>
    
   
    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
