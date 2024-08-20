<template>
  <main>
      <PaperDoc> <!--หน้าที่ 1-->
          <div class="mx-3">
              <h1 class="text-xl text-center font-semibold mb-2 mt-4 underline">สิทธิหน้าที่สมาชิก</h1>

              <div class="mb-2">
                  <p class="font-semibold mb-1">1.เอกสารที่ต้องใช้ประกอบการสมัครสมาชิกใหม่</p>
                  <table class="table-auto text-left ml-24">
                      <tr>
                          <td><span class="text-xl">-</span>สำเนาบัตรประชาชน</td>
                          <td>จำนวน</td>
                          <td class="px-10">1</td>
                          <td class="pr-5">ฉบับ</td>
                      </tr>
                      <tr>
                          <td><span class="text-xl">-</span>สำนักงานบัญชีธนาคารกรุงไทย</td>
                          <td>จำนวน</td>
                          <td class="px-10">1</td>
                          <td class="pr-5">ฉบับ</td>
                      </tr>
                      <tr>
                          <td colspan="4"><span class="text-xl">-</span>ต้องมีผู้บังคับบัญชาระดับชำนาญการขึ้นไปลงนามในบัตรลายมือชื่อ</td>
                      </tr>
                  </table>
              </div>

              <div class="mb-2">
                  <p class="font-semibold mb-1">2.การส่งทุนเข้าร่วมหุ้นรายเดือน</p>
                  <table class="table-auto text-center mx-auto border-2">
                      <thead>
                          <tr>
                              <th class="px-4 py-1 border-2">เงินเดือน</th>
                              <th class="px-4 py-1 border-2" colspan="2">การถือหุ้นรายเดือน(บาท)</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td class="px-4 py-1 border-2">น้อยกว่า 10,000</td>
                              <td class="px-4 py-1 border-2">ไม่น้อยกว่า</td>
                              <td class="px-4 py-1 border-2">100</td>
                          </tr>
                          <tr>
                              <td class="px-4 py-1 border-2">10,001-20,000</td>
                              <td class="px-4 py-1 border-2">ไม่น้อยกว่า</td>
                              <td class="px-4 py-1 border-2">200</td>
                          </tr>
                          <tr>
                              <td class="px-4 py-1 border-2">20,001-30,000</td>
                              <td class="px-4 py-1 border-2">ไม่น้อยกว่า</td>
                              <td class="px-4 py-1 border-2">300</td>
                          </tr>
                          <tr>
                              <td class="px-4 py-1 border-2">30,001-40,000</td>
                              <td class="px-4 py-1 border-2">ไม่น้อยกว่า</td>
                              <td class="px-4 py-1 border-2">400</td>
                          </tr>
                          <tr>
                              <td class="px-4 py-1 border-2">40,001 ขึ้นไป</td>
                              <td class="px-4 py-1 border-2">ไม่น้อยกว่า</td>
                              <td class="px-4 py-1 border-2">500</td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <p class=" pl-2 pr-24 py-2"><span class="font-bold underline">หมายเหตุ</span> ถือหุ้นได้ไม่เกินร้อยละ 30 ของเงินเดือนรวมเงินประจำตำแหน่ง</p>
                              </td>
                              
                          </tr>
                      </tbody>
                  </table>
              </div>

              <div class="mb-2">
                  <p class="font-semibold mb-1">3.การยื่นกู้ประเภทต่างๆ</p>
                  <ul>
                      <li><span class="text-xl pl-24">-</span> 
                          กู้ฉุกเฉิน เป็นสมาชิกครบ 6 เดือน สามารถกู้ฉุกเฉินได้ไม่เกินทุนเรือนหุ้นที่ถืออยู่ เช่น ครบ 6 เดือน มีหุ้นจำนวน
                          6,000 บาท ก็กู้ฉุกเฉินได้ไม่เกิน 6,000 บาท ชำระได้ไม่เกิน 12 งวด
                      </li>
                      <li><span class="text-xl pl-24">-</span> 
                          กู้สามัญ / ผู้พิเศษต้องเป็นสมาชิก 3 เดือน สามารถกู้ได้ตามระเบียบเงินกู้
                      </li>
                      <li><span class="text-xl pl-24">-</span> 
                          กู้สามัญ (กู้หุ้น) เป็นสมาชิกครบ 1 ปี สามารถกู้หุ้นได้ การกู้หุ้น ต้องไม่มีหนี้สามัญหรือพิเศษมากกว่าหุ้นที่ถืออยู่
                          ณ ตอนนั้น เพราะกู้หุ้นคือการกู้สามัญ จะมีการหักกลบลบหนี้เดิมทั้งสามัญหรือพิเศษ และฉุกเฉินให้หมด กู้หุ้นได้ไม่เกิน
                          90% ของทุนเรือนหุ้นที่มีอยู่ในสหกรณ์
                      </li>
                  </ul>
              </div>

              <div class="mb-2">
                  <p class="font-semibold mb-1">4.สิทธิประโยชน์อื่นๆ</p>
                  <ul>
                      <li><span class="text-xl pl-24">-</span> 
                          ทุนสวัสติการเพื่อสมาชิก กรณีบิดา มารดา คู่สมรส บุตรที่ยังไม่บรรสุนิติภาวะเสียชีวิต สมาชิกจะได้รับเงินสงเคราะห์ศพ
                      </li>
                      <li><span class="text-xl pl-24">-</span> 
                          ทุนสวัสดิการเพื่อสมาชิก กรณีสมาชิกเสียชีวิต ทายาทจะได้รับเงินสงเคราะห์ศพ
                      </li>
                      <li><span class="text-xl pl-24">-</span> 
                          ทุนสวัสดิการเพื่อสมาชิก กรณีเกษียณอายุราชการแล้วลาออกจากสหกรณ์ฯ
                      </li>
                  </ul>
              </div>

              <div class="mb-2">
                  <p class="font-semibold mb-1">5.ข้อควรปฏิบัติ</p>
                  <p><span class="pl-24">-</span> 
                      หากสมาชิกเงินเดือนติตลบ หรือเคยติดลบ ต้องตรวจสอบข้อมูลที่สหกรณ์ออมทรัพย์ฯ ก่อนวันสิ้นเดือน เพือนำ
                      จ่ายให้กับสหกรณ์ออมทรัพย์ให้เสร็จก่อนวันสิ้นเดือน เป็นการรักษาสิทธิ์ในการรับ เงินเฉลี่ยคืน (เงินเฉลี่ยคืน คือ
                      เงินจากดอกเบี้ยเงินกู้สะสมตลอดทั้งปีที่เราจ่ายให้กับสหกรณ์ออมทรัพย์ฯ จะนำมาคำนวณในวันสิ้นปีงบประมาณตามมติ
                      ที่ประชุมใหญ่ ในการจัดสรรกำไรสุทธิ)
                  </p>
              </div>

              <div class="mb-2">
                  <p>
                      <span class="font-bold">6.สมาชิกที่เปลี่ยนแปลงข้อมูล</span> 
                      ต้องนำเอกสารแจ้งการเปลี่ยนแปลงข้อมูลไปยังสหกรณ์ออมทรัพย์ด้วย
                  </p>
              </div>

              <div class="mb-2">
                  <p>
                      <span class="font-bold">7.เบอร์โทรศัพท์</span> 
                      สหกรณ์ออมทรัพย์ฯ โทรสายนอก 045-61 1394 โทรภายใน 3773 , 3883
                  </p>
                  <p>
                      ช่องทางออนไลน์ ID Line : @rbe7329c เว็บไซต์ : www.saving-sskh.com
                  </p>
                  <p>
                      Facebook : กลุ่มสมาชิกสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
                  </p>
              </div>
          </div>
      </PaperDoc>

      <MorePaperDoc> <!--หน้าที่ 2-->
          <div class="flex flex-col">
              <p class="text-center mb-4">ชื่อสมาชิก _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ เลขทะเบียนที่ _ _ _ _ _ _ _ _ _ _ _ หน่วย _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>
              <hr class="my-4 border-b-2 border-black">
              <p class="text-center mb-4">บัตรตัวอย่างลายมือชื่อสมาชิก</p>
              <hr class="my-1 border-b-1 border-black">
              <hr class="my-1 border-b-1 border-black">
              
              <div class="flex justify-between text-center">
                  <div class="flex ">
                      <p class="ml-20 text-center mt-3 ml-50">ตัวอย่างลายมือชื่อ</p>
                  </div>
                  <div class="flex items-center">
                      <p class="mr-20 text-center mt-3">วันที่ _ _ _ _ /_ _ _ _ /_ _ _ _</p>
                  </div>
              </div>
              
              <hr class="my-1 border-b-1 border-black">
              <hr class="my-1 border-b-1 border-black">
              <ol class="list-decimal mx-auto max-w-xs">
                  <li class="text-center mb-2 mt-6"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
                  <li class="text-center mb-2"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
                  <li class="text-center mb-3"> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</li>
              </ol>
              <div>
                  <p class="text-center mb-1">(โปรดลงลายมือชื่อคนละ 3 ลายมือชื่อ)</p>
                  <p class="text-center mb-4">ขอรับรองว่าลายมือชื่อข้างบนนี้ เป็นลายมือชื่อของสมาชิกผู้นี้จริง</p>
                  <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
                  <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
                  <p class="text-center mb-4 ml-19">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ พยาน</p>
                  <p class="text-center mb-4 mr-9">(_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _)</p>
              </div>
          </div>
      </MorePaperDoc>

      <MorePaperDoc> <!--หน้าที่ 3-->
          <div class="flex flex-col items-center">
              <table class="table-auto w-full border-collapse border">
                  <tr>
                  <td rowspan="2" class="border-2 border-black text-center">วัน เดือน ปี</td>
                  <td rowspan="2" class="border-2 border-black text-center">เงินได้ รายเดือน</td>
                  <td colspan="2" class="border-2 border-black text-center">เป็นผู้กู้ตามหนังสือกู้</td>
                  <td colspan="2" class="border-2 border-black text-center">เป็นผู้คํ้าประกันตาม</td>
                  <td rowspan="2" class="border-2 border-black text-center">เจ้าหน้าที่</td>
                  <td rowspan="2" class="border-2 border-black text-center">หมายเหตุ</td>
                  </tr>
                  <tr>
                  <td class="border-2 border-black text-center p-2">ที่</td>
                  <td class="border-2 border-black text-center">วันที่</td>
                  <td class="border-2 border-black text-center">หนังสือกู้ที่</td>
                  <td class="border-2 border-black text-center">บัญชีเงินกู้ที่</td>
                  </tr>
                  <tbody>
                  <tr v-for="i in 12" :key="i">
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted">&nbsp;</td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                      <td class="border-x-2 border-black text-center" style="border-bottom:2px dotted"></td>
                  </tr>
                  <tr class="min-h-1">
                      <td class="border-b-2 border-x-2 border-black min-h-1">&nbsp;</td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                      <td class="border-b-2 border-x-2 border-black min-h-1"></td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </MorePaperDoc>
      <MorePaperDoc> <!--หน้าที่ 4-->
          <div class="mx-3">
              <div class="flex flex-col items-center">
                  <img class="w-[120px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
              </div>
              <p class="font-bold text-xl text-center col-span-2">
                  ใบสมัครเข้าเป็นสมาชิก
              </p>
              <p class="font-bold text-xl text-center col-span-2">
                  สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
              </p>
              <p class=" text-xl text-center col-span-2 mt-4">
                  *********************************
              </p>
              <div class="flex flex-col items-end mt-3">
                  <div class="grid justify-end mt-5 mb-5 ">
                      <div class="items-center mr-10">
                          <p class="text-center">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                          
                          <p> วันที่ <FiLL :data="data?.dateReceived"date-format="full" no-line/> </p>
                      </div>
                  </div>
              </div>
              <div class="flex flex-col mt-1">
                  <p>เรียน คณะกรรมการดำเนินการสหกรณ๋ออมทรัพย์ โรงพยาบาลศรีสะเกษ จำกัด</p>
                  <div class="flex flex-col">
                      <p class="mt-6  ">
                          <span class="ml-20">ข้าพเจ้า</span>
                          <FiLL class="min-w-60" :data="`${data?.fname}  ${data?.lname}`"/> บ้านเลขที่ <FiLL :data="data?.houseNumber" class="min-w-32"/> หมู่ที่ <FiLL :data="data?.village" class="min-w-32"/>
                          ถนน <FiLL :data="data?.road" class="min-w-36"/> ตำบล <FiLL :data="data?.district" class="min-w-36"/> อำเภอ <FiLL :data="data?.canton" class="min-w-32"/> จังหวัด <FiLL :data="data?.province" class="min-w-36"/>
                          รหัสไปรษณีย์ <FiLL :data="data?.zipCode" class="min-w-36"/> เบอร์โทรศัพท์ <FiLL :data="data?.phoneNo" class="min-w-40"/>   
                          ได้ทราบข้อบังคับของสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด โดยตลอดแล้ว เห็นชอบในวัตถุประสงค์ จึงขอสมัครเข้าเป็นสมาชิกของสหกรณ์ฯ ในฐานะเป็นผู้เข้าซื้อขอจดทะเบียนสหกรณ์ฯ และขอให้ถ้อยคำเป็นหลักฐาน ดังต่อไปนี้.-
                      </p>
                      <p> 
                          <span class="ml-20">ข้อ 1.</span> ข้าพเจ้ามีอายุ <FiLL :data="data?.age" class="min-w-24" /> ปี ( เกิดวันที่ <FiLL :data="data?.birthDay" class="min-w-20" /> เดือน <FiLL :data="data?.birthMonth" class="min-w-32" /> พ.ศ <FiLL :data="data?.birthYear" class="min-w-20" /> ) เลขประจำตัวประชาชน <FiLL :data="data?.idenNumber" class="min-w-36" /> เลขที่บัญชีธนาคารกรุงไทย <FiLL :data="data?.bankAccountNumber" class="min-w-40" /> 
                      </p>
                      <p>
                          <span class="ml-20">ข้อ 2.</span> ข้าพเจ้าเป็นข้าราชการ/ลูกจ้างประจำ/ พนักงานราชการ/พนักงานกระทรวงสาธารณสุข(ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราวเงินบำรุง (ตามวุฒิ)
                          / ลูกจ้างชั่วคราวเงินบำรุง ทำงานประจำตำแหน่ง <FiLL :data="data?.position" class="min-w-40" /> แผนก <FiLL :data="data?.depart" class="min-w-40" /> สังกัดโรงพยาบาลศรีสะเกษ ได้รับเงินเดือน <FiLL :data="data?.monthlyMoney" class="min-w-20" /> บาท ( <MoneyText :data="data?.monthlyIncome"/> )
                      </p>
                      <p>
                          <span class="ml-20">ข้อ 3.</span> ข้าพเจ้ามิได้เป็นสมาชิกในสหกรณ์ฯ อื่นซึ่งมีวัตถุประสงค์ในการให้ยืมเงิน
                      </p>
                      <p>
                          <span class="ml-20">ข้อ 4.</span> ข้าพเจ้าได้เข้าเป็นสมาชิกในชั้นนี้ ข้าพเจ้าของแสดงความจำนงส่งเงินค่าหุ้นรายเดือนต่อสหกรณ์ฯ ในอัตราเดือนละ <FiLL :data="data?.mothlyPayment" class="min-w-32" /> บาท (มูลค่าหุ้นละ 10.00 บาท)
                      </p>
                      <p>
                          <span class="ml-20">ข้อ 5.</span> ข้าพเจ้าขอแถลงรายการหนี้สินทั้งหมดซึ่งข้าพเจ้ามีอยู่ดังนี้ (แสดงข้อความละเอียดของแต่ละรายคือ ชื่อและสำนักงานของเจ้าหนี้ วันเป็นหนี้ จำนวนหนี้สินตั้งแต่แรก อัตราดอกเบี้ยร้อยละต่อปี
                      หลักประกันที่ให้ไว้ จำนวนต้นเงินคงเหลือ จำนวนดอกเบี้ยค้างชำระและเป็นหนี้สินเพื่อการใดให้ครบทุกรายการ)
                      อย่างน้อยต้องเป็นไปตามอัตราซึ่งกำหนดไว้ในหนังสือขี้ชวน แต่ถ้าจะแสดงความจำนงสูงกว่าอัตราที่กำหนดไว้ก็ย่อมเป็นการดี</p>
                      <p class="pl-36">
                          1. <FiLL class="min-w-80" :data="`${data?.office}  ${data?.debt} ${data?.annualRate} ${data?.guarantee} ${data?.remain}`"/>
                         
                      </p>    
                      <p class="pl-36">
                          <FiLL class="min-w-80" :data="`${data?.interest} ${data?.reason}`"/>
                      </p>
                      <p>
                          <span class="ml-20">ข้อ 6.</span>ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ามีความประสงค์ขอกู้เงินสหกรณ์ฯ เพื่อชำระหนี้ซึ่งข้าพเจ้ามีอยู่ดังกล่าวในข้อ 5 นั้น ข้าพเจ้าขอขี้แจงเหตุผลตังต่อไปนี้.
                      </p>
                      <p class="ml-20 break-all flex mt-2 pl-16"><FiLL :data="data?.reason" /></p>
                      
                      <p class="mt-2">
                          <span class="ml-20">ข้อ 7.</span> ถ้าข้าพเจ้าได้เป็นสมาชิก ข้าพเจ้ายินยอมและขอร้องให้ผู้บังคับบัญชา หรือเจ้าหน้าที่จ่ายเงินได้รายเดือนของข้าพเจ้าเมื่อได้รับมอบหมายจากสหกรณ์ฯ โปรดหักจำนวนเงินค่าหุ้นรายเดือนและ
                          จำนวนเงินงวดชำระหนี้ ข้าพเจ้าต้องส่งต่อสหกรณ์ฯ นั้น จากเงินเดือนของข้าพเจ้าเมื่อจ่ายเพื่อส่งต่อให้สหกรณ์ฯ ด้วย
                      </p>
                  </div>
              </div>
          </div>
      </MorePaperDoc>
      <MorePaperDoc> <!--หน้าที่ 5-->
          <div class="flex flex-col mx-3">
              <p class="text-center mt-10 mb-6">-2-</p>
              <p class="indent-20 text-start">
                  ข้อ 8 ข้าพเจ้าสัญญาว่า  ถ้าคณะผู้จัดจัดตั้งสหกรณ์ตกลงให้ข้าพเจ้าเป็นสมาชิกได้ 
                  และเมื่อได้จดทะเบียนสหกรณ์ฯ ขึ้นแล้ว ข้าพเจ้าจะลงลายมือชื่อในทะเบียนสมาชิก 
                  ทั้งชำระค่าธรรมเนียมแรกเข้าและเงินดังกล่าว ข้าพเจ้ายินยอมขอร้องให้ปฏิบัติตามความในข้อ 7 ด้วย
              </p>
              <p class="indent-20 text-start ">
                  ข้อ 9. ถ้าข้าพเจ้าได้เป็นสมาชิก จะปฏิบัติตามข้อบังคับ ระเบียบ และมติของสหกรณ์ฯ ทุกประการ</p>
          </div>
          <div class="grid justify-end mt-6 text-center">
              <div class="items-center mr-20">
                  <p class="mt-4"><BlankSpace class="min-w-56" /></p>
                  <p class="mt-4">(<FiLL class="min-w-56" :data="`${data?.fname}  ${data?.lname}`"/>)</p>
                  <p class="mt-4">ผู้สมัคร</p>
              </div>
          </div>
      </MorePaperDoc>
      <span v-for="i in 2">
      <MorePaperDoc> <!--หน้าที่ 6 & 8-->
          <div class="mx-3">
              <div class="flex flex-col items-center">
                  <img class="w-[120px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" />
              </div>
              <div class="mt-2">
                  <p class="text-center font-bold text-xl">หนังสือยินยอมให้ส่วนราชการหักเงินชำระหนี้</p>
                  <p class="text-center font-bold text-xl">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                  <div>
                      <div class="flex flex-col items-end mt-3">
                          <div class="grid justify-end mt-5 mb-5 ">
                              <div class="items-center mr-10">
                                  <p class="text-center">เขียนที่ สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                                  <p> วันที่ <FiLL :data="data?.dateReceived"date-format="full" no-line /> </p>
                              </div>
                          </div>
                      </div>
                      <p>
                          <span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-80" :data="`${data?.fname}  ${data?.lname}`"/> 
                          อายุ <FiLL :data="data?.age" class="min-w-28" />   ปี 
                          ปัจจุบันอาศัยอยู่บ้านเลขที่ <FiLL :data="data?.houseNumber" class="min-w-20" />
                          หมู่ที่ <FiLL :data="data?.village" class="min-w-10" />
                          ตรอก/ซอย <FiLL :data="data?.alley" class="min-w-28" />
                          ถนน <FiLL :data="data?.road" class="min-w-28" />
                          ตำบล/แขวง <FiLL :data="data?.district" class="min-w-28" />
                          อำเภอ/เขต <FiLL :data="data?.canton" class="min-w-48" />
                          จังหวัด <FiLL :data="data?.province " class="min-w-44" />
                          เบอร์โทร <FiLL :data="data?.phoneNo" class="min-w-48" /> 
                      
                          รับราชการสังกัด <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ตำแหน่ง <FiLL :data="data?.position" class="min-w-80" />
                          และเป็นสมาชิก <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนสมาชิก <FiLL :data="data?.memberNumber" class="min-w-48" />  
                          
                          มีความประสงค์ให้ส่วนราชการ/ หน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงิน และนำส่งเงินให้สหกรณ์ออมทรัพย์
                          ที่ข้าพเจ้าเป็นสมาชิก จึงมีหนังสือให้ความยินยอมฉบับนี้ไว้กับ <span class="font-bold">โรงพยาบาลศรีสะเกษ</span> ทั้งปัจจุบันอนาคต ดังนี้
                      </p>
                      <p><span class="ml-20">ข้อ 1.</span>ยินยอมให้เจ้าหน้าที่ผู้จ่ายเงินหักเงินเดือน ค่าจ้าง หรือเงินบำนาญ 
                          หรือเงินบำเหน็จ หรือเงินอื่นโตที่ข้าพเจ้าพึงได้รับจากทางราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่ ทั้งปัจจุบัน 
                          อนาคต ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ได้แจ้งให้ในแต่ละเดือนส่งชำระหนี้ ชำระค่าหุ้น 
                          หรือเงินอื่นแล้วแต่กรณีให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกเดือน
                      </p>
                      <p><span class="ml-20">ข้อ 2.</span>กรณีข้าพเจ้าพ้นจากการเป็นข้าราชการ/ลูกจ้างและได้รับบำเหน็จบำนาญหรือเงินอื่นใต 
                          ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานที่ข้าพเจ้าสังกัดอยู่หักเงินจากเงินบำเหน็จ หรือเงินป่านาญ 
                          หรือเงินอื่นใดที่ข้าพเจ้าพึงได้รับจากทางราชการตามข้อ 1 ตามจำนวนที่<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> 
                          ได้แจ้งและให้ส่งเงินจำนวนดังกล่าวนั้น ให้<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าทุกครั้ง
                      </p>
                      <p><span class="ml-20">ข้อ 3.</span>การหักเงินเดือน ค่าจ้าง เงินบำนาญ หรือเงินบำเหน็จ หรือเงินอื่นใด ไม่ว่ากรณีใด 
                          ตามข้อ 2 เมื่อได้หักชำระหนี้แก่ทางราชการแล้ว(ถ้ามี) ข้าพเจ้ายินยอมให้หักเงินดังกล่าวส่งชำระหนี้ให้ 
                          <span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> ก่อนเป็นอันดับแรก
                      </p>
                      <p><span class="ml-20">ข้อ 4.</span>หนังสือยินยอมให้หักเงินตามข้อ 3 นี้ ให้มีผลตั้งแต่บัดนี้เป็นต้นไปและข้าพเจ้าสัญญาว่า 
                          จะไม่ถอนการให้คำยินยอมนี้ไม่ว่าทั้งหมดหรือบางส่วน จนกว่าข้าพเจ้าจะได้พ้นจากการเป็นสมาชิกของสหกรณ์ 
                          หรือพ้นภาระหนี้สินที่ข้าพเจ้ามีต่อสหกรณ์ เว้นแต่จะได้รับคำยินยอมเป็นหนังสือจาก<span class="font-bold">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span>
                      </p>
                      <p><span class="ml-20">ข้อ 5.</span>ในกรณีที่ข้าพเจ้าต้องเปลี่ยนแปลงส่วนราชการที่สังกัด โดยโอนไปสังกัดส่วนราชการอื่น 
                          หรือหน่วยงานอื่นของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น ข้าพเจ้ายินยอมให้เจ้าหน้าที่ผู้จ่ายเงินของส่วนราชการหรือหน่วยงานของรัฐ 
                          หรือองค์กรปกครองส่วนท้องถิ่นแห่งใดแห่งหนึ่ง ที่ข้าพเจ้าโอนไปสังกัดมีอำนาจ
                      </p>
                  </div>
              </div>
          </div>
      </MorePaperDoc>
      <MorePaperDoc> <!--หน้าที่ 7 & 9-->
          <div class="flex flex-col mx-3">
              <p class="text-center mt-10 mb-6">-2-</p>
              <p class="text-start">หักเงินเดือน ค่าจ้าง หรือเงินบำนาญหรือเงินบำเหน็จ หรือเงินอื่นใดในลักษณะเดียวกันที่ข้าพเจ้ามีสิทธิจะได้รับ
              จากทางราชการ หน่วยงานของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น แล้วแต่กรณี เพื่อส่งชำระหนี้ ชำระค่าหุ้น
              หรือเงินอื่น <span class="font-bold">ให้สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> แทนข้าพเจ้าได้ทุกเดือน
              และข้าพเจ้าสัญญาว่าจะถือปฏิบัติตามคำยินยอมในหนังสือฉบับนี้ทุกประการ เพียงแต่สหกรณ์ได้มีหนังสือแจ้ง
              ให้ส่วนราชการ หรือให้หน่วยงานของรัฐ หรือองค์กรปกครองส่วนท้องถิ่นที่ข้าพเจ้าสังกัดอยู่เพื่อดำเนินการ
              ดังกล่าวข้างต้นแทนข้าพเจ้าก็เป็นการเพียงพอแล้ว</p>
              <p class="indent-16 text-start">
                  หนังสือยินยอมฉบับนี้ทำขึ้นโดยความสมัครใจของข้าพเจ้าเอง 
                  ได้ตรวจสอบข้อความและถ้อยคำในหนังสือนี้ทั้งหมดแล้ว 
                  ตรงตามเจตนารมณ์ของข้าพเจ้าทุกประการ จึงลงลายมือชื่อไว้เป็นสำคัญ</p>
              <p class="indent-16 text-start">
                  <span class="font-bold">
                      หนังสือนี้ทำขึ้น 3 ฉบับ มีข้อความตรงกัน ฉบับที่หนึ่งเก็บไว้ที่โรงพยาบาลศรีสะเกษ
                      ฉบับที่สองเก็บไว้ที่ข้าพเจ้า และฉบับที่สามให้ไว้กับสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
                  </span>
              </p>
              <div class="item-center">
                  <p class="mt-14 ml-40">
                      <span class="ml-14">
                          ลงชื่อ<BlankSpace class="min-w-56" />ผู้ให้คำยินยอม(ผู้สมัคร)
                      </span>
                  </p>
                  <p class=" text-center">
                      (<FiLL class="min-w-56" :data="`${data?.fname}  ${data?.lname}`"/>)
                  </p>
                  <p class="mt-14 ml-40">
                      <span class="ml-14">
                          ลงชื่อ<BlankSpace class="min-w-56" />พยาน(สมาชิก)
                      </span>
                  </p>
                  <p class="mb-6 text-center">(<BlankSpace class="min-w-56" />)</p>

                  <span class="mt-14 ml-40">
                      <span class="ml-14">
                          ลงชื่อ<BlankSpace class="min-w-56" />พยาน(สมาชิก)
                      </span>
                  </span>
                  <p class="mb-6 text-center">(<BlankSpace class="min-w-56" />)</p>
              </div>    
          </div>
      </MorePaperDoc>
      </span>
      <MorePaperDoc> <!--หน้าที่ 10-->
          <div class="mx-3">
              <div class="flex flex-col items-center">
                  <img class="w-[120px] h-auto"
                  src="https://www.saving-sskh.com/images/logo-saving.png"
                  alt="Logo" /> 
              </div>
              <div class="flex flex-col items-end">
              </div>
              <p class="font-bold text-xl text-center col-span-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</p>
              <div class="flex flex-col items-end mt-3">
                  <div class="grid justify-end mt-5 mb-5">
                      <div class="mr-10">
                          <p class="items-center">เขียนที่ 
                              <span class="ml-2">สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> 
                              <p class="ml-14">0859 ถนนกสิกรรม ตำบลเมืองใต้</p> 
                              <p class="ml-14">อำเภอเมือง จังหวัดศรีสะเกษ 33000</p> 
                          </p>
                          
                      </div>
                      <p class="mt-4"> วันที่ <FiLL :data="data?.dateReceived"date-format="full" no-line /> </p> 
                  </div>
              </div>
      
              <div class="flex flex-col mt-1">
                  <p class="mt-4">เรียน ประธานกรรมการสหกรณ์ออมทรัทย์โรงพยาบาลศรีสะเกษ จำกัด</p>
                  <div class="flex flex-col">
                      <p class="mt-6">
                          <span class="ml-20">ข้าพเจ้า</span> <FiLL class="min-w-80" :data="`${data?.fname}  ${data?.lname}`"/> เป็นข้าราชการ/ลูกจ้างประจำ/
                          พนักงานราชการ/พนักงานกระทรวงสาธารณสุข (ตามวุฒิ)/พนักงานกระทรวงสาธารณสุข/ลูกจ้างชั่วคราว
                          เงินบำรุง (ตามวุฒิ) ลูกจ้างชั่วคราวเงินบำรุง ตำแหน่ง <FiLL :data="data?.position" class="min-w-64" /> <span class="font-bold"> สังกัดโรงพยาบาลศรีสะเกษ เป็นสมาชิกสหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด</span> เลขทะเบียนที่ <FiLL :data="data?.memberNumber" class="min-w-28" />
                          และยินยอมให้สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด หักเงินที่ข้าพเจ้าได้รับเงินเดือน ค่าจ้าง
                          เงินบำนาญ เงินบำเหน็จ เงินบำเหน็จตกทอด กบข. ฌกส. หรือเงินอื่นใดที่ข้าพเจ้ามีสิทธิได้รับจาก
                          ส่วนราชการต้นสังกัด เพื่อชำระค่าหุ้นหรือหนี้ตามสัญญากู้เงิน ไม่ว่าจะเป็นหนี้เงินต้นและดอกเบี้ย ค่าอุปกรณ์
                          แห่งหนี้และค่าเสียหายตามที่ปรากฏในสัญญากู้ได้เต็มจำนวน ทั้งนี้โดยไม่ต้องบอกกล่าวให้ผู้ยินยอมหรือ
                          ผู้รับผลประโยชน์ทราบล่วงหน้าก่อน
                      </p>
                      <p class="mt-14 ml-40">
                          <span class="ml-14">
                              ลงชื่อ<BlankSpace class="min-w-56" />ผู้ให้คำยินยอม (ผู้สมัคร)
                          </span>
                      </p>
                      <p class="mb-5 text-center">(<FiLL class="min-w-56" :data="`${data?.fname}  ${data?.lname}`"/>)</p>
                      <p class="mt-4 ml-40">
                          <span class="ml-14">
                              ลงชื่อ<BlankSpace class="min-w-56" />พยาน(ผู้รับผลประโยชน์)
                          </span>
                      </p>
                      <p class="text-center">(<FiLL class="min-w-56" :data="`${data?.fnameInterestedWitness}  ${data?.lnameInterestedWitness}`"/>)</p>
                      <span class="text-center">เกี่ยวข้องเป็น <FiLL :data="data?.relation" class="min-w-20" /></span>
                      <span class="text-center mb-4">เบอร์โทร <FiLL :data="data?.phoneNo" class="min-w-28" /></span>


                      <span class="mt-8 ml-40">
                          <span class="ml-14">
                              ลงชื่อ<BlankSpace class="min-w-56" />พยาน(หัวหน้าฝ่ายการเงิน)
                          </span>
                      </span>
                      <p class="mb-6 text-center">(<BlankSpace class="min-w-56" />)</p>

                      <p class="mt-4 ml-40">
                          <span class="ml-14">
                              ลงชื่อ<BlankSpace class="min-w-56" />ผู้อำนวยการโรงพยาบาลศรีสะเกษ
                          </span>
                      </p>
                      <p class="text-center">(<BlankSpace class="min-w-56" />)</p>
                  </div>
              </div>
          </div>
      </MorePaperDoc>
  </main>
</template>
<script setup lang="ts">
</script>