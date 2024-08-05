<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <DocChequePrinting>
          <div class="grid grid-cols-[62mm_188mm]">
            <div class="bg-white">
              <p class="mt-[2mm] ml-[14mm]">24 สิงหาคม </p>
              <p class="ml-[14mm]">น.ส.พนมวรรณ มครนันท์</p>
              <p class="ml-[14mm]">****1,000</p>
              <p class="mt-[29mm] ml-[25mm]">****1,000,000</p>
            </div>
            <div class="bg-white">
              <div class="grid grid-cols-2">
                <div class="text-start">
                  <p class="mt-[33mm] ml-[45mm]">น.ส.พนมวรรณ มครนันท์</p>
                </div>
                <div>
                  <div class="flex justify-end mt-[6mm]">
                    <!-- <p class="px-4 text-end">วันที่</p> -->
                    <div class="w-2in mr-[6mm]">
                      <div class="flex ">
                        <p> 24 กรกฏาคม 2567</p>
                        <!-- <div class="border-2 border-white w-6 h-6 flex items-center justify-center">0</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">1</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">2</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">3</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">4</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">5</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">4</div>
                      <div class="border-2 border-white w-6 h-6 flex items-center justify-center">5</div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="mt-[7mm] ml-[45mm] mr-[6mm]">
                  -<MoneyText></MoneyText>จำนวนเงินตัวหนังสือ-
                </p>
              </div>
              <div class="flex justify-end mr-[6mm]">
                <div class="border-2 border-white w-[77mm] h-[9mm] flex items-center justify-center">
                  <p class="text-center mt-2">1,327,320</p>
                </div>
              </div>
            </div>
          </div>

        </DocChequePrinting>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>
