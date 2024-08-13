<template>
  <DocPaper>
    <div class="grid grid-cols-3 justify-center">
      <div class="flex items-start">
        <div class="border-2 border-black p-2">
          <p>รับที่
            สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด
          </p>
          <p>วันที่
            27/ธันวาคม/2567
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="w-[120px] h-auto"
          src="https://www.saving-sskh.com/images/logo-saving.png"
          alt="Logo" />
      </div>

      <div class="flex flex-col items-end">

        <div class="border-2 border-black p-2">
          <p>หนังสือกู้ที่
            สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด
          </p>
          <p>วันที่
            27/ธันวาคม/2567
          </p>
          <p>บัญชีเงินกู้ที่
            504/67
          </p>
        </div>
      </div>
    </div>

    <p class="font-bold text-xl text-center col-span-2">คำขอและหนังสือกู้เงินเพื่อเหตุฉุกเฉิน</p>
    <div class="flex flex-col items-end mt-3">
      <p>เขียนที่
        สหกรณ์ออมทรัพย์ รพ. ศรีสะเกษ จำกัด
      </p>
      <p>วันที่
        27/ธันวาคม/2567
      </p>
    </div>

    <div class="flex flex-col mt-1">
      <p>เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
    </div>

    <div class="flex flex-col ml-10">
      <p>
        ข้าพเจ้า
        {{ data?.name }}
        สมาชิกเลขทะเบียนที่
        {{ data?.accNo }}
        รับราชการหรือทำงานประจำในตำแหน่ง
        {{ data?.accNo }} สังกัด
        {{ data?.accNo }}
        ได้รับเงินได้รายเดือน
        <FMoneyAmount :amount="data?.amount" />
        บาท
        ขอเสนอคำขอกู้เงินเพื่อเหตุฉุกเฉินดังต่อไปนี้
      </p>
    </div>

    <div class="flex flex-col ml-10">
      <p>ข้อ ๑. ข้าพเจ้าขอกู้เงินของสหกรณ์
        จำนวน
        <FMoneyAmount :amount="data?.amount" />
        บาท
        (
        <FMoneyText :amount="data?.amount" />
        )
      </p>
    </div>

    <div class="flex flex-col ">
      <p>
        โดยจะนำไปใช้เพื่อการดังนี้
        {{ data?.name }}
      </p>
    </div>

    <div class="mt-1 flex flex-col ml-10">
      <p>ข้อ ๒. ถ้าข้าพเจ้าได้รับเงินกู้ ข้าพเจ้าขอส่งเงินกู้คืน ดังนี้
      </p>
    </div>

    <div class="flex flex-col ml-10">
      <p class="text-center">
        ม.ค.
        ภายในวันสิ้นเดือน
        ต้นเงิน
        <FMoneyAmount :amount="data?.amount" />
        บาท
        พร้อมด้วยดอกเบี้ย
      </p>
      <p class="text-end">(๑)
        ภายในวันสิ้นเดือน ม.ค.ต้นเงิน
        <FMoneyAmount :amount="data?.amount" />บาท
        พร้อมด้วยดอกเบี้ย
      </p>

    </div>

    <div class="flex flex-col ml-10">
      <p>ข้อ ๓. เมื่อข้าพเจ้าได้รับเงินกู้แล้ว ข้าพเจ้ายอมรับผู้พันตามข้อบังคับของสหกรณ์ ดังนี้
      </p>
      <p class="text-end mr-1">๓.๑ ยินยอมให้ผู้บังคับบัญชา หรือเจ้าหน้าที่ผู้จ่ายเงินได้รายเดือนของข้าพเจ้า
        ที่ได้รับมอบหมายจากสหกรณ์
      </p>
      <p class="text-start ml-14">หักเงินได้รายเดือนของข้าพเจ้า ตามจำนวนงวดชำระหนี้ข่้อ ๒ เพื่อส่งต่อสหกรณ์
      </p>

      <p class="text-end mr-1"> ๓.๒ ยอมให้ถือว่าในกรณีใดๆดังกล่าวในข้อบังคับของสหกรณ์
        ให้เงินกู้ที่ขอกู้ไปจากสหกรณ์เป็นอันถึงกำหนด
      </p>
      <p class="text-start ml-14">ส่งคืนโดยสิ้นเชิงพร้อมทั้งดอกเบี้ยในทันที
        โดยมิพักคำนึงถึงกำหนดเวลาเวลาที่ตกลงไว้
      </p>
      <p class="text-end mr-2"> ๓.๓ ถ้าประสงค์จะขอลาออกหรือย้ายจากราชการ
        หรืองานประจำตามข้อบังคับของสหกรณ์จะแจ้งเป็นหนังสือ
      </p>
      <p class="text-start ml-14">ให้สหกรณ์ทราบ และจัดการชำระหนี้ซึ่งมีอยู่ต่อสหกรณ์ให้เสร็จสิ้นเสียก่อน
        ถ้าข้าพเจ้าไม่จัดการชำระหนี้
      </p>
      <p class="text-start ml-14">ให้เสร็จสิ้นตามที่กล่าวข้างต้น เมื่อข้าพเจ้าได้ลงชื่อรับเงินเดือน ค่าจ้าง
        เงินสะสม บำเหน็จ บำนาญ เงิน
      </p>
      <p class="text-start ml-14">กองทุนเลี้ยงชีพหรือเงินอื่นใด
        ในหลักฐานที่ทางราชการหรือหน่วยงานเจ้าสังกัดหรือนายจ้างจะจ่ายเงิน
      </p>
      <p class="text-start ml-14">ให้แก่ข้าพเจ้า ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินดังกล่าว
        หักเงินชำระหนี้ พร้อมด้วยดอกเบี้ยส่งชำระ
      </p>
      <p class="text-start ml-14">ต่อสหกรณ์ให้เสร็จสิ้นเสียก่อนได้
      </p>
    </div>
    <div class="mb-3 text-right ">
      <div class=" ml-10 mt-1">
        ..........................................................................ผู้ขอกู้
      </div>
      <div class=" mr-10 ">
        (.........................{{ data?.name }}.............................)
      </div>
      <div class=" ml-10 ">
        ..........................................................................พยาน
      </div>
      <div class=" mr-10">
        (........................................................................)
      </div>
      <div class=" ml-10">
        ..........................................................................พยาน
      </div>
      <div class=" mr-10">
        (........................................................................)
      </div>

    </div>
  </DocPaper>
  <DocMorePaper>
    <div class="border-t border-r border-l border-b border-gray-900 p-2">
      <div class="flex justify-center font-bold text-xl mt-2">(สำหรับเจ้าหน้าที่ของสหกรณ์)</div>
      <div class="flex justify-center mt-3">
        <div>
          <p>จำนวนเงินกู้
            <FMoneyAmount :amount="data?.amount" />
            บาท

          </p>

        </div>
      </div>

      <div class="border-t border-r border-l border-b border-gray-900 p-2 mt-3">
        <div class="flex justify-center font-bold text-xl">จำกัดวงเงินเพื่อเหตุฉุกเฉิน</div>

      </div>

      <table class="w-full text-xs text-left text-gray-500 dark:text-gray-400 border border-black">

        <tbody>


          <tr class="bg-white dark:bg-gray-800 ">
            <td scope="row"
              class="px-6 py-1 text-xs font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
              เงินได้รายเดือน
            </td>

            <td
              class="px-6 py-1 font-bold text-xs text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">

              <p>ต้นเงินกู้สามัญ</p>
              <p class="text-center"> คงเหลือ</p>
            </td>
            <td scope="row"
              class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
              <p>ต้นเงินกู้เพื่อเหตุฉุกเฉิน</p>
              <p class="text-center"> คงเหลือ</p>

            </td>
            <td scope="row"
              class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
              เงินได้รายเดือน
            </td>
            <td scope="row"
              class="px-6 py-1 font-bold text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black">
              เงินได้รายเดือน
            </td>
          </tr>

          <tr class="bg-white dark:bg-gray-800">
            <th scope="row"
              class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black text-center ">
              <FiLL :data="data?.monthlyIncome"
                date-format="short"
                no-line />
            </th>

            <td
              class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black text-center ">
              <FiLL :data="data?.monthlyIncome"
                date-format="short"
                no-line />

            </td>
            <td
              class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black text-center ">
              <FiLL :data="data?.monthlyIncome"
                date-format="short"
                no-line />

            </td>
            <td
              class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black text-center ">
              <FiLL :data="data?.monthlyIncome"
                date-format="short"
                no-line />

            </td>
            <td
              class="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-b border-black text-center ">
              <FiLL :data="data?.monthlyIncome"
                date-format="short"
                no-line />

            </td>

          </tr>






        </tbody>

      </table>
      <div class="flex text-md mt-2">
        <div class="font-bold">หมายเหตุ
        </div>
        <div class="ml-8">๑. ผู้ขอกู้ เคยผิดนัดการส่งเงินงวดชำระหนี้ หรือขาดส่งเงินค่าหุ้นรายเดือนหรือไม่
        </div>
      </div>


      <div class="flex justify-center mt-3">

        <p class="ml-2 ">

        <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
        <p class="mr-16">เคย</p>

        <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
        <p>ไม่เคย</p>

        </p>

      </div>

      <div class="text-md mt-2">

        <div class="ml-20">๒.ข้อชี้แจงอื่นๆ
          <FiLL :data="data?.monthlyIncome"
            date-format="short"
            class="min-w-28" />
        </div>
      </div>

      <div class="flex justify-center mt-3">

        <p class="ml-5">
        <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
        <p class="mr-12">อนุมัติ</p>

        <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
        <p>ไม่อนุมัติ</p>

        </p>

      </div>
      <p BlankSpace
        class="min-w-50 ml-28 break-all mt-3">
        เจ้าหน้าที่
        <FiLL :data="data?.officer"
          date-format="short"
          class="min-w-28" />

      </p>


      <div class="flex justify-center mt-3">

        <p class="ml-5">
        <p class="border-t border-r border-l border-b border-gray-900 px-3 "></p>
        <p class="mr-12">อนุมัติ</p>

        <p class="border-t border-r border-l border-b border-gray-900 px-3"></p>
        <p>ไม่อนุมัติ</p>

        </p>

      </div>
      <p class="ml-40 break-all mt-3">
        <FiLL :data="data?.intendent"
          date-format="short"
          BlankSpace
          class="min-w-40" /> ประธาน / รองประธาน /
        ผู้จัดการ / ผู้ที่ได้
        รับมอบหมาย

      </p>





    </div>
    <div class="mt-3 px-2">


      <p class="indent-20 break-all ">ข้าพเจ้าผู้กู้มอบอำนาจให้
        ..................................................................................ตำแหน่ง.........................................
      </p>

      <p class="">
        สังกัด................................................................เป็นผู้รับเงินกู้ตามหนังสือกู้แทนข้าพเจ้า
      </p>

    </div>

    <div class="grid grid-cols-2 justify-center mt-3">
      <div class="flex items-start">
        <div class="border-2 border-black p-2">
          <p class="underline text-center">คำเตือน</p>
          <p class="text-center">ถ้าท่านมอบอำนาจให้ผู้อื่นรับเงินแทน</p>
          <p class="text-center">โปรดฝากบัตรประจำของท่านไปกับผู้รับเงิน</p>
          <p class="text-center">แทนท่านด้วยเพื่อแสดงต่อเจ้าหน้าที่</p>
        </div>
      </div>


      <div class="">


        <p>................................................................ผู้กู้</p>
        <p>................................................................ผู้รับมอบอำนาจ</p>

        <p class="mt-4">................................................................พยาน</p>
        <p>(................................................................)</p>

        <p class="mt-4">................................................................พยาน</p>
        <p>(................................................................)</p>

      </div>

    </div>

    <div class="mt-3 px-2">


      <p BlankSpace
        class="min-w-40" /> ข้าพเจ้า
      <FiLL :data="data?.fname"
        class="min-w-32" />
      <FiLL :data="data?.lname"
        class="min-w-32" />ได้รับเงินกู้
      จำนวน
      <FiLL :data="data?.load"
        class="min-w-40" />บาท

      <p class="">
        (
        <MoneyText :data="data?.monthlyIncome" /> ) ไปเป็นการถูกต้องแล้ว ณ
        วันที่
        <FiLL :data="data?.dayMonthYear"
          class="min-w-20" />
      </p>

    </div>

    <div class="grid grid-cols-3 justify-center mt-3">
      <div class="flex items-start">
      </div>


      <div class="col-span-2">

        <p class="mt-4 text-center ml-1">................................................................ผู้รับเงิน</p>
        <p class="text-center">
        <table class="w-60 mx-auto">(<td class="border-black text-center min-w-52"
            style="border-bottom:2px dotted">
            <FiLL :data="data?.fname"
              no-line />
            <FiLL :data="data?.lname"
              no-line />
          </td>)</table>
        </p>
        <p class="text-xs mr-8 text-center ml-10">ต้องลงลายมือชื่อในการรับเงินต่อหน้าเจ้าหน้าที่ของสหกรณ์</p>

        <p class="mt-4 text-center">
          จ่ายเงินถูกต้องแล้ว......................................................เจ้าหน้าที่การเงิน
        </p>
        <p class="mt-4 text-center">
        <p class="text-center">
        <table class="w-60 mx-auto">(<td class="border-black text-center min-w-52"
            style="border-bottom:2px dotted">
            <FiLL :data="data?.officer"
              date-format="short"
              no-line />
          </td>)</table>
        </p>
        </p>
      </div>

    </div>

  </DocMorePaper>
</template>

<script setup
  lang="ts">
  import { computed } from 'vue';

  const pageDef = useActiveModulePage('each.print');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

</script>
