<template>
  <DocPaper>

    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
      <title>รายงานการถอนเงินประจำวัน</title>
    </head>
    <div class="text-center">
      <h1 class="text-md font-bold mb-2 text-center">รายการกู้ฉุกเฉินประจำวัน</h1>
      <p class="mb-4 text-center">วันที่ {{ currentDate }}</p>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr class="border-t">
          <th class="py-2 text-center">ลำดับ</th>
          <th class="py-2">ประเภท</th>
          <th class="py-2 text-start">ชื่อ-สกุล</th>
          <th class="py-2 text-end">จำนวนงวด</th>
          <th class="py-2 text-end">ยอดขอกู้</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data"
          :key="item?.id">
          <td class="py-2 text-center">{{ index + 1 }}</td>
          <td class="py-2">{{ item?.type }}</td>
          <td class="py-2">{{ item?.name }}</td>
          <td class="py-2 text-end">{{ formatInstallment(item?.installments) }}</td>
          <td class="py-2 text-end">
            <FMoneyAmount :amount="item?.amount" />
          </td>
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
  const pageDef = useActiveModulePage('list.printsheet');
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

  const totalAmount = computed(() => {
    if (!data.value) return 0;
    return data.value.reduce((sum, item) => sum + (item?.amount || 0), 0);
  });

  // Method to format installment options
  const formatInstallment = (installment: string): string => {
    switch (installment) {
      case 'option1':
        return '16 งวด';
      case 'option2':
        return '24 งวด';
      case 'option3':
        return '240 งวด';
      default:
        return installment;
    }
  };


</script>
