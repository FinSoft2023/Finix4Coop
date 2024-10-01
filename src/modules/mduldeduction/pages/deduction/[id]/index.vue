<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
          <DEntitySection v-model="data"
            :entries
            :pending />
        </UCard>
      <DItemGrid col="x2">
        <UCard class="col-span-1">
          <div class="flex justify-between"> <p class="text-md font-bold">กู้สามัญ</p>
            <p class="text-md font-bold text-red-600">ค้างจ่าย</p></div>
        
         <p class="text-gray-400 mt-2">ยอดกู้</p>
         <p class="text-md font-bold">100,000 บาท</p>
         <p class="text-gray-400 mt-2">ยอดหนี้คงเหลือ</p>
         <p class="text-md font-bold">80,000 บาท</p>
         <p class="text-gray-400 mt-2">ยอดที่ชำระแล้ว</p>
         <p class="text-md font-bold">20,000 บาท</p>
         <p class="text-gray-400 mt-2">ค้างจ่าย</p>
         <p class="text-md font-bold">5,000 บาท</p>
        </UCard>
        <UCard>
          <div class="flex justify-between"> <p class="text-md font-bold">กู้ฉุกเฉิน</p>
            <p class="text-md font-bold text-green-600">ชำระครบ</p></div>
          <p class="text-gray-400 mt-2">ยอดกู้</p>
         <p class="text-md font-bold">30,000 บาท</p>
         <p class="text-gray-400 mt-2">ยอดหนี้คงเหลือ</p>
         <p class="text-md font-bold">28,000 บาท</p>
         <p class="text-gray-400 mt-2">ยอดที่ชำระแล้ว</p>
         <p class="text-md font-bold">2,000 บาท</p>
         <p class="text-gray-400 mt-2">ค้างจ่าย</p>
         <p class="text-md font-bold">2,000 บาท</p>
        </UCard>
        <UCard>
          <div class="flex justify-between"> <p class="text-md font-bold">ค่าหุ้น</p>
            <p class="text-md font-bold text-green-600">ชำระครบ</p></div>
          <p class="text-gray-400 mt-2">จำนวนงวดที่ค้าง</p>
         <p class="text-md font-bold">2 ครั้ง</p>
         <p class="text-gray-400 mt-2">จำนวนเงิน</p>
         <p class="text-md font-bold">2,000 บาท</p>

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
