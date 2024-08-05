<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <FPaperSize>
          <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
            <p class="mt-[2mm] ml-[8cm] ">โรงพยาบาลศรีสะเกษ</p>
          </div>
          <div class="col-start-3 col-span-3">
            <p class="mt-[1mm] ml-[3cm]">สหกรณ์ออมทรัพย์ </p>
          </div>
          <div class="flex items-center">
            <p class="mt-[1mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">01/03/2567</p>
            <div class="flex items-center">
              <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
                <DFiLLCheck />
              </div>
            </div>
          </div>
          <div v-for="item in Details"
               :key="item.id">
            <div class="flex items-center">
              <p class="mt-[1mm] ml-[6cm] text-gray-900 dark:text-gray-90">{{ item.name }}</p>
              <p class="mt-[1mm] ml-[9cm] text-gray-900 dark:text-gray-90">{{ item.nember }}</p>
            </div>
            <div class="flex items-center">
              <p class="mt-[1mm] ml-[2cm] text-gray-900 dark:text-gray-90">{{ item.amountcash }}</p>
              <p class="mt-[1mm] ml-[13cm] text-gray-900 dark:text-gray-90">{{ item.amount }}</p>
            </div>
            <div class="flex items-center">
              <p class="mt-[4cm] ml-[2cm] text-gray-900 dark:text-gray-90">{{ item.amountcash }}</p>
              <p class="mt-[4cm] ml-[13cm] text-gray-900 dark:text-gray-90">{{ item.amount }}</p>
            </div>
          </div>
        </FPaperSize>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
        lang="ts">
        const Details = ref([
          { name: 'นายสมใจ ดีใจ', nember: '094756375', amountcash: '800', amount: '800', total: '800' },

        ])
</script>
