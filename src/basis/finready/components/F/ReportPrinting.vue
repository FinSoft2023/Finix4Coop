<template>
  <DocPaper>

    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
      <title>รายงานการถอนเงินประจำวัน</title>
    </head>
    <div class="text-center">
      <h1 class="text-md font-bold mb-2 text-center">รายงานฝาก - ถอนประจำวัน(ออมทรัพย์พิเศษ)</h1>
      <p class="mb-4 text-center">วันที่ {{ currentDate }}</p>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr class="border-t">
          <th class="py-2">ลำดับ</th>
          <th class="py-2 text-start">เลขที่บัญชี</th>
          <th class="py-2 text-start">ชื่อบัญชี</th>
          <th class="py-2 text-start">ประเภทรายการ</th>
          <th class="py-2 text-end">จำนวนเงินถอน</th>
          <th class="py-2 text-end">จำนวนเงินฝาก</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in filteredWithdrawals"
          :key="data?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ data?.accNo }}</td>
          <td class="py-2">{{ data?.name }}</td>
          <td class="py-2">
            <span>{{ getTransactionLabel(data) }}</span>
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.amount"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.totaldepositsonline"
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
            <FMoneyAmount :amount="totalcheque"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 text-end">
            <FMoneyAmount :amount="total7"
              class="min-w-28" />
          </td>
        </tr>
        <tr v-for="(data, index) in withdrawalsonline"
          :key="data?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ data?.accNo }}</td>
          <td class="py-2">{{ data?.name }}</td>
          <td class="py-2">
            <span>{{ getTransactionLabel(data) }}</span>
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.amount"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.totaldepositsonline"
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
            <FMoneyAmount :amount="totalwithdrawalsonline"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 text-end">
            <FMoneyAmount :amount="total7"
              class="min-w-28" />
          </td>
        </tr>
        <tr v-for="(data, index) in filteredDeposits"
          :key="data?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ data?.accNo }}</td>
          <td class="py-2">{{ data?.name }}</td>
          <td class="py-2">
            <span>{{ getTransactionLabel(data) }}</span>
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.totaldepositsonline"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.amount"
              class="min-w-28" />
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
            <FMoneyAmount :amount="total7"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 border-b text-end">
            <FMoneyAmount :amount="totaldeposits"
              class="min-w-28" />
          </td>
        </tr>
        <tr v-for="(data, index) in filteredDepositsonline"
          :key="data?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ data?.accNo }}</td>
          <td class="py-2">{{ data?.name }}</td>
          <td class="py-2">
            <span>{{ getTransactionLabel(data) }}</span>
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.totaldepositsonline"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="data?.amount"
              class="min-w-28" />
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
            <FMoneyAmount :amount="total7"
              class="min-w-28" />
          </td>
          <td colspan="1"
            class="py-2 text-end border-b">
            <FMoneyAmount :amount="totaldepositsonline"
              class="min-w-28" />
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="2"
            class="py-2 text-end">****รวมยอดทั้งหมด</td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="totalSum"
              class="min-w-28" />
          </td>
          <td class="py-2 text-end border-b">
            <FMoneyAmount :amount="totalSumdeposits"
              class="min-w-28" />
          </td>
        </tr>
      </tbody>
    </table>
  </DocPaper>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// import { useActiveModulePage, useHostApi } from 'some-api-package';
// import FMoneyAmount from 'path/to/FMoneyAmount';
const currentDate = new Date().toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const pageDef = useActiveModulePage('list.printReport');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

const filteredWithdrawals = computed(() => data.value?.filter(item => item.txcode === 'svawtd') || []);//ถอน
const filteredDeposits = computed(() => data.value?.filter(item => item.txcode === 'svadps') || []);//ฝาก
const filteredDepositsonline = computed(() => data.value?.filter(item => item.txcode === 'svadol') || []);//ฝาก online

const withdrawalscheque = computed(() => filteredWithdrawals.value?.filter(item => item.transferChannel === 'cheque') || []);
const withdrawalsonline = computed(() => filteredWithdrawals.value?.filter(item => item.transferChannel === 'online') || []);
const depositsonline = computed(() => filteredDeposits.value?.filter(item => item.transferChannel === 'online') || []);
const deposits = computed(() => filteredDepositsonline.value?.filter(item => item.transferChannel === 'cash') || []);

const totalcheque = computed(() => filteredWithdrawals.value.reduce((total, item) => total + item.amount, 0));
const totalwithdrawalsonline = computed(() => withdrawalsonline.value.reduce((total, item) => total + item.amount, 0));
const totalSum = computed(() => totalcheque.value + totalwithdrawalsonline.value);
const totaldepositsonline = computed(() => filteredDepositsonline.value.reduce((total, item) => total + item.amount, 0));
const totaldeposits = computed(() => filteredDeposits.value.reduce((total, item) => total + item.amount, 0));
const totalSumdeposits = computed(() => totaldepositsonline.value + totaldeposits.value);


const transactionTypes: Record<string, string> = {
  svadps: 'ฝาก',
  svadol: 'ฝาก online',
  svawtd: 'ถอน'
};

const transferChannels: Record<string, string> = {
  online: 'โอน online',
  cheque: 'ถอนเช็ค'
};

const getTransactionLabel = (item: any) => {
  if (item?.txcode === 'svawtd') {
    return transferChannels[item?.transferChannel] || transactionTypes[item?.txcode];
  }
  return transactionTypes[item?.txcode] || item?.txcode;
};
</script>
