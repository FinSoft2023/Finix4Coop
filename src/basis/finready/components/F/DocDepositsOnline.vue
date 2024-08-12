<template>
  <main>
    <FPaperSize>
      <div class="font-bold text-md mt-2 px-8 text-gray-100 bg-gray-800 dark:bg-gray-700 dark:text-white">
        ใบส่งเงินฝากออมทรัพย์พิเศษ SPECIAL SAVINGS DEPOSIT SLIP</div>
      <div class="flex text-sm justify-end mt-3 text-gray-900 dark:text-gray-900">
        <p class="px-4 ">สหกรณ์ออมทรัพย์ </p> โรงพยาบาลศรีสะเกษ
        <p class="px-4">จำกัด</p>

      </div>
      <hr class="my-2 border-b-2 border-black">
      <div class="grid grid-cols-2 dark:text-gray-900">
        <div class="text-sm">
          <p>สำนักงาน</p>
          <p>Office</p>
          <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
          <p>วันที่</p>
          <p>Date</p>
        </div>
        <div class="flex flex-col ml-2 text-sm">
          <div class="flex items-center">
            <div class="flex items-center">
              <p class="ml-2">เงินสด Cash</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
              <FiLLBox />
              <p class="ml-2">รายกานโอน Transfer</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
              <p class="ml-2">เช็คเรียกเก็บ CL/CC</p>
            </div>
          </div>
          <div class="flex items-center ">
            <div class="flex items-center">
              <p class="ml-2">อื่น ๆ Others</p>
            </div>
          </div>
        </div>
      </div>
      <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black">
        <tbody>
          <tr class="bg-gray-300 dark:bg-gray-400 dark:text-gray-400">
            <td scope="row"
              colspan="2"
              class="px-2 py-1 text-xs text-gray-900 whitespace-nowrap  dark:text-gray-900 border-r border-b border-black">
              <div class="flex ">
                ชื่อบัญชี Account Name
                <p class="ml-2 font-bold ">
                  {{ data?.name }} </p>
              </div>
            </td>

            <td scope="row"
              class="px-2 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <div class="flex">
                เลขที่บัญชี Account No.
                <p class="ml-2 font-bold">
                  6895420004
                </p>
              </div>


            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
            </td>

          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              colspan="2"
              class="px-2 py-1 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              ยอดเงินสดนำฝาก Amount in Cash Deposit
            </td>
            <td scope="row"
              class="px-2 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p>จำนวนเงิน Amount in Baht</p>

            </td>
            <td scope="row"
              rowspan="4"
              class="align-top px-2 py-1 pb-6 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p class="flex justify-center">ลายมือชื่อผู้นำฝาก</p>
              <p class="flex justify-center">Deposit By</p>
            </td>
          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              colspan="2"
              class="px-2 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <FMoneyAmount :amount="data?.amount" />
            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <FMoneyAmount :amount="data?.amount" />
            </td>
          </tr>
          <tr class="text-gray-100 bg-gray-300 dark:bg-gray-400 dark:text-gray-400">
            <td scope="row"
              class="px-2 py-1 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              ธนาคาร/สาขา Bank/Branch
            </td>
            <td scope="row"
              class="px-2 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p>เลขที่เช็ค Cheque Number</p>

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
            </td>
          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              class="px-2 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p></p>

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              .
            </td>
          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              class="px-2 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p></p>

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              .
            </td>
            <td scope="row"
              rowspan="4"
              class="align-top px-2 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p class="flex justify-center">ลายมือชื่อเจ้าหน้าที่</p>
              <p class="flex justify-center">Authorized Signature</p>
            </td>
          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              class="px-2 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <p></p>

            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              .
            </td>
          </tr>
          <tr class="text-gray-100 bg-gray-300 dark:bg-gray-400 dark:text-gray-400 ">
            <td scope="row"
              colspan="2"
              class="px-2 py-1 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              ยอดรวมเงินฝากเป็นตัวอักษร Total Amount in Words
            </td>

            <td scope="row"
              class="px-2 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              ยอดรวมเงินฝาก Total Amount
            </td>
          </tr>
          <tr class="bg-white dark:bg-white ">
            <td scope="row"
              colspan="2"
              class="px-2 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <FMoneyText :amount="data?.amount" />
            </td>
            <td scope="row"
              class="px-2 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
              <FMoneyAmount :amount="data?.amount" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-xs mt-2 text-gray-ต00 dark:text-gray-900">
        <div class="font-bold">
        </div>
        <div class="flex">
          <p class="underline">หมายเหตุ</p>
          <p class="ml-2">1. โปรดทำใบนำฝากแยกต่างหากอย่างละฉบับ สำหรับเงินสด
            และเช็คหรือดร๊าฟท์
            2. โปรดเขียนชื่อหรือหมายเลขบัญชีหลังเช็คหรือดร๊าฟท์ก่อนนำเข้าบัญชี</p>
        </div>
        <div class="ml-14">
          3.ใบนำฝากเงินนี้จะมีผลสมบูรณ์ก็ต่อเมื่อสหกรณ์ได้รับเงินหรือได้เรียกเก็บเงินตามตั๋วเงินที่ระบุไว้ตามรายการข้างต้น
          ถูกต้องครบถ้วนและนำเข้าบัญชีเรียบร้อยแล้วเท่านั้น
        </div>
      </div>
    </FPaperSize>


  </main>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.print');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });
  // const { data } = await useFetch<any>('/api/group2');
</script>