<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <DocPaper>

          <head>
            <meta charset="UTF-8">
            <meta name="viewport"
              content="width=device-width, initial-scale=1.0">
            <title>รายงานการถอนเงินประจำวัน</title>
          </head>
          <div class="text-center">
            <h1 class="text-md font-bold mb-2text-center">รายงานถอนประจำวัน(ออมทรัพย์พิเศษ)</h1>
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cheque"
                :key="item.id">
                <td class="py-2">{{ item.id }}</td>
                <td class="py-2">{{ item.number }}</td>
                <td class="py-2">{{ item.name }}</td>
                <td class="py-2">
                  <span>{{ item.type }}</span>
                </td>
                <td class="py-2 text-end">
                  <MoneyAmount :amount="item.amount"
                    class="min-w-28" />{{ item.amount }}
                </td>
                <td class="py-2 text-end">
                  <MoneyAmount :amount="row?.officer.depositAmount"
                    class="min-w-28" />
                </td>
              </tr>
              <tr v-for="item in onlDeposit"
                :key="item.id">
                <td class="py-2">{{ item.id }}</td>
                <td class="py-2">{{ item.number }}</td>
                <td class="py-2">{{ item.name }}</td>
                <td class="py-2">
                  <span>{{ item.type }}</span>
                </td>
                <td class="py-2 text-end">
                  <MoneyAmount :amount="item.amount"
                    class="min-w-28" />{{ item.amount }}
                </td>
                <td class="py-2 text-end">
                  <MoneyAmount :amount="row?.officer.depositAmount"
                    class="min-w-28" />
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2"></td>

                <td colspan="2"
                  class="py-2">****รวมยอดทั้งหมด</td>
                <td class="py-2 text-end  border-b">
                  <MoneyAmount :amount="totalAmount"
                    class="min-w-28" />9000
                </td>
              </tr>
            </tbody>
          </table>
        </DocPaper>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  // const pageDef = useActiveModulePage('list.printReport');

  // const { entries } = getEntrySchema(pageDef);
  // const { apiGet } = useHostApi(pageDef);
  // const { data, error, pending } = apiGet();

  // useBreadcrumb(pageDef.label);
  const cheque = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เช็ค', amount: '15,000.00' },
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เช็ค', amount: '15,000.00' },
  ]);
  const onlDeposit = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
    { id: 2, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
    { id: 3, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
  ]);

</script>
