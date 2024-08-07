<template>
  <DocChequePrinting>
    <div class="grid grid-cols-[62mm_188mm]">
      <div class="bg-white">
        <p class="mt-[2mm] ml-[14mm]">25 สิงหาคม </p>
        <p class="ml-[14mm]">{{data.name}}</p>
        <p class="ml-[14mm]">{{data.amount}}</p>
        <p class="mt-[29mm] ml-[25mm]"><FMoneyAmount :amount="data.amount" /></p>
      </div>
      <div class="bg-white">
        <div class="grid grid-cols-2">
          <div class="text-start">
            <p class="mt-[33mm] ml-[45mm]">{{data.name}}</p>
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
            <FMoneyText :amount="data.amount" />
          </p>
        </div>
        <div class="flex justify-end mr-[6mm]">
          <div class="border-2 border-white w-[77mm] h-[9mm] flex items-center justify-center">
            <p class="text-center mt-2"><FMoneyAmount :amount="data.amount" /></p>
          </div>
        </div>
      </div>
    </div>

  </DocChequePrinting>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const pageDef = useActiveModulePage('each.print');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet({ 'fltr-val': 'unuse' });

</script>