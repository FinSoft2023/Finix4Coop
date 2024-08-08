<template>
  <DocPaper>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
      <title>รายงานการถอนเงินประจำวัน</title>
    </head>
    <div class="text-center">
      <h1 class="text-md font-bold mb-2text-center">รายงานฝาก - ถอนประจำวัน(ออมทรัพย์พิเศษ)</h1>
      <p class="mb-4 text-center">วันที่ {{ currentDate }}</p>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr class="border-t">
          <th class="py-2">ลำดับ</th>
          <th class="py-2">เลขที่บัญชี</th>
          <th class="py-2 text-start">ชื่อบัญชี</th>
          <th class="py-2 text-start">ประเภทรายการ</th>
          <th class="py-2 text-end">จำนวนเงินถอน</th>
          <th class="py-2 text-end">จำนวนเงินฝาก</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in withdrawalscheque" :key="item.id">
          <td class="py-2"></td>
          <td class="py-2">{{ data.accNo }}</td>
          <td class="py-2">{{ data.name }}</td>
          <td class="py-2">
            <span>{{ data.txcode }}</span>
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="data.amount"
              class="min-w-28" />{{ data.amount }}
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="row?.officer.depositAmount"
              class="min-w-28" />
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="1"
            class="py-2"></td>
          <td colspan="1"
            class="py-2">รวมถอนเช็ค</td>
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
        <tr v-for="(data, index) in withdrawalsonline" :key="item.id">
          <td class="py-2"></td>
          <td class="py-2">{{ data.accNo }}</td>
          <td class="py-2">{{ data.name }}</td>
          <td class="py-2">
            <span>{{ data.txcode }}</span>
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="data.amount"
              class="min-w-28" />{{ data.amount }}
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="row?.officer.depositAmount"
              class="min-w-28" />
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="1"
            class="py-2"></td>
          <td colspan="1"
            class="py-2">รวมถอนโอน</td>
          <td colspan="1"
            class="py-2 text-end border-b">
            <MoneyAmount :amount="total2"
              class="min-w-28" />{{totalwithdrawalsonline}}
          </td>
          <td colspan="1"
            class="py-2 text-end">
            <MoneyAmount :amount="total4"
              class="min-w-28" />
          </td>
        </tr>
        <tr v-for="item in onlWithdraw"
          :key="item.id">
          <td class="py-2"></td>
          <td class="py-2">{{ item.numer }}</td>
          <td class="py-2">{{ item.name }}</td>
          <td class="py-2">
            <span>{{ item.type }}</span>
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="item.amount"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="row?.officer.depositAmount"
              class="min-w-28" />{{ item.amount }}
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="1"
            class="py-2"></td>
          <td colspan="1"
            class="py-2">รวมฝากเงินสด</td>
          <td colspan="1"
            class="py-2 text-end">
            <MoneyAmount :amount="total7"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 border-b  text-end">
            <MoneyAmount :amount="total5"
              class="min-w-28" />
          </td>
        </tr>
        <tr v-for="(data, index) in depositsonline" :key="data.id">
          <td class="py-2"></td>
          <td class="py-2">{{ data.accNo }}</td>
          <td class="py-2">{{ data.name }}</td>
          <td class="py-2">
            <span>{{ data.txcode }}</span>
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="data.amount"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="row?.officer.depositAmount"
              class="min-w-28" />{{ data.amount }}
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="1"
            class="py-2"></td>
          <td colspan="1"
            class="py-2">รวมฝากเงินโอน</td>
          <td colspan="1"
            class="py-2 text-end">
            <MoneyAmount :amount="total8"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 text-end border-b">
            <MoneyAmount :amount="total6"
              class="min-w-28" />{{totaldepositsonline}}
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>

          <td colspan="2"
            class="py-2">****รวมยอดทั้งหมด</td>
          <td class="py-2 text-end">
            <MoneyAmount :amount="totalAmount"
              class="min-w-28" />{{ totalSum }}
          </td>
          <td class="py-2 text-end border-b">
            <MoneyAmount :amount="totalAmount2"
              class="min-w-28" />{{totaldepositsonline}}
          </td>
        </tr>
      </tbody>
    </table>
  </DocPaper>
</template>

<script setup
  lang="ts">
const pageDef = useActiveModulePage('list.printDay');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

const filteredWithdrawals = computed(() => {
  return data.value ? data.value.filter(item => item.txcode === 'svawtd') : [];
});

const filteredDeposits = computed(() => {
  return data.value ? data.value.filter(item => item.txcode === 'svadps') : [];
});

const withdrawalscheque = computed(() => {
  return filteredWithdrawals.value ? filteredWithdrawals.value.filter(item => item.transferChannel === 'cheque') : [];
});


const withdrawalsonline = computed(() => {
  return filteredWithdrawals.value ? filteredWithdrawals.value.filter(item => item.transferChannel === 'online') : [];
});


const depositsonline = computed(() => {
  return filteredDeposits.value ? filteredDeposits.value.filter(item => item.transferChannel === 'online') : [];
});

const totalcheque = computed(() => {
  return withdrawalscheque.value.reduce((total, item) => total + item.amount, 0);
});

const totalwithdrawalsonline = computed(() => {
  return withdrawalsonline.value.reduce((total, item) => total + item.amount, 0);
});

const totalSum = computed(() => {
  return totalcheque.value + totalwithdrawalsonline.value;
});


const totaldepositsonline = computed(() => {
  return depositsonline.value.reduce((total, item) => total + item.amount, 0);
});
</script>
