<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-document-check"
      description="ยืนยันจำนวนเงินฝาก"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">

        <DItemGrid col="x2">
          <UCard>
            <div class="p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-700 font-medium">จำนวนเงินฝาก (บาท)</span>
                <span class="text-gray-900 font-bold">{{ data.amount }}</span>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-700 font-medium">ค่าธรรมเนียม (บาท)</span>
                <span class="text-gray-900 font-bold">8</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-700 font-medium">รวมจ่าย (บาท)</span>
                <span class="text-gray-900 font-bold">{{ data.amount + 8 }}</span>
              </div>
            </div>
          </UCard>
          <UCard>
            <div class="flex justify-center items-center">
              <img alt="qr payment"
                :src="qrCode" />
            </div>
          </UCard>
        </DItemGrid>

        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';
import * as Ably from 'ably';
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.confirm');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

const memSto = useLinkMemberStore();
const { memcode, amount, qrcode, data: txdata } = storeToRefs(memSto);

// const 
const qrCode = useQRCode(qrcode.value);

useComponentResolver(defaultViewResolvers);

const handleSubmit = async (txd: any) => {
  amount.value = amount.value + txd.amount;
  const data2save = Object.assign(data.value, { memcode: memcode.value, txat: txd.txat });
  (<any[]>txdata.value).push(data2save);
  await executePost(data2save);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/transferonline${redirectPath}`);
};


// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

// get the channel to subscribe to
const channel = ably.channels.get('payment');

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('paid', (message) => {
  console.log('Received a greeting message in realtime: ', message.data);
  const md = message.data;
  handleSubmit({
    amount: md.amount,
    memcode: md.memberCode,
    txat: new Date().toISOString(),
  });
});

</script>
