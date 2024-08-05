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
            <h1 class="text-md font-bold text-center">สหกรณ์ออมทรัพย์โรงพยาบาลศรีเกษ จำกัด</h1>
            <h1 class="text-md font-bold text-center">รายงานประจำวัน</h1>
            <p class="mb-4 text-center">วันที่ 25/06/2567 </p>
          </div>
          <p class="mb-4 mt-4 text-center">รายกาฝากเงินประจำวัน</p>
          <table class="min-w-full bg-white">
            <thead>
              <tr class="border-t border-b">
                <th class="py-2 px-4 border-b">ลำดับ</th>
                <th class="py-2 px-4 border-b">เลขที่บัญชี</th>
                <th class="py-2 px-4 border-b">ชื่อบัญชี</th>
                <th class="py-2 px-4 border-b">รายการ</th>
                <th class="py-2 px-4 border-b text-end">จำนวนเงิน</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cashWithdraw"
                :key="item.id">
                <td class="py-2 px-4 text-center">{{ item.id }}</td>
                <td class="py-2 px-4 text-center">{{ item.number }}</td>
                <td class="py-2 px-4">{{ item.name }}</td>
                <td class="py-2 px-4 text-center">{{ item.type }}</td>
                <td class="py-2 px-4 text-end">
                  <MoneyAmount />{{ item.amount }}
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4 ">รวม ONL</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b text-end">
                  <MoneyAmount />900
                </td>
              </tr>
              <tr v-for="item in onlWithdraw"
                :key="item.id">
                <td class="py-2 px-4 text-center">{{ item.id }}</td>
                <td class="py-2 px-4 text-center">{{ item.number }}</td>
                <td class="py-2 px-4">{{ item.name }}</td>
                <td class="py-2 px-4 text-center">{{ item.type }}</td>
                <td class="py-2 px-4 text-end">
                  <MoneyAmount />{{ item.amount }}
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">รวมเงินสด</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b text-end">
                  <MoneyAmount />90
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">รวมยอดฝากเงิน</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b border-double text-end">
                  <MoneyAmount />20
                </td>
              </tr>
            </tbody>
          </table>
          <p class="mb-4 mt-4 text-center">รายการถอนประจำวัน</p>
          <table class="min-w-full bg-white">
            <thead>
              <tr class="border-t border-b">
                <th class="py-2 px-4 border-b">ลำดับ</th>
                <th class="py-2 px-4 border-b">เลขที่บัญชี</th>
                <th class="py-2 px-4 border-b text-start">ชื่อบัญชี</th>
                <th class="py-2 px-4 border-b">รายการ</th>
                <th class="py-2 px-4 border-b text-end">จำนวนเงิน</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cheque"
                :key="item.id">
                <td class="py-2 px-4 text-center">{{ item.id }}</td>
                <td class="py-2 px-4 text-center">{{ item.number }}</td>
                <td class="py-2 px-4">{{ item.name }}</td>
                <td class="py-2 px-4 text-center">{{ item.type }}</td>
                <td class="py-2 px-4 text-end">
                  <MoneyAmount />{{ item.amount }}
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">รวมโอน</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b text-end">
                  <MoneyAmount />90
                </td>
              </tr>
              <tr v-for="item in onlDeposit"
                :key="item.id">
                <td class="py-2 px-4 text-center">{{ item.id }}</td>
                <td class="py-2 px-4 text-center">{{ item.number }}</td>
                <td class="py-2 px-4">{{ item.name }}</td>
                <td class="py-2 px-4 text-center">{{ item.type }}</td>
                <td class="py-2 px-4 text-end">
                  <MoneyAmount />{{ item.amount }}
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">รวมโอน</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b text-end">
                  <MoneyAmount />90
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">รวมยอดถอนเงิน</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b border-double text-end">
                  <MoneyAmount />20
                </td>
              </tr>
              <tr class="font-bold">
                <td colspan="2"
                  class="py-2 px-4 text-end "></td>
                <td class="py-2 px-4">****รวม</td>
                <td colspan=""
                  class="py-2 px-4"></td>
                <td class="py-2 px-4 border-b border-double text-end">
                  <MoneyAmount />5678
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
  const cheque = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เช็ค', amount: '15,000.00' },
    { id: 2, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เช็ค', amount: '15,000.00' },
  ]);
  const onlDeposit = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
    { id: 2, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
    { id: 3, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'โอน', amount: '15,000.00' },
  ]);
  const onlWithdraw = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เงินสด', amount: '15,000.00' },
    { id: 2, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'เงินสด', amount: '15,000.00' },
  ]);
  const cashWithdraw = ref([
    { id: 1, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'ONL', amount: '15,000.00' },
    { id: 2, number: '0003765', name: 'สมจิตร	บุญประวัติ', type: 'ONL', amount: '15,000.00' },
  ]);           
</script>
