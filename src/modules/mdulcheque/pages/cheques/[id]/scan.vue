<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <UButton @click="handleConfirmation">สั่งจ่าย</UButton>
      </UCard>
      <DShowQrCode qr-data="https://anycounter-428810.web.app/chooseInputCheck" />
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import * as Ably from 'ably';

// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

const route = useRoute();
async function handleConfirmation() {
  await executePost({ state: 'deliver', tstmp: { deliver: new Date().toISOString() } });
  navigateTo(`/cheques/${route.params.id}`);
}

// get the channel to subscribe to
const channel = ably.channels.get('linkup');

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('photo', (message) => {
  console.log('Received a greeting message in realtime: ', message.data);
  handleConfirmation();
});

const pageDef = useActiveModulePage('each.scan');

const { entries } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

// const route = useRoute();
// async function handleConfirmation() {
//   await executePost({ state: 'completed', tstmp: { completed: new Date().toISOString() } });
//   navigateTo(`/withdrawals/${route.params.id}`);
// }

useBreadcrumb(pageDef.label);
</script>
