<template>
  <FPaperSize>
    <div class="">
      <div class="">
        <!-- <pre>{{ data }}</pre> -->
        <div class=" col-span-3 font-bold text-gray-900 dark:text-gray-900">
          <p class="mt-[2cm] ml-[8cm]">โรงพยาบาลศรีสะเกษ</p>
        </div>
        <p class="mt-[1mm] ml-[3cm] ">สหกรณ์ออมทรัพย์ </p>
        <p class="mt-[1mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">08/08/2567</p>
        <div>
          <div class="flex items-center">
            <p class="mt-[1mm] ml-[6cm] text-gray-900 dark:text-gray-90">{{ data?.name }} </p>
            <p class="mt-[1mm] ml-[9cm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
          </div>
          <div class="flex items-center">
            <p class="mt-[1mm] ml-[2cm] text-gray-900 dark:text-gray-90">
              <FMoneyAmount :amount="data?.amount" />
            </p>
            <p class="mt-[1mm] ml-[12cm] text-gray-900 dark:text-gray-90">
              <FMoneyAmount :amount="data?.amount" />
            </p>
          </div>
        </div>
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
