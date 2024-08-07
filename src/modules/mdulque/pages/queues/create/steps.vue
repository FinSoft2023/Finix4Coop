<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data"
          :entries
          :pending />
      </UCard>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import * as Ably from 'ably';

const pageDef = useActiveModulePage('create.steps');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();


// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

// get the channel to subscribe to
const channel = ably.channels.get('quickstart');

const incoming = ref<any>();

const imageUrl = ref('');
const route = useRoute();
async function handleConfirmation() {
  const idata = incoming.value;
  if (window) {
    const result = await $fetch('/api/queues/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        txcode: idata.type == 'ฝาก' ? 'svadps' : 'svawtd',
        amount: idata.value,
        imageUrl: idata.image,
      },

    });
  }
}

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('greeting', (message) => {
  console.log('Received a message: ', message.data);
  incoming.value = message.data;
  handleConfirmation();
});

useBreadcrumb(pageDef.label);
</script>
