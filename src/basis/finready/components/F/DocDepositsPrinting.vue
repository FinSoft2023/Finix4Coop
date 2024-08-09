<template>
  <FPaperSize>
    <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
      <p class="mt-[1mm] ml-[10cm] ">โรงพยาบาลศรีสะเกษ</p>
    </div>
    <div class="col-start-3 col-span-3">
      <p class="mt-[5mm] ml-[2cm]">สหกรณ์ออมทรัพย์ </p>
    </div>
    <div class="flex datas-center">
      <p class="mt-[2mm] ml-[2cm] text-gray-900 font-bold dark:text-gray-90">08/08/2567</p>
      <div class="flex datas-center">
        <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
          <DFiLLCheck />
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 mt-[3mm]">
        <p class="ml-[6cm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
        <p class="ml-[60mm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div>
      <!-- <div class="flex datas-center">
        <p class="mt-[1mm] ml-[6cm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
        <p class="mt-[1mm] ml-[9cm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div> -->
      <div class="grid grid-cols-2 ">
        <p class="mt-[6mm] ml-[15mm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
        <p class="mt-[4mm] ml-[28mm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
      <!-- <div class="flex datas-center">
        <p class="mt-[1mm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
        <p class="mt-[1mm] ml-[13cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div> -->
      <div class="grid grid-cols-4">
        <div class="col-span-2">
          <p class=" mt-[18mm]  ml-[15mm] text-gray-900 dark:text-gray-90">
            <FMoneyText :amount="data?.amount" />
          </p>
        </div>
        <div>
          <p class="mt-[17mm] ml-[28mm] text-gray-900 dark:text-gray-90">
            <FMoneyAmount :amount="data?.amount" />
          </p>
        </div>
      </div>
      <!-- <div class="flex datas-center">
        <p class="mt-[4cm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyText :amount="data?.amount" />
        </p>
        <p class="mt-[4cm] ml-[13cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div> -->
    </div>
  </FPaperSize>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.print');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });
  // const Details = ref([
  //   { name: 'นายสมใจ ดีใจ', nember: '094756375', amountcash: '800', amount: '800', total: '800' },

  // ])
</script>
