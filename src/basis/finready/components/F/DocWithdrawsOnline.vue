<template>
  <main>
    <FPaperSize>
      <div class="font-bold text-md mt-2 px-8 text-gray-100 bg-gray-800 dark:bg-gray-700 dark:text-white">
        ใบถอนเงินฝากออมทรัพย์พิเศษ SPECIAL SAVINGS WITHDRAWAL SLIP
      </div>
      <div class="flex justify-end mt-3 text-gray-900 dark:text-gray-900">
        <p class="px-4">สหกรณ์ออมทรัพย์ </p> โรงพยาบาลศรีสะเกษ
        <p class="px-4">จำกัด</p>

      </div>
      <hr class="my-2 border-b-2 border-black">
      <div class="grid grid-cols-2 dark:text-gray-900">
        <div class="text-sm">
          <p>สำนักงาน</p>
          <div class="flex gap-2">
            <p>Office</p>
            <p class="text-gray-800">สหกรณ์ออมทรัพย์</p>
          </div>
          <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700">
          <p>วันที่ </p>
          <div class="flex gap-2">
            <p>Date</p>
            <p class="text-gray-800">01/07/2567</p>
          </div>
        </div>
      </div>

      <div class="">
        <table class="w-full text-xs text-left text-gray-400 dark:text-gray-400 border border-black">
          <tbody>
            <tr class=" bg-gray-300 dark:bg-gray-400 dark:text-gray-400 ">
              <td scope="row"
                colspan="4"
                class="px-6 py-1 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <div class="flex">
                  ชื่อบัญชี Account Name
                  <p class="ml-2 font-bold">
                    {{ data?.name }} 
                  </p>
                </div>
              </td>
              <td scope="row"
                colspan="3"
                class="px-6 py-1  text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <div class="flex">
                  เลขที่บัญชี Account No.
                  <p class="ml-8 font-bold">
                    {{ data?.accNo }}
                  </p>
                </div>
              </td>
            </tr>
            <tr class="bg-white dark:bg-white ">
              <td scope="row"
                rowspan="1"
                colspan="3"
                class="text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <p> จำนวนเงินที่ถอนเป็นตัวอักษร Withdrewal Amount in Words </p>
                <p class="flex justify-center font-bold">
                  <FMoneyText :amount="data?.amount" />
                </p>
              </td>
              <td scope="row"
                class="py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <p class="ml-8"> บาท </p>
                <p class="ml-8"> Baht </p>
              </td>
              <td scope="row"
                colspan=""
                class="px-6 py-1 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <p> จำนวนเงินที่ถอน Withdrewal Amount</p>
                <p class="flex justify-center font-bold">
                  <FMoneyAmount :amount="data?.amount" />
                </p>
              </td>
            </tr>
            <tr class="bg-white dark:bg-white ">
              <td scope="row"
                colspan=""
                class="py-1 pb-6 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                ลายมือชื่อเจ้าของบัญชี Account Holder's Signature
              </td>
              <td scope="row"
                colspan="4"
                class="py-1 pb-6 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                <p>ลายมือชื่อ ผู้รับเงิน (ผู้รับมอบฉันทะ)</p>
                <p>Receiver's Signature (Nominee)</p>
              </td>
            </tr>
            <tr class="bg-white dark:bg-white ">
              <td scope="row"
                colspan="4"
                class="py-1 pb-6 text-xs text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                สำหรับเจ้าหน้าที่
              </td>
              <td scope="row"
                colspan=""
                class="py-1 pb-6 text-gray-900 whitespace-nowrap dark:text-gray-900 border-r border-b border-black">
                ลายมือชื่อเจ้าหน้าที่ Authorized Signature
              </td>
            </tr>

          </tbody>
        </table>

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