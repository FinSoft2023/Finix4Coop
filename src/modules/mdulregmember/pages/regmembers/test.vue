<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <UAlert icon="i-heroicons-document-check"
      description="ระบุข้อมูลและตรวจสอบเพื่อทำการฝาก online"
      title="ฝากเงิน online" />

    <BPartPageBody>
      <UForm @submit="handleContinue"
        :state="data"
        class="space-y-4">

        <DItemGrid col="x2">
          <UCard>
            <UFormGroup label="เลขสมาชิก">
              <UInput required
                v-model="memcode" />
            </UFormGroup>
            <UFormGroup label="จำนวนเงิน (บาท)">
              <UInput type="number"
                required
                v-model="amount" />
            </UFormGroup>
          </UCard>
        </DItemGrid>
        <BPartButtonsBand>
          <template #next>
            <UButton type="submit">ดำเนินการต่อ</UButton>
          </template>
        </BPartButtonsBand>

      </UForm>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import * as Ably from 'ably';

const pageDef = useActiveModulePage('each.deposit');

// const { entries } = getEntrySchema(pageDef, 'account');
// const { apiGet, apiPost } = useHostApi(pageDef);
// const { data, error, pending } = apiGet();
// const { postResult, executePost } = apiPost();

const amount = ref<number>();
const memcode = ref('');
const data = ref<any>({});


useBreadcrumb(pageDef.label);

// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

const route = useRoute();

// get the channel to subscribe to
const channel = ably.channels.get('payment');

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('paid', (message) => {
  const txdata = message.data;
  console.log('Received a greeting message in realtime: ', txdata);
});


async function handleContinue() {
  channel.publish('paid', {
    amount: amount.value,
    memberCode: memcode.value,
  });
  // await executePost({ amount: amount.value, memcode: memcode.value });
  // const qrResultText = postResult.value;
  // const qrResult = JSON.parse(qrResultText);
  // navigateTo('./depositing');
}
</script>
