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
              <span class="text-gray-900 font-bold">{{ reqAmount }}</span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-700 font-medium">ค่าธรรมเนียม (บาท)</span>
              <span class="text-gray-900 font-bold">8</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-700 font-medium">รวมจ่าย (บาท)</span>
              <span class="text-gray-900 font-bold">{{ reqAmount + 8 }}</span>
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
import * as Ably from 'ably';

// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

const route = useRoute();
async function handleConfirmation() {
  navigateTo(`/regmembers/${route.params.id}/depositResult`);
}

// get the channel to subscribe to
const channel = ably.channels.get('payment');

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('paid', (message) => {
  console.log('Received a greeting message in realtime: ', message.data);
  handleConfirmation();
});

const pageDef = useActiveModulePage('each.depositing');

const qrsto = useQrStore();
const { qrCode, reqAmount } = storeToRefs(qrsto);

const qrPayment = useQRCode(qrCode);

const { entries } = getEntrySchema(pageDef, 'account');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
