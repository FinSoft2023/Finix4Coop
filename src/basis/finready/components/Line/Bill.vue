<template>
  <div>
    <p class="px-4 mt-4 text-xl text-gray-900 font-bold ">รายการหักเดือนล่าสุด</p>
    <div class="space-y-12 mt-4">
      <div class="grid grid-cols-1 gap-4 px-4">
        <div class="flex flex-col ">
          <div>
            <UCard>
              <div>
                <div class="text-gray-600">
                  <div class="grid grid-cols-1 gap-4">
                    <div class="flex justify-between col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">เลขที่ใบเสร็จ</p>
                      <p class="text-md font-bold mx-3"> 6703-0852</p>
                    </div>
                    <div class="flex justify-between col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">
                        ใบเสร็จปี-เดือน</p>
                      <p class="text-md  font-bold mx-3">2567-03</p>
                    </div>
                    <div class="flex justify-between col-span-2">
                      <p class="text-md mx-3 text-gray-400">
                        วันที่ออกใบเสร็จ </p>
                      <p class="text-md font-bold mx-3"> 31/03/2567</p>
                    </div>
                    <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="col-span-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="text-primary-400"
                        width="2em"
                        height="2em"
                        viewBox="0 0 14 14">
                        <g fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M9.5 3.5h4v4" />
                          <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                        </g>
                      </svg>
                      <div class="col-span-2">
                        <p class="text-md mx-3 text-gray-400 ">รายการ/สัญญา</p>
                        <p class="text-md font-bold text-gray-700 mx-3"> ค่าหุ้น</p>
                      </div>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">เงินต้น</p>
                      <p class="text-md font-bold mx-3">0.00 บาท</p>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">ดอกเบี้ย</p>
                      <p class="text-md font-bold mx-3">0.00 บาท</p>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">รวมจำนวนเงิน</p>
                      <p class="text-md font-bold mx-3">100 บาท</p>
                    </div>
                    <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="col-span-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="text-primary-400"
                        width="2em"
                        height="2em"
                        viewBox="0 0 14 14">
                        <g fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M9.5 3.5h4v4" />
                          <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
                        </g>
                      </svg>
                      <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
                      <div class="col-span-2">
                        <p class="text-md mx-3 text-gray-400 ">รายการ/สัญญา</p>
                        <p class="text-md font-bold text-gray-700 mx-3"> เงินกู้สามัญ 140/67</p>
                      </div>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">เงินต้น</p>
                      <p class="text-md font-bold mx-3">1,600.00 บาท</p>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">ดอกเบี้ย</p>
                      <p class="text-md font-bold mx-3">1,840.47 บาท</p>
                    </div>
                    <div class="col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">รวมจำนวนเงิน</p>
                      <p class="text-md font-bold mx-3">3,440.47 บาท</p>
                    </div>
                    <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
                  
                    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="flex justify-between col-span-2">
                      <p class="text-md mx-3 text-gray-400 ">รวมทั้งหมด</p>
                      <p class="text-md font-bold mx-3">3,540.47 บาท</p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
