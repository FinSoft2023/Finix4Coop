<template>
  <DocPaper>
    <!-- <pre>{{ data }}</pre> -->

    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
      <title>รายงานการถอนเงินประจำวัน</title>
    </head>
    <div class="text-center">
      <h1 class="text-md font-bold mb-2 text-center">รายงานถอนประจำวัน(ออมทรัพย์พิเศษ)</h1>
      <p class="mb-4 text-center">วันที่ 08/08/2556</p>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr class="border-t">
          <th class="py-2">ลำดับ</th>
          <th class="py-2 text-start">เลขที่บัญชี</th>
          <th class="py-2 text-start">ชื่อบัญชี</th>
          <th class="py-2 text-start">ประเภทรายการ</th>
          <th class="py-2 text-end">จำนวนเงินถอน</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data"
          :key="item?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ item?.accNo }}</td>
          <td class="py-2">{{ item?.name }}</td>
          <td class="py-2">
            <span>{{ getTransactionLabel(item) }}</span>
          </td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="item?.amount"
              class="min-w-28" />
          </td>
        </tr>
        <tr class="font-bold">
          <td colspan="2"
            class="py-2"></td>
          <td colspan="2"
            class="py-2">****รวมยอดทั้งหมด</td>
          <td class="py-2 text-end border-b">
            <FMoneyAmount :amount="totalAmount"
              class="min-w-28" />
          </td>
        </tr>
      </tbody>
    </table>
  </DocPaper>
</template>

<script setup
  lang="ts">
  import { computed } from 'vue';

  const pageDef = useActiveModulePage('list.printDoc');
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

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

  const totalAmount = computed(() => {
    return data?.value?.reduce((acc, curr) => acc + curr.amount, 0);
  });
</script>
