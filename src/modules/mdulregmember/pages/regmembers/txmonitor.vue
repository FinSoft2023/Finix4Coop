<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/regmembers/create"
          icon="i-heroicons-plus-circle">New</UButton>
        <a href="/api/regmembers/_by/txmonitor"
          target="_blank">
          <UButton icon="i-heroicons-inbox-arrow-down-20-solid"
            variant="outline">Download</UButton>
        </a>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable
        :data="txdata"
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import * as Ably from 'ably';

const pageDef = useActiveModulePage('list.txmonitor');
useBreadcrumb('List');

const { apiGet, apiPost } = useHostApi(pageDef);
const { error, pending } = apiGet();
// const { postResult, executePost } = apiPost();
// const postingData = ref<any>();
// const { data: postResult, execute: executePost } = useFetch('/api/regmembers/create', {
//   method: 'POST',
//   body: postingData.value,
//   immediate: false,
//   watch: false,
// });

// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

const txStore = useTxStore();
const { txdata } = storeToRefs(txStore);
const route = useRoute();
async function handleIncomingTx(txin: any) {
  // postingData.value = txdata;
  if (window) {
    txStore.addTx(txin);
    // const rsp = await $fetch('/api/regmembers/create', {
    //   method: 'POST',
    //   body: txdata,
    // });
  }
}

// get the channel to subscribe to
const channel = ably.channels.get('payment');

/*
  Subscribe to a channel.
  The promise resolves when the channel is attached
  (and resolves synchronously if the channel is already attached).
*/
await channel.subscribe('paid', (message) => {
  const txin = message.data;
  console.log('Received a greeting message in realtime: ', txin);

  handleIncomingTx({
    amount: txin.amount,
    memcode: txin.memberCode,
    txat: new Date().toISOString(),
    // timestamp: txin.timestamp,
  });
});

function selectItem(item: any) {
  navigateTo(`/regmembers/${item.id}`);
}
</script>
