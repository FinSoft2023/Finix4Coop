<template>
  <main>
    <DocPaper>
      <div class="grid grid-cols-3 grid-rows-2 justify-center h-10">
        <div class="items-start mt-8">
          <div class="border-2 border-black p-1  ">
            <p class="text-sm ">รับที่
              <FFiLL :data="data?.receivedLocation"
                class="min-w-36" />
            </p>
            <p class=" text-sm">วันที่
              <FFiLL class="min-w-52"
                :data="data?.dateReceived"
                date-format="short" />
            </p>
          </div>

          <div class="border-2 border-black p-1 mt-4 ">
            <p class="text-sm">หนังสือกู้เงินที่
              <FiLL class="min-w-36"
                :data="data?.loanLetterNumber" />
            </p>
            <p class="text-sm">วันที่
              <FiLL class="min-w-48"
                :data="data?.dateReceived"
                date-format="short" />
            </p>
            <p class="text-sm">บัญชีเงินกู้ที่
              <FiLL class="min-w-40"
                :data="data?.loanAccountNumber" />
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center row-span-2">
          <img class="w-[120px] h-auto"
            src="https://www.saving-sskh.com/images/logo-saving.png"
            alt="Logo" />
          <p class="mt-2 font-bold text-xl">คำขอกู้เงินสามัญทั่วไป</p>
        </div>

        <div class="flex flex-col items-end row-span-2">
          <p class="mb-2">เเบบ ส.1/2565</p>
          <div class="border-2 border-black p-2">
            <p class="text-sm">เอกสารประกอบการกู้ ( อย่างละ 1 ฉบับ )
            </p>
            <p class="text-sm">1.สลิปเงินเดือน </p>
            <p class="text-sm ">2.สำเนาบัตรประจำตัวประชาชนพร้อมรับรองสำเนาถูกต้องของผู้กู้ ผู้ค้ำ เเละคู่สมรส </p>
            <p class="text-sm ">3.สำเนาทะเบียนบ้านพร้อมรับรองสำเนาถูกต้องของผู้กู้ ผู้ค้ำเเละคู่สมรส </p>
            <p class="text-sm ">4.สำเนาทะเบียนสมรสหรือใบหย่าหร้อมรับรองสำเนาถูกต้องของผู้กู้เเละผู้ค้ำ </p>
          </div>
        </div>
      </div>

      <div class="grid justify-items mt-52">
        <p class="mr-10 text-sm text-end">เขียนที่
          <FiLL :data="data?.receivedLocation" />
        </p>
        <p class="mr-10 text-sm text-end">วันที่
          <FiLL class="min-w-52"
            :data="data?.dateReceived"
            date-format="full" />
        </p>
      </div>
      <div class="grid justify-items-start mt-6">
        <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      </div>

      <div class="grid justify-items-start mt-6 text-pretty text-base  ">
        <p><span class="ml-20">ข้าพเจ้า</span>
          <FiLL class="min-w-56"
            :data="`${data?.fname}  ${data?.lname}`" /> สมาชิกเลขทะเบียนที่
          <FiLL :data="data?.remberRegistration"
            class="min-w-20" /> อายุ
          <FiLL :data="data?.age"
            class="min-w-20" /> ปี
          เป็น
          <FiLLBox :checked="data?.fname" /> ข้าราชการ/ลูกจ้างประจำ
          <FiLLBox /> พนักงานราชการ
          <FiLLBox /> พนักงานกระทรวงสาธารณสุข
          <FiLLBox /> ลูกจ้าง
          <FiLLBox /> อื่นๆ................................. ตำเเหน่ง
          <FiLL :data="data?.position"
            class="min-w-28" /> สังกัด
          <FiLL :data="data?.affiliation"
            class="min-w-44" />
          เงินเดือน/เงินประจำตำเเหน่ง
          <FiLL :data="data?.salary"
            class="min-w-28" /> บาท หน่วยงาน
          <FiLL :data="data?.agency"
            class="min-w-32" /> เบอร์โทรภายใน
          <FiLL :data="data?.phonenb"
            class="min-w-40" />
          ที่อยู่เลขที่
          <FiLL :data="data?.housenb"
            class="min-w-20" /> หมู่ที่
          <FiLL :data="data?.group"
            class="min-w-20" /> ถนน
          <FiLL :data="data?.road"
            class="min-w-28" /> ตำบล
          <FiLL :data="data?.subdistrict"
            class="min-w-28" /> อำเภอ
          <FiLL :data="data?.district"
            class="min-w-28" />
          จังหวัด
          <FiLL :data="data?.province"
            class="min-w-28" /> รหัสไปรษณีย์
          <FiLL :data="data?.zipcode"
            class="min-w-28" /> เบอร์โทร
          <FiLL :data="data?.phonenb"
            class="min-w-44" /> LINE ID
          <FiLL :data="data?.idLine"
            class="min-w-28" />
          เสนอคำขอกู้เงินสามัญเพื่อโปรดพิจารณาดังต่อไปนี้
        </p>
        <p>1.ข้าพเจ้าขอกู้เงินสามัญทั่วไป จำนวน
          <FiLL :data="data?.debt"
            class="min-w-28" /> บาท(
          <MoneyText :data="data?.debt" />)
        </p>
        <p>2.ข้าพเจ้าจะนำเงินไปใช้ตามวัตถุประสงค์ ดังนี้ (อาจเเนบเอกสารเพื่อประกอบพิจารณาตามวัตถุประสงค์)</p>
        <p class="indent-10">
          <FiLLBox /> 2.1 เพื่อการอันจำเป็น อันได้เเก่ จัดหาสิ่งจำเป็นสำหรับครอบครัว ,อุปการะเลี้ยงบุคคลในครอบครัว,
          ปลดเปลื้องหนี้สิ้นของครัวเรือน,รักษาพยาบาลบุคคลในครอบครัว
        </p>
        <p class="pl-10">
          <FiLLBox :checked="data?.contract" /> 2.2 เพื่อชำระหนี้สหกรณ์ จำนวน
          <FiLL :data="data?.contract"
            class="min-w-20" /> สัญญา ดังนี้
        </p>
        <div class="grid grid-cols-2 justify-center">
          <div class="items-start  text-nowrap">
            <p class="pl-20"> - เงินกู้สามัญทั่วไป </p>
            <p class="pl-20"> - เงินกู้สามัญเพื่อพัฒนาคุณภาพชีวิต </p>
            <p class="pl-20"> - เงินกู้เพื่อเหตุฉุกเฉิน </p>
            <p class="pl-20"> - เงินกู้สามัญเพื่อการประกอบอาชีพเสริมเพิ่มรายได้ </p>
            <p class="pl-20"> - เงินกู้พิเศษ </p>
            <p class="pl-20"> - เงินกู้หุ้น </p>
          </div>
          <div class="items-end ">
            <p class="pl-20">หนังสือกู้เงินที่...................................</p>
            <p class="pl-20">หนังสือกู้เงินที่
              <FiLL :data="data?.loanLetterNumber"
                class="min-w-28" />
            </p>
            <p class="pl-20">หนังสือกู้เงินที่...................................</p>
            <p class="pl-20">หนังสือกู้เงินที่...................................</p>
            <p class="pl-20">หนังสือกู้เงินที่...................................</p>
            <p class="pl-20">หนังสือกู้เงินที่...................................</p>
          </div>
        </div>
      </div>

      <div class="grid justify-items-start">
        <p class="indent-10">
          <FiLLBox /> 2.3 เพื่อการศึกษาของบุตรหรือสมาชิก
        </p>
        <p class="indent-10">
          <FiLLBox /> 2.4 อื่นๆ (ระบุ).......................
        </p>
        <p>3. ข้าพเจ้าจะส่งคืนต้นเงินกู้พร้อมดอกเบี้ยในอัตราตามที่สหกรณ์กำหนดให้เเก่สหกรณ์เป็นงวดรายเดือนภายใน
          วันสิ้นเดือนทั้งนี้ตั้งเเต่งวดประจำเดือน
          <FiLL :data="data?.mout"
            class="min-w-28" /> พ.ศ.
          <FiLL :data="data?.co"
            class="min-w-20" /> เป็นต้นไป
        </p>
        <p>4. ข้าพเจ้าต้องถือหุ้นเพิ่มตามสัดส่วนของวงเงินโดยให้สหกรณ์หักจากเงินกู้เป็นจำนวน
          <FiLL :data="data?.makepayment"
            class="min-w-20" /> บาท
          (
          <MoneyText :data="data?.debt" />)
        </p>
        <p>5. ข้าพเจ้าจะทำหนังสือกู้เงินสำหรับเงินกู้สามัญทั่วไป ให้ไว้ต่อสหกรณ์ตามที่สหกรณ์กำหนด
        </p>
        <p>6. (ในกรณีที่ผู้ขอกู้มีคู่สมรสเเล้ว) ในการกู้เงินตามคำขอกู้นี้ ข้าพเจ้าได้รับคำยินยอมจากคู่สมรสเเล้ว
          เเละได้บันทึกคำยินยอม
          เป็นหลักการฐานในท้ายหนังสือกู้นี้ด้วย
        </p>
      </div>
      <div class="grid justify-items-end mt-16">
        <p>(โปรดพลิก)</p>
      </div>

    </DocPaper>
    <DocPaper :more="true">

      <!-- กู้สามัญทั่วไป general2  -->
      <div class="border-solid border-2 border-slate-950 ">
        <br>
        <p class="text-center text-lg font-semibold ">บันทึกให้คำยินยอมของคู่สมรสผู้กู้</p> <br>
        <p class=" text-base pl-96">เขียนที่
          <FiLL class="min-w-60"
            :data="data?.receivedLocation" /> &nbsp;
        </p>
        <p class=" text-base pl-96">วันที่
          <FiLL class="min-w-64"
            :data="data?.dateReceived"
            date-format="full" />
        </p><br>
        <p class=" text-base pl-8">
          <span class="ml-20">ข้าพเจ้า</span>
          <FiLL class="min-w-44"
            :data="`${data?.fname}  ${data?.lname}`" />
          อายุ
          <FiLL :data="data?.age"
            class="min-w-20" /> ปี อยู่บ้านเลขที่
          <FiLL :data="data?.housenb"
            class="min-w-20" /> หมู่ที่
          <FiLL :data="data?.group"
            class="min-w-10" /> ถนน
          <FiLL :data="data?.road"
            class="min-w-20" /> ตำบล
          <FiLL :data="data?.subdistrict"
            class="min-w-20" />
          อำเภอ
          <FiLL :data="data?.district"
            class="min-w-20" /> จังหวัด
          <FiLL :data="data?.province"
            class="min-w-20" /> ขอทำความยินยอมให้ (นาย/นาง/นางสาว)
          <FiLL class="min-w-44"
            :data="`${data?.spouseFName}  ${data?.lname}`" /> ซึ่งเป็นคู่สมรสของข้าพเจ้าโดยถูกต้องตามกฎหมาย
          มีอำนาจทำนิติกรรมทุกชนิดกับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด และให้ถือเสมือนหนึ่งเป็นการกระทำของข้าพเจ้า
          เพื่อเป็นหลักฐานแห่งการยินยอมนี้ ข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยานผู้มีนามข้างท้ายนี้
        </p>
        <p class="text-base pl-80">
          (ลงชื่อ)............................................................คู่สมรสผู้ให้ความยินยอม</p>
        <div class="pl-96">
          (
          <FiLL class="min-w-52"
            :data="`${data?.spouseFName}  ${data?.lname}`" /> )
        </div>
        <p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
        <p class="text-base pl-96">(.............................................................)</p>
        <p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
        <p class="text-base pl-96">(.............................................................)</p>
        <br><br>
      </div>
      <br>
      <p class=" text-base pl-8">7.ช้าพเจ้าขอเสนอหลักประกันดังนี้</p>
      <p class=" text-base pl-16">7.1 สมาชิกค้ำประกัน ได้แก่</p>
      <div class="flex flex-col ml-10 text-start "
        no-line>
        <LineFiLL :data="data?.repaymentPlan"
          :limit="6">
          <template #data="{ index, item }">
            <p class=" text-base pl-8"></p>
            <p class="text-start text-base"><span class="ml-20">7.1 </span>
              <FiLL :data="index"
                number
                normal
                no-line />.
              ชื่อ
              <FiLL class="min-w-72"
                :data="`${item.fn}  ${item.ln}`" />

              เลขทะเบียนที่

              <FiLL :data="item.numberRegist"
                class="min-w-32" />

              <br>ตำแหน่ง
              <FiLL :data="item.poSition"
                class="min-w-80" /> สังกัด
              <FiLL :data="item.afiilia"
                class="min-w-56" />
              <br> เบอร์โทร
              <FiLL :data="item.phoneNumber"
                class="min-w-72" /> วงเงินค้ำประกัน
              <FiLL :data="item.limit"
                class="min-w-48" />
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base"><span class="ml-20">7.1 </span>
              <FiLL :data="index"
                number
                normal
                no-line />.
              ชื่อ
              .................................................................................
              เลขทะเบียนที่....................................<br>
              ตำแหน่ง........................................................................................สังกัด.......................................................................<br>
              เบอร์โทร.......................................................................................วงเงินค้ำประกัน.....................................................
            </p>
          </template>
        </LineFiLL>

      </div>
    </DocPaper>
    <DocPaper :more="true">
      <!-- กู้สามัญทั่วไป general3  -->

      <p class="text-base">8.ข้าพเจ้าประสงค์ขอรับเงินกู้โดย
        <FiLLBox /> เช็ค
        <FiLLBox :checked="data?.bank" /> โอน/นำเข้าบัญชีเงินฝากของข้าพเจ้า ชื่อธนาคาร
        <FiLL :data="data?.bank"
          class="min-w-32" />
        สาขา
        <FiLL :data="data?.branchBank"
          class="min-w-28" /> บัญชีเลขที่
        <FiLL :data="data?.idaccount"
          class="min-w-48" />
      </p>
      <p class="font-semibold text-sm underline underline-offset-1">ข้าพเจ้าขอรับรองว่า
        ขณะนี้ไม่อยู่ในระหว่างการถูกสอบสวนหรือต้องโทษทางวินัย และไม่อยู่ระหว่างการขอลาออกจากงานหรือโอนย้ายหน่วยงาน
        และข้าพเจ้ายินยอมปฏิบัติตามหลักเกณฑ์และเงื่อนไขที่กำหนอดทุกประการ
      </p><br>
      <p class="font-semibold text-lg text-center">บันทึกคำเสนอค้ำประกัน</p>
      <p class="text-base tracking-tight text-center">ข้าพเจ้าผู้มีชื่อต่อไปนี้
        ได้อ่านและเข้าใจจึงยินยอมผูกพันตนที่จะค้ำประกันตามคำขอกู้นี้ จึงลงลายมือชื่อไว้เป็นสำคัญ</p>


      <div class="flex flex-col ml-10 text-start">
        <LineFiLL :data="data?.repaymentPlan"
          :limit="6">
          <template #data="{ index, item }">
            <p class="text-start text-base ">
              <FiLL :data="index"
                number
                normal
                no-line />.
              ชื่อ
              <FiLL class="min-w-60"
                :data="`${item.fn}  ${item.ln}`" /> อายุ
              <FiLL :data="item.age"
                class="min-w-28" /> ปี เลขทะเบียนที่
              <FiLL :data="item.numberRegist"
                class="min-w-28" /><br>
            <p class="pl-20 text-base">(ลงชื่อ).............................................................ผู้ค้ำประกัน
            </p>
            </p>
          </template>
          <template #default="{ index }">
            <p class="text-start text-base">
              <FiLL :data="index"
                number
                normal
                no-line />.
              ชื่อ
              ...............................................................................อายุ
              ......................ปี เลขทะเบียนที่ ...................................<br>
            <p class="pl-20 text-base">
              (ลงชื่อ).................................................................ผู้ค้ำประกัน</p>
            </p>
          </template>
        </LineFiLL>

      </div>
      <br>

      <div class="grid grid-cols-2 text-end">
        <div></div>
        <div class="text-start text-base">
          (ลงชื่อ)..................................................................ผู้ขอกู้
        </div>
        <div></div>
        <div class="text-center pr-16">
          (
          <FiLL class="min-w-44"
            :data="`${data?.fname}  ${data?.lname}`" />)<br><br>
        </div>
        <div></div>
        <div class="text-start text-base">เบอร์โทร..................................................................
        </div>
        <div></div>
        <div><br></div>
        <div></div>
        <div class="text-start text-base">
          (ลงชื่อ)..................................................................คู่สมรสผู้กู้</div>
        <div></div>
        <div class="text-center pr-16">
          (
          <FiLL class="min-w-44"
            :data="`${data?.spouseFName}  ${data?.lname}`" />)<br><br>
        </div>
        <div></div>
        <div class="text-start text-base">เบอร์โทร..................................................................
        </div>
        <div></div>
        <div><br></div>
        <div><br></div>
        <div class="text-start text-base">
          (ลงชื่อ)..............................................................เจ้าหน้าที่สหกรณ์</div>
        <div></div>
        <div class="text-center pr-16">
          (
          <FiLL class="min-w-44"
            :data="`${data?.officerFName}  ${data?.officerLName}`" />)<br>
        </div>
      </div>

    </DocPaper>
    <DocPaper :more="true">
      <!-- กู้สามัญทั่วไป general4  -->


      <div class="grid grid-cols-2">

        <div class="border-solid border-2 border-slate-950 ">


          <p class="text-center text-sm font-semibold">ความเห็นของเจ้าหน้าที่</p>
          <p class="text-sm ps-2">ได้ตรวจสอบเอกสารและคำขอกู้เงินแล้วพบว่ามีความถูกต้อง ตามระเบียบ
            หลักเกณฑ์และเงื่อนไขต่างๆ
            ทุกประเภท</p>
          <p class="text-sm ps-2">หักชำระ (ณ วันที่วิเคราะห์ข้อมูล)<br>
            - หนี้เดิม
            <FiLL :data="data?.debt"
              class="min-w-32" /> บาท<br>
            - ซื้อหุ้นตามส่วนเงินกู้
            <FiLL :data="data?.remain"
              class="min-w-32" /> บาท<br>
            - เบี้ยประกัน/ฌาปนกิจ
            <FiLL :data="data?.stockvalue"
              class="min-w-32" /> บาท
          </p>
          <p class="text-center text-sm ps-2">(ลงชื่อ)................................. เจ้าหน้าที่สหกรณ์<br>
          <div class="text-center ">
            (
            <FiLL class="min-w-32"
              :data="`${data?.officerFName}  ${data?.officerLName}`" />)<br>
          </div>
          </p>

        </div>
        <div class="border-solid border-2 border-slate-950 ">
          <p class="text-center text-sm font-semibold ps-2">ความเห็นของผู้มีอำนาจพิจารณา</p>
          <p class="text-sm ps-2">
            <FiLLBox :checked="data?.debt" /> อนุมัติ จำนวน
            <FiLL :data="data?.debt"
              class="min-w-32" /> บาท
            (
            <MoneyText :data="data?.debt" />)
          </p>
          <p class="text-sm ps-2">
            <FiLLBox /> ไม่อนุมัติ เพราะ...........................................................................
            ................................................................................................................
          </p>
          <p class="text-center text-sm">(ลงชื่อ) ............................... ประธานเงินกู้<br>
          <div class="text-center ">
            (
            <FiLL class="min-w-32"
              :data="`${data?.chaimanFName}  ${data?.chaimanLname}`" />)<br>
          </div>
          </p>
          <p class="text-center text-sm ">(ลงชื่อ) ............................... กรรมการผู้จัดการ<br>
          <div class="text-center ">
            (
            <FiLL class="min-w-32"
              :data="`${data?.directorFName}  ${data?.directorLName}`" />)<br>
          </div>
          </p><br>

        </div>

      </div>
    </DocPaper>
    <DocPaper :more="true">
      <!-- กู้สามัญทั่วไป general5  -->

      <div class="flex flex-col items-center mt-32">
        <p class="font-bold text-xl">หนังสือยืนยันภาระผูกพัน</p>
      </div>
      <div class="grid justify-items-start mt-6">
        <p><span class="ml-10">ตามที่ ข้าพเจ้า ผู้กู้(นาย/นาง/นางสาว) </span>
          <FiLL class="min-w-60"
            :data="`${data?.fname}  ${data?.lname}`" /> ทะเบียนสมาชิกที่
          <FiLL :data="data?.remberRegistration"
            class="min-w-20" /> หน่วยงาน
          <FiLL :data="data?.agency"
            class="min-w-32" />
          สังกัด
          <FiLL :data="data?.affiliation"
            class="min-w-40" />
          ได้ยื่นคําขอกู้เงิน
          <FiLLBox :checked="data?.affiliation" /> พิเศษ
          <FiLLBox /> สามัญ พัฒนาคุณภาพชีวิต กับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จํากัด ในการนี้ข้าพเจ้า
          ขอให้ถ้อยคําตามความสัตย์จริง โดยหากข้าพเจ้าให้ถ้อยคําอันเป็นเท็จ ข้าพเจ้ายินดีให้สหกรณ์ ออมทรัพย์ฯ
          ดําเนินคดีตามกฎหมายแก่ข้าพเจ้าทันที
        </p>
        <p> <span class="ml-36"> - ข้าพเจ้า </span>
          <FiLLBox :checked="data?.remaining" /> มี
          <FiLLBox /> ไม่มี หนี้เงินกู้สวัสดิการกับธนาคาร
          <FiLL :data="data?.bank"
            class="min-w-32" /> จํานวนเงินหนี้คงเหลือ
          <FiLL :data="data?.remaining"
            class="min-w-32" /> บาท ส่งชําระรายเดือน ๆ ละ
          <FiLL :data="data?.makepayment"
            class="min-w-32" /> บาท
        </p>
        <p><span class="ml-36"> - ข้าพเจ้า </span>
          <FiLLBox :checked="data?.remaining" /> มี
          <FiLLBox /> ไม่มี หนี้เงินกู้กองทุนบําเหน็จบํานาญ ฯ จํานวนเงินหนี้คงเหลือ
          <FiLL :data="data?.remaining"
            class="min-w-32" /> บาท ส่งชําระรายเดือน ๆ ละ
          <FiLL :data="data?.makepayment"
            class="min-w-32" /> บาท
        </p>
        <p><span class="ml-36"> - ข้าพเจ้า </span>
          <FiLLBox /> เป็น
          <FiLLBox :checked="data?.remaining" /> ไม่เป็น สมาชิกสหกรณ์ออมทรัพย์อื่นที่มีวัตถุประสงค์ในการให้กู้ยืมเงิน
        </p>
        <p><span class="ml-36"> - ข้าพเจ้า </span>
          <FiLLBox /> อยู่
          <FiLLBox :checked="data?.remaining" /> ไม่อยู่ ในระหว่างถูกพิทักษ์ทรัพย์ในคดีล้มละลาย
          และไม่อยู่ในระหว่างถูกฟ้องในคดีล้มละลาย
        </p>
        <p><span class="ml-36"> - ข้าพเจ้าฯ</span> ยินยอมให้สหกรณ์ออมทรัพย์ฯ ตรวจสอบข้อมูลหนี้ของข้าพเจ้ากับธนาคาร /
          บริษัท
          ข้อมูลเครดิตแห่งชาติ จํากัด ได้</p>
      </div>
      <div class="flex flex-col items-center mt-32">
        <tr>
          <td class="text-center">(ลงชื่อ).................................................ผู้กู้<br>
            <div class="ps-4">
              (
              <FiLL class="min-w-40"
                :data="`${data?.fname}  ${data?.lname}`" /> )<br>
            </div>
          </td>
        </tr>
      </div>
    </DocPaper>
    <DocPaper :more="true">
      <!-- กู้สามัญทั่วไป general6  -->

      <div class="flex flex-col items-center mt-10">
        <img class="w-[120px] h-auto"
          src="https://www.saving-sskh.com/images/logo-saving.png"
          alt="Logo" />
      </div>
      <div class="grid justify-items-center ">
        <p class="font-bold text-xl">ใบสมัครเข้าเป็นสมาชิก</p>
        <p class="font-bold text-xl">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <p class="mt-5">***************************</p>
      </div>

      <div class="grid justify-items-center ">
        <p class="pl-96">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
        <p class="pl-96">วันที่
          <FiLL :data="data?.dateReceived"
            date-format="full"
            class="min-w-64" />
        </p>
      </div>
      <div class="grid justify-items-start mt-6">
        <p>เรียน คณะกรรมการดำเนินการสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
      </div>
      <div class="grid justify-items-start mt-6 text-pretty text-base  ">
        <p><span class="ml-20"> ข้าพเจ้า </span>
          <FiLL class="min-w-60"
            :data="`${data?.fname}  ${data?.lname}`" /> บ้านเลขที่
          <FiLL :data="data?.housenb"
            class="min-w-32" /> หมู่ที่
          <FiLL :data="data?.group"
            class="min-w-32" /> ถนน
          <FiLL :data="data?.road"
            class="min-w-32" /> ตำบล
          <FiLL :data="data?.subdistrict"
            class="min-w-32" />
          อำเภอ
          <FiLL :data="data?.district"
            class="min-w-32" /> จังหวัด
          <FiLL :data="data?.province"
            class="min-w-32" /> รหัสไปรษณีย์
          <FiLL :data="data?.zipcode"
            class="min-w-32" /> เบอร์โทรศัพท์
          <FiLL :data="data?.phonenb"
            class="min-w-40" />
          ได้ทราบข้อบังคับของสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด โดยตลอดเเล้ว เห็นชอบในวัตถุประสงค์
          จึงขอสมัครเข้าเป็นสมาชิกของสหกรณ์ฯ ในฐานะเป็นผู้เข้าซื้อขอจดทะเบียนสหกรณ์ฯ เเละขอให้ถ้อยคำเป็นหลักฐาน
          ดังต่อไปนี้.-
        </p>
        <p> <span class="ml-20">ข้อ </span>1. ข้าพเจ้ามีอายุ
          <FiLL :data="data?.age"
            class="min-w-20" /> ปี (เกิดวันที่
          <FiLL :data="data?.birthday"
            class="min-w-32" /> )
          เลขประจำตัวประชาชน
          <FiLL :data="data?.idcard"
            class="min-w-40" /> เลขที่บัญชีธนาคารกรุงไทย
          <FiLL :data="data?.idaccount"
            class="min-w-32" />
        </p>
        <p> <span class="ml-20">ข้อ </span>2. ข้าพเจ้าเป็นข้าราชการ/ลูกจ้างประจำ/พนักงานราชการ/พนักงานกระทรวงสาธารณสุข
          (ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราวเงินบำรุง (ตามวุฒิ)/ ลูกจ้างชั่วคราวเงินบำรุง
          ทำงานประจำตำเเหน่ง
          <FiLL :data="data?.position"
            class="min-w-32" /> เเผนก
          <FiLL :data="data?.department"
            class="min-w-32" />
          สังกัดโรงพยาบาลศรีสะเกษ ได้รับเงินเดือน
          <FiLL :data="data?.salary"
            class="min-w-20" /> บาท(
          <MoneyText :data="data?.salary" /> )
        </p>
        <p> <span class="ml-20">ข้อ </span>3. ข้าพเจ้ามิได้เป็นสมาชิกในสหกรณ์ฯ อื่นซึ่งมีวัตถุประสงค์ในการให้ยืมเงิน
        </p>
        <p> <span class="ml-20">ข้อ </span>4. ข้าพเจ้าได้เข้าเป็นสมาชิกในชั้นนี้
          ข้าพเจ้าของเเสดงความจำนงส่งเงินค่าหุ้นรายเดือน
          ต่อสหหรณ์ฯ ในอัตราเดือนละ
          <FiLL :data="data?.makepayment"
            class="min-w-20" /> บาท (มูลค่าหุ้นละ 10.00 บาท)
        </p>
        <p> <span class="ml-20">ข้อ </span>5. ข้าพเจ้าขอแถลงรายการหนี้สินทั้งหมดซึ่งข้าพเจ้ามีอยู่ดังนี้
          (แสดงข้อความละเอียด
          ของแต่ละรายคือ ชื่อและสำนักงานของเจ้าหนี้ วันเป็นหนี้ จำนวนหนี้สินตั้งแต่แรก อัตราดอกเบี้ยร้อยละต่อปี
          หลักประกันที่ให้ไว้ จำนวนต้นเงินคงเหลือ จำนวนดอกเบี้ยค้างชำระและเป็นหนี้สินเพื่อการใดให้ครบทุกรายการ)
          อย่างน้อยต้องเป็นไปตามอัตราซึ่งกำหนดไว้ในหนังสือชี้ชวน แต่ถ้าจะแสดงความจำนงสูงกว่าอัตราที่กำหนดไว้ก็
          ย่อมเป็นการดี
        </p>
        <br>
        <div class="pl-36">1.
          <FiLL :data="data?.guarantee" />
        </div>
        <p class="pl-36">2
          <FiLL :data="data?.interest" />
        </p>
        <p> <span class="ml-20">ข้อ </span>6. ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ามีความประสงค์ขอกู้เงินสหกรณ์ฯ
          เพื่อชำระหนี้ซึ่ง
          ข้าพเจ้ามีอยู่ดังกล่าวในข้อ 5 นั้น ข้าพเจ้าขอชี้แจงเหตุผลดังต่อไปนี้
        </p>
        <p> <span class="ml-20">
            <FiLL :data="data?.reason"
              class="min-w-100" />
          </span></p>
        <p> <span class="ml-20">ข้อ </span>7. ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ายินยอมและขอร้องให้ผู้บังคับบัญชา
          หรือเจ้าหน้าที่
          จ่ายเงินได้รายเดือนของข้าพเจ้าเมื่อได้รับมอบหมายจากสหกรณ์ฯ โปรดหักจำนวนเงินค่าหุ้นรายเดือนและ
          จำนวนเงินงวดชำระหนี้ ข้าพเจ้าต้องส่งต่อสหกรณ์ฯ นั้น จากเงินเดือนของข้าพเจ้าเมื่อจ่ายเพื่อส่งต่อให้
          สหกรณ์ฯ ด้วย
        </p>
      </div>
    </DocPaper>
    <DocPaper :more="true">
      <!-- กู้สามัญทั่วไป general7  -->

      <div class="grid justify-items-start mt-6 text-pretty text-base ">
        <p class="indent-20">ข้อ 8. ข้าพเจ้าได้ทำหนังสือยินยอมให้ผู้บังคับบัญชาหักเงินได้รายเดือนเเละเงินได้อื่นๆ จำนวน
          3
          ฉบับ มอบไว้ให้
          สหกรณ์ หน่วยงานต้นสังกัด เเละสำหรับข้าพเจ้าเก็บไว้เป็ยหนักฐาน
        </p>
        <p class="indent-20">ข้าพเจ้าได้อ่านข้อความในหนังสือกู้เงินนี้โดยตลอดเเล้วเห็นว่าถูกต้อง
          จึงได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยาน
        </p>

        <div class="grid grid-cols-2 justify-start mt-6">
          <div class="items-start  text-center">
            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ).................................................ผู้กู้
              </td>
            </tr>
            <tr>
              <td class="text-center pl-16 ">(
                <FiLL class="min-w-40"
                  :data="`${data?.fname}  ${data?.lname}`" />)
              </td>
            </tr>

            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ).................................................คู่สมรสผู้กู้
              </td>
            </tr>
            <tr>
              <div class="text-center pl-16">
                (
                <FiLL class="min-w-40"
                  :data="`${data?.spouseFName}  ${data?.lname}`" />)<br>
              </div><br>

            </tr>

          </div>
          <div class="items-end ">

            <tr>
              <td class="text-left pl-6 ">(ลงชื่อ).................................................พยาน(สมาชิก)
              </td>
            </tr>
            <tr>
              <td class="text-left pl-16">(................................................)
              </td>
            </tr><br>

            <tr>
              <td class="text-left pl-6 ">(ลงชื่อ).................................................พยาน(สมาชิก)
              </td>
            </tr>
            <tr>
              <td class="text-left pl-16">(................................................)
              </td>
            </tr>

          </div>
        </div>
        <div class="grid grid-cols-2 justify-center mt-6">
          <div class="items-start  text-nowrap">

            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ).................................................เจ้าหน้าที่สหกรณ์
              </td>
            </tr>
            <tr>
              <div class="text-center mr-2">
                (
                <FiLL class="min-w-40"
                  :data="`${data?.officerFName}  ${data?.officerLName}`" />)<br>

              </div><br>
            </tr>

            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ).................................................ประธานกรรมการเงินกู้
              </td>
            </tr>
            <tr>
              <div class="text-center mr-2">
                (
                <FiLL class="min-w-40"
                  :data="`${data?.chaimanFName}  ${data?.chaimanLname}`" />)<br>
              </div><br>
            </tr>

            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ).................................................กรรมการผู้จักการ
              </td>
            </tr>
            <tr>
              <div class="text-center mr-2">
                (
                <FiLL class="min-w-40"
                  :data="`${data?.directorFName}  ${data?.directorLName}`" />)<br>
              </div><br>

            </tr>

          </div>
        </div>

        <div class="grid grid-cols-1  justify-center mt-10 h-26">
          <div class="items-start text-nowrap ">
            <div class="border-2 border-black pr-96 px-8 ">
              <p class="text-sm font-semibold">หมายเหตุ</p>
              <p class="text-sm">1.โปรดกรอกข้อมูลให้ถูกต้องครบถ้วย โดยไม่ต้องลงวันที่</p>
              <p class="text-sm ">2.ให้สมาชิกสหกรณ์เป็นพยานลายมือชื่อผู้กู้ <span
                  class="font-semibold">ยกเว้นผู้ค้ำประกันเป็นพยานไม่ได้</span></p>
              <p class="text-sm mb-2">3.เงินกู้ตามสัญญานี้อาจมีผลผูกพันให้คู่สมรสเป็นลูกหนี้ร่วมกันกับผู้กู้ตาม ม.1490
                ประมวลกฏหมายเเพ่งเเละพาณิชย์</p>
            </div>
          </div>
        </div>

        <p class="mt-16"><span class="ml-10">ข้าพเจ้า </span>
          <FiLL class="min-w-32"
            :data="`${data?.fname}  ${data?.lname}`" />ได้รับเงินกู้จำนวน
          <FiLL class="min-w-20"
            :data="data?.debt" /> บาท
          (
          <MoneyText :data="data?.debt" />)ตามหนังสือกู้เงินสำหรับเงินกู้สามัญทั่วไปนี้เป็นการถูกต้องเเล้ว
          ณ วันที่
          <FiLL :data="`${data?.dateReceived}`"
            date-format="full" />
        </p>
        <div class="grid grid-cols-3 justify-center mt-6">
          <div></div>
          <div class="items-start  text-nowrap">

            <tr>
              <td class="text-left pl-24 ">(ลงชื่อ)...................................................ผู้รับเงิน
              </td>
            </tr>
            <tr>
              <div class="pl-32">
                (
                <FiLL class="min-w-48"
                  :data="`${data?.fname}  ${data?.lname}`" />)<br>

              </div><br>
            </tr>

            <tr>
              <td></td>
            </tr>

            <tr>
              <td></td>
            </tr>

            <tr>
              <td></td>
            </tr>

            <tr>
              <td></td>
            </tr>

            <tr>
              <td class="text-left pl-24  ">
                (ลงชื่อ)...................................................เจ้าหน้าที่ผู้จ่ายเงิน
              </td>
            </tr>
            <tr>
              <div class="ps-32">
                (
                <FiLL class="min-w-48"
                  :data="`${data?.paymentFname}  ${data?.paymentLname}`" />)<br>
              </div><br>
            </tr>

          </div>
        </div>



      </div>


    </DocPaper>
    <DocPaper :more="true">

      <!-- กู้สามัญทั่วไป general8  -->
      <div class="grid justify-items-end">
        <p>เเบบ ส.3/2565</p>
      </div>

      <div class="grid grid-cols-3 justify-center">
        <div class="flex items-start mt-4">
          <div class="border-2 border-black p-2">
            <p>หนังสือกู้ที่
              <FiLL class="min-w-24"
                :data="data?.loanLetterNumber" />
            </p>
            <p>ชื่อผู้กู้
              <FiLL class="min-w-32"
                :data="`${data?.fname}  ${data?.lname}`" />
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img class="w-[120px] h-auto"
            src="https://www.saving-sskh.com/images/logo-saving.png"
            alt="Logo" />
          <p class=" font-bold text-xl text-center col-span-2">หนังสือค้ำประกันเงินกู้สามัญ</p>
        </div>

        <div class="flex flex-col items-end mt-4">

          <div class="border-2 border-black p-2">
            <p>ทะเบียนผู้ค้ำที่
              <FiLL class="min-w-16"
                :data="data?.loanAccountNumber" />
            </p>
            <p>เล่ม
              <FiLL class="min-w-12"
                :data="data?.contract" /> หน้า
              <FiLL class="min-w-12"
                :data="data?.contract" />
            </p>
          </div>
        </div>
      </div>

      <div class="grid justify">
        <p class="pl-69 text-sm text-end">เขียนที่
          <FiLL class="min-w-56"
            :data="data?.receivedLocation" />
        </p>
        <p class="text-sm text-end">วันที่
          <FiLL class="min-w-56"
            :data="data?.dateReceived"
            date-format="full" />
        </p>
      </div>

      <div class="grid justify-items-start  text-base ">
        <p><span class="ml-10">ข้าพเจ้า </span>
          <FiLL class="min-w-40"
            :data="`${data?.fname}  ${data?.lname}`" /> สมาชิกเลขทะเบียนที่
          <FiLL class="min-w-28"
            :data="data?.remberRegistration" /> อายุ
          <FiLL class="min-w-28"
            :data="data?.age" /> ปี
          เลขประจำตัวประชาชน
          <FiLL class="min-w-44"
            :data="data?.idcard" /> ปรากฏตามสำเนาบัตรที่เเนบท้ายนี้
          เป็น
          <FiLLBox :checked="data?.idcard" /> ข้าราชการ/ลูกจ้างประจำ
          <FiLLBox /> พนักงานราชการ
          <FiLLBox /> พนักงานกระทรวงสาธารณสุข
          <FiLLBox /> ลูกจ้าง
          <FiLLBox /> อื่นๆ................................. ตำเเหน่ง
          <FiLL class="min-w-28"
            :data="data?.position" /> สังกัด
          <FiLL class="min-w-44"
            :data="data?.affiliation" />
          เงินเดือน/เงินประจำตำเเหน่ง
          <FiLL class="min-w-28"
            :data="data?.salary" /> บาท หน่วยงาน
          <FiLL class="min-w-28"
            :data="data?.agency" /> เบอร์โทรภายใน
          <FiLL class="min-w-28"
            :data="data?.phonenb" />
          ที่อยู่เลขที่
          <FiLL class="min-w-20"
            :data="data?.housenb" /> หมู่ที่
          <FiLL class="min-w-10"
            :data="data?.group" /> ถนน
          <FiLL class="min-w-28"
            :data="data?.road" /> ตำบล
          <FiLL class="min-w-28"
            :data="data?.subdistrict" /> อำเภอ
          <FiLL class="min-w-28"
            :data="data?.district" />
          จังหวัด
          <FiLL class="min-w-28"
            :data="data?.province" /> รหัสไปรษณีย์
          <FiLL class="min-w-28"
            :data="data?.zipcode" /> เบอร์โทร
          <FiLL class="min-w-36"
            :data="data?.phonenb" />
        </p>
        <p>ข้าพเจ้าทำหนังฉบับนี้ให้เเก่สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด เลขที่ 859 ถนนกสิกรรม ตำบลเมืองใต้
          อำเภอเมือง
          จังหวัดศรีสะเกษ 33000
          ซึ่งต่อไปนี้เรียกว่า “ สหกรณ์ ” เพื่อเป็นหลักฐานดังต่อไปนี้
        </p>
        <p><span class="ml-10">ข้อ 2.</span> ถ้าผู้กู้ผิดนัดชำระหนี้ต่อสหกรณ์
          ข้าพเจ้ายอมชำระหนี้ให้สหกรณ์สำหรับหนี้เงินกู้ตามข้อ 1. จำนวนที่ค้างชำระรวมทั้งดอกเบี้ย
          เเละค่าสินไหมทดเเทน ตลอดจนค่าภาระติดพันอันเป็นอุปกรณ์เเหน่งหนี้นั้นด้วย
        </p>
        <p><span class="ml-10">ข้อ 3.</span> เมื่อผู้กู้ผิดนัดชำระหนี้ ให้สหกรณ์มีหนังสือบอกกล่าวเเก่ข้าพเจ้า ณ
          บ้านเลขที่
          <FiLL class="min-w-20"
            :data="data?.housenb" /> หมู่ที่
          <FiLL class="min-w-10"
            :data="data?.group" /> ถนน
          <FiLL class="min-w-28"
            :data="data?.road" /> ตำบล
          <FiLL class="min-w-28"
            :data="data?.subdistrict" />
          อำเภอ
          <FiLL class="min-w-28"
            :data="data?.district" /> จังหวัด
          <FiLL class="min-w-28"
            :data="data?.province" /> รหัสไปรษณีย์
          <FiLL class="min-w-28"
            :data="data?.zipcode" /> เบอร์โทร
          <FiLL class="min-w-36"
            :data="data?.phonenb" />
          หรือตามที่ข้าพเจ้าได้เเจ้งเปลี่ยนเเปลงให้สหกรณ์ทราบภายหลัง
        </p>
        <p><span class="ml-10">ข้อ 4.</span> ถ้ามีการเปลี่ยนแปลงสถานที่บอกกล่าวโดยที่ข้าพเจ้าไม่แจ้งให้สหกรณ์ทราบ
          หากสหกรณ์ได้มีหนังสือบอกกล่าว ณ สถานที่
          ตามข้อ 3.
          ข้าพเจ้ามิอาจปฏิเสธหรือโต้แย้งใดๆว่าหนังสือบอกกล่าวยังไปไม่ถึงหรือปฏิเสธว่าสหกรณ์ยังไม่มีหนังสือบอกกล่าวข้าพเจ้า
        </p>
        <p><span class="ml-10">ข้อ 5.</span> ข้าพเจ้ายอมรับผูกพันว่าการออกจากการเป็นสมาชิกสหกรณ์ของผู้กู้
          ไม่ว่าเพราะเหตุใดๆ
          ไม่เป็นเหตุให้ข้าพเจ้าหลุดพ้นจากการค้ำประกันรายนี้
          จนกว่าผู้กู้ที่ข้าพเจ้าค้ำประกันไว้นี้จะได้ให้สมาชิกอื่นซึ่งคณะกรรมการดำเนินการของสหกรณ์เห็นสมควรเข้าเป็นผู้ค้ำ
          ประกันแทนข้าพเจ้า
        </p>
        <p><span class="ml-10">ข้อ 6.</span> เมื่อสหกรณ์ได้แจ้งให้ข้าพเจ้าทราบว่า
          ข้าพเจ้าต้องชำระหนี้ให้แก่สหกรณ์เมื่อผู้กู้ไม่ชำระหนี้
          ข้าพเจ้ายินยอมให้ผู้บังคับบัญชาของข้าพเจ้าหรือหัวหน้าการเงินของหน่วยงานที่ข้าพเจ้าสังกัดผู้จ่ายเงินเดือน
          เงินบำเหน็จเงินบำนาญ หรือเงินได้อื่นๆ หักเงินได้ดังกล่าวของ
          ข้าพเจ้าเพื่อส่งต่อให้สหกรณ์ รวมทั้งยินยอมให้สหกรณ์ใช้สิทธิยึดหน่วงทรัพย์สินใดๆที่ข้าพเจ้าพึงได้รับจากสหกรณ์
          ได้แก่ เงินค่าหุ้น เงินปันผลเงินเฉลี่ยคืน เงินฝากและเงินอื่นๆซึ่งอยู่ในการครอบครองของสหกรณ์ไว้เพื่อรอชำระหนี้
          หรือเพื่อใช้ชำระหนี้เมื่อผู้กู้ไม่ชำระ
        </p>
        <p><span class="ml-10">ข้อ 7.</span>
          ข้าพเจ้าได้ทำหนังสือยินยอมให้ผู้บังคับบัญชาหักเงินได้รายเดือนและเงินอื่นใดของข้าพเจ้ามอบไว้ให้สหกรณ์
          เพื่อแสดงต่อหน่วยงานต้นสังกัดของข้าพเจ้าหักเงิน ณ ที่จ่ายให้สหกรณ์
          และคำยินยอมนี้ให้มีตลอดไปจนกว่าสหกรณ์จะได้รับชำระหนี้จนสิ้นเชิง
          การทำหนังสือค้ำประกันฉบับนี้ข้าพเจ้าพิจารณาไตร่ตรองโดยรอบคอบและสมัครใจเป็นผู้ค้ำประกัน
          ข้าพเจ้าทราบและเข้าใจดีแล้วว่าต้องรับผิดต่อสหกรณ์ในฐานะเป็นผู้ค้ำประกันถ้าผู้กู้ผิดนัดชำระหนี้ ดังนั้น
          เพื่อเป็นหลักฐานจึงลงลายมือชื่อพร้อมกับพยานไว้เป็นหลักฐาน
        </p>
        <div class="grid grid-cols-2 justify-center mt-1  ">
          <div class="items-start  text-nowrap">
            <tr>
              <td class="text-left pl-14  ">(ลงชื่อ).................................................ผู้ค้ำประกัน
              </td>
            </tr>
            <tr>
              <td class="text-center ">(
                <FiLL class="min-w-48"
                  :data="`${data?.jjName}  ${data?.lname}`" />)<br>
              </td>
            </tr>
            <tr>

              <td class="text-left pl-14  ">(ลงชื่อ).................................................พยาน(สมาชิก)
              </td>
            </tr>
            <tr>
              <td class="text-center ">(........................................................)
              </td>
            </tr>
          </div>
          <div class="items-end ">
            <tr>
              <td class="text-left  ">
                (ลงชื่อ).................................................คู่สมรส(ผู้ค้ำ)ให้คำยินยอม
              </td>
            </tr>
            <tr>
              <div class="pl-12">
                (
                <FiLL class="min-w-48"
                  :data="`${data?.spouseFName}  ${data?.lname}`" />)<br>
              </div><br>
            </tr>

            <tr>
              <td class="text-left  ">(ลงชื่อ).................................................พยาน (เจ้าหน้าที่สหกรณ์)
              </td>
            </tr>
            <tr>
              <div class="pl-12">
                (
                <FiLL class="min-w-48"
                  :data="`${data?.officerFName}  ${data?.officerLName}`" />)<br>
              </div><br>
            </tr>
          </div>
        </div>
      </div>

      <div class="grid justify-items-end ">
        <p>(โปรดพลิก)</p>
      </div>
    </DocPaper>
    <DocPaper :more="true">

      <!-- กู้สามัญทั่วไป general9  -->
      <div class="border-solid border-2 border-slate-950 ">
        <br>
        <p class="text-center text-lg font-semibold ">บันทึกให้คำยินยอมของคู่สมรสผู้ค้ำประกัน</p> <br>
        <p class=" text-base pl-96">เขียนที่
          <FiLL :data="data?.receivedLocation"
            class="min-w-70" />
        </p>
        <p class=" text-base pl-96">วันที่ &nbsp;
          <FiLL :data="data?.dateReceived"
            class="min-w-60"
            date-format="full" />
        </p><br>
        <p class=" text-base"><span class="ml-16">ข้าพเจ้า </span>
          <FiLL class="min-w-40"
            :data="`${data?.fname}  ${data?.lname}`" />
          อายุ
          <FiLL class="min-w-14"
            :data="data?.age" /> ปี อยู่บ้านเลขที่
          <FiLL class="min-w-16"
            :data="data?.housenb" /> หมู่ที่
          <FiLL class="min-w-12"
            :data="data?.group" /> ถนน
          <FiLL class="min-w-28"
            :data="data?.road" /> ตำบล
          <FiLL class="min-w-28"
            :data="data?.subdistrict" />
          อำเภอ
          <FiLL class="min-w-28"
            :data="data?.district" /> จังหวัด
          <FiLL class="min-w-28"
            :data="data?.province" /> ขอทำความยินยอมให้ (นาย/นาง/นางสาว)
          <FiLL class="min-w-40"
            :data="`${data?.fname}  ${data?.lname}`" /> ซึ่งเป็นคู่สมรสของข้าพเจ้าโดยถูกต้องตามกฎหมาย
          มีอำนาจทำนิติกรรมทุกชนิดกับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด และให้ถือเสมือนหนึ่งเป็นการกระทำของข้าพเจ้า
          เพื่อเป็นหลักฐานแห่งการยินยอมนี้ ข้าพเจ้าได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยานผู้มีนามข้างท้ายนี้
        </p>
        <p class="text-base pl-80">
          (ลงชื่อ)............................................................คู่สมรสผู้ให้ความยินยอม</p>
        <div class="pl-96">
          (
          <FiLL class="min-w-52"
            :data="`${data?.spouseFName}  ${data?.lname}`" />)<br>

        </div><br>
        <p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
        <p class="text-base pl-96">(.............................................................)</p>
        <p class="text-base pl-80">(ลงชื่อ)............................................................พยาน(สมาชิก)</p>
        <p class="text-base pl-96">(.............................................................)</p>
        <br><br>
      </div>
    </DocPaper>

  </main>
</template>
<script setup lang="ts">

// import Index from '../index.vue';

const { data } = await useFetch<any>('/api/loanGeneralG2');
</script>
