<template>
  <FPaperSize>
    <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
      <p class="mt-[0mm] ml-[10cm] ">โรงพยาบาลศรีสะเกษ</p>
    </div>
    <div class="col-start-3 col-span-3">
      <p class="mt-[5mm] ml-[3cm]">สหกรณ์ออมทรัพย์ </p>
    </div>
    <div class="flex datas-center">
      <p class="mt-[2mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">08/08/2567</p>
      <div class="flex datas-center">
        <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
          <!-- <DFiLLCheck /> -->
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="grid grid-cols-2 flex items-center">
        <p class="mt-[4mm] ml-[60mm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
        <p class="mt-[4mm] ml-[63mm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div>
      <div class="grid grid-cols-2 flex items-center">
        <p class="mt-[4mm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
        <p class="mt-[4mm] ml-[32mm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
      <div class="grid grid-cols-2 flex item-center">
        <p class="mt-[28mm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyText :amount="data?.amount" />
        </p>
        <p class="mt-[28mm] ml-[32mm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
    </div> -->
    <div class="grid grid-cols-3 ">
      <div class="col-span-2 mt-4">
        <p class="ml-[60mm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
      </div>
      <div class="mt-4">
        <p class="ml-[30mm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div>
      <div class="col-span-2 mt-4">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
      <div>
        <p class="mt-4 ml-0mm text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
      <div class="mt-5 ml-[2cm]">11</div>
      <div class="mt-5">111</div>
      <div class="mt-5">111</div>
      <div class="ml-[2cm]">22</div>
      <div class="...">22</div>
      <div class="...">22</div>
      <div class="ml-[2cm]">33</div>
      <div class="...">33</div>
      <div class="...">33</div>
      <div class="col-span-2 mt-4">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyText :amount="data?.amount" />
        </p>
      </div>
      <div class="mt-4">
        <p class="ml-0mm text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
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
