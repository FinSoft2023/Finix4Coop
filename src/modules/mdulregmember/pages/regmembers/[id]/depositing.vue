<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <DItemGrid col="x2">
        <UCard>
          <div class="flex justify-center items-center">
            <img alt="QR Code"
              :src="qrPayment" />
          </div>
        </UCard>
        <UCard>
          <div class="p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 font-medium">จำนวนเงินฝาก (บาท)</span>
              <span class="text-gray-900 font-bold">23</span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 font-medium">ค่าธรรมเนียม (บาท)</span>
              <span class="text-gray-900 font-bold">8</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-700 font-medium">รวมจ่าย (บาท)</span>
              <span class="text-gray-900 font-bold">31</span>
            </div>
          </div>
        </UCard>
      </DItemGrid>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';

const pageDef = useActiveModulePage('each.depositing');

const qrsto = useQrStore();
const { qrCode } = storeToRefs(qrsto);

const qrPayment = useQRCode(qrCode);

const { entries } = getEntrySchema(pageDef, 'account');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
