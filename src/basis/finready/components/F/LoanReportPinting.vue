<template>
  <DocPaper>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
      <title>รายงานการถอนเงินประจำวัน</title>
    </head>
    <div class="text-center">
      <h1 class="text-md font-bold mb-2text-center">รายการกู้ฉุกเฉินประจำวัน</h1>
      <p class="mb-4 text-center">วันที่ {{ currentDate }}</p>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr class="border-t">
          <th class="py-2">ลำดับ</th>
          <th class="py-2">ประเภท</th>
          <th class="py-2 text-start">ชื่อ-สกุล</th>
          <th class="py-2 text-end">ยอดขอกู้</th>
          <!-- <th class="py-2 text-start">งวด</th>
          <th class="py-2 text-start">ยอดผ่อน</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in loanfast"
        :key="data?.id">
          <td class="py-2">{{index + 1}}</td>
          <td class="py-2">{{ data.type }}</td>
          <td class="py-2">{{ data?.name }}</td>
          <td class="py-2">
            <MoneyAmount :amount="data.amount"/>
          </td>
          <!-- <td class="py-2 text-end">
            <MoneyAmount :amount="data.amount"
              class="min-w-28" />{{ data.amount }}
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="row?.officer.depositAmount"
              class="min-w-28" />
          </td> -->
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="1"
            class="py-2"></td>
          <td colspan="1"
            class="py-2">****รวมยอดทั้งหมด</td>
          <td colspan="1"
            class="py-2 text-end border-b">
            <MoneyAmount :amount="total"
              class="min-w-28" />{{totalcheque}}
          </td>
          <td colspan="1"
            class="py-2 text-end">
            <MoneyAmount :amount="total4"
              class="min-w-28" />
          </td>
        </tr>
       
      </tbody>
    </table>
  </DocPaper>
</template>

<script setup
  lang="ts">
const pageDef = useActiveModulePage('each.printsheet');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

// const filteredWithdrawals = computed(() => {
//   return data.value ? data.value.filter(item => item.txcode === 'svawtd') : [];
// });

// const filteredDeposits = computed(() => {
//   return data.value ? data.value.filter(item => item.txcode === 'svadps') : [];
// });

// const withdrawalscheque = computed(() => {
//   return filteredWithdrawals.value ? filteredWithdrawals.value.filter(item => item.transferChannel === 'cheque') : [];
// });


// const withdrawalsonline = computed(() => {
//   return filteredWithdrawals.value ? filteredWithdrawals.value.filter(item => item.transferChannel === 'online') : [];
// });


// const depositsonline = computed(() => {
//   return filteredDeposits.value ? filteredDeposits.value.filter(item => item.transferChannel === 'online') : [];
// });

// const totalcheque = computed(() => {
//   return withdrawalscheque.value.reduce((total, item) => total + item.amount, 0);
// });

// const totalwithdrawalsonline = computed(() => {
//   return withdrawalsonline.value.reduce((total, item) => total + item.amount, 0);
// });

// const totalSum = computed(() => {
//   return totalcheque.value + totalwithdrawalsonline.value;
// });


// const totaldepositsonline = computed(() => {
//   return depositsonline.value.reduce((total, item) => total + item.amount, 0);
// });
</script>
