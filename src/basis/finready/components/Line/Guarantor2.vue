<template>
  <!-- <p class="text-2xl p-4">สหกรณ์ออมทรัพโรงพยาบาลศรีสะเกษ จำกัด</p> -->
  <p class="px-4 mt-4 text-xl text-gray-900 font-bold mb-4">
    <NuxtLink to="/transferonline/id/loanContract">
      <UButton icon="i-mdi-arrow-back"></UButton>
    </NuxtLink>
    ข้อมูลค้ำประกัน
  </p>
  <div class="space-y-4 mt-4 mb-4">
    <div class="grid grid-cols-1 gap-4 px-4">
      <div class="flex flex-col gap-5">
        <UCard>
          <div label="Open">
            <div class="text-gray-600">
              <div class="grid grid-cols-1 gap-2">
                <div class="col-span-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary-400"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <circle cx="24" cy="12" r="8" />
                      <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                    </g>
                  </svg>
                  <p class="flex justify-center text-md mt-0 font-bold mx-3">
                    รินดา ดวงนาวาว
                  </p>
                </div>
                <div>
                  <p class="text-md mx-3 text-gray-400">วงเงินกู้</p>
                  <p class="text-md font-bold mx-3 mb-2">500,000</p>
                  <p class="text-md mx-3 text-gray-400">วันที่กู้</p>
                  <p class="text-md font-bold mx-3 mb-2">01/09/2557</p>
                  <p class="text-md mx-3 text-gray-400">ชื่อผู้ทำสัญญา</p>
                  <p class="text-md font-bold mx-3 mb-2">รินดา ดวงนาวาว</p>
                  <p class="text-md mx-3 text-gray-400">เลขที่สมาชิก</p>
                  <p class="text-md font-bold mx-3 mb-2">0024</p>
                  <p class="text-md mx-3 text-gray-400">สถานภาพสัญญา</p>
                  <p class="text-md font-bold mx-3 mb-2">ชำระปกติ</p>
                  <p class="text-md mx-3 text-gray-400">รูปแบบชำระ</p>
                  <p class="text-md font-bold mx-3 mb-2">ชำระเงินต้นเท่านั้น</p>
                  <p class="text-md mx-3 text-gray-400">ชำระแล้วกี่งวด</p>
                  <p class="text-md font-bold mx-3 mb-2">1</p>
                  <p class="text-md mx-3 text-gray-400">ชำระต่องวด</p>
                  <p class="text-md font-bold mx-3 mb-2">4,000</p>
                  <p class="text-md mx-3 text-gray-400">ยอดคงเหลือ</p>
                  <p class="text-md font-bold mx-3 mb-2">46,000</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>
        <P>รายชื่อรวมค้ำประกัน</P>

        <UCard>
          <div label="Open">
            <div class="text-gray-600">
              <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary-400"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <circle cx="24" cy="12" r="8" />
                      <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                    </g>
                  </svg>
                  <p class="flex justify-center text-md mt-0 font-bold mx-3">
                    กิตติพิชญ์ เสนาบดี
                  </p>
                </div>
                <div>
                  <p class="text-md mx-3 text-gray-400">ทะเบียนสัญญาที่ค้ำ</p>
                  <p class="text-md font-bold mx-3">ส 1678/67</p>
                </div>                
              </div>
            </div>
          </div>
        </UCard>
      </div>
      <div>
        <UCard>
          <div label="Open">
            <div class="text-gray-600">
              <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary-400"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <circle cx="24" cy="12" r="8" />
                      <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                    </g>
                  </svg>
                  <p class="flex justify-center text-md mt-0 font-bold mx-3">
                    อาทิตย์ สายใจ
                  </p>
                </div>
                <div>
                  <p class="text-md mx-3 text-gray-400">ทะเบียนสัญญาที่ค้ำ</p>
                  <p class="text-md font-bold mx-3">ส 1678/67</p>
                </div>                
              </div>
            </div>
          </div>
        </UCard>
      </div>
      <div>
        <UCard>
          <div>
            <div class="text-gray-600">
              <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary-400"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <circle cx="24" cy="12" r="8" />
                      <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
                    </g>
                  </svg>
                  <p class="flex justify-center text-md mt-0 font-bold mx-3">
                    สอง ก้องกูล
                  </p>
                </div>
                <div>
                  <p class="text-md mx-3 text-gray-400">ทะเบียนสัญญาที่ค้ำ</p>
                  <p class="text-md font-bold mx-3">ส 1678/67</p>
                </div>               
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
