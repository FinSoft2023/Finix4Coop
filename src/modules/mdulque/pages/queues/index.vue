<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <BPartPageBody>
      <BPartButtonsBand>
        <UButton icon="i-heroicons-user-plus-16-solid"
          to="/queues/create/steps"
          target="_blank"
          class="mr-2">Monitor</UButton>
      </BPartButtonsBand>
      <DItemGrid v-if="data.length"
        col="x4">
        <UPageCard icon="i-heroicons-user-plus-16-solid"
          title="เรียกคิว"
          description="เรียกคิวลูกค้าเพื่อให้บริการ"
          @click="handleQueue" />
        <UPageCard icon="i-heroicons-forward-16-solid"
          title="ข้ามคิว"
          description="ข้ามคิวลูกค้าคนถัดไป"
          to="/queues/create" />

        <UCard class="col-span-2">
          <h2 class="mt-4 mb-4 text-4xl text-center font-bold dark:text-white">A001</h2>
          <h2 class="mt-4 mb-4 text-2xl text-center dark:text-white">ถอน</h2>
        </UCard>
      </DItemGrid>

      <!-- <DTable @selection-changed="selectItem" :data :pending /> -->
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import * as Ably from 'ably';

const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending, execute } = apiGet({ 'fltr-val': 'called' });

// For the full code sample see here: https://github.com/ably/quickstart-js
const ably = new Ably.Realtime('9CNytA.ZRMqIg:YpI5Z9A8atb0cjkvlCvvGS8vvx8jg1clvIT6a0fhG_s');
await ably.connection.once('connected');
console.log('Connected to Ably!');

const imageUrl = ref('');
const route = useRoute();
async function handleConfirmation() {
  await execute();
}

// get the channel to subscribe to
const channel = ably.channels.get('quickstart');

const incoming = ref<any>();

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

const qsto = useQueStore();
const { queue } = storeToRefs(qsto);
async function handleQueue() {
  const qs = data.value;
  if (qs && qs.length) {
    const q = qs[0];
    console.log('Calling queue:', q);
    queue.value = q;
    // const rsp = $fetch('/api/queues/call', {
    //   method: 'POST',
    //   body: {
    //     id: q.id,
    //   },
    // });
    navigateTo('/queues/create/confirm');
  }
}
// function selectItem(item: any) {
//   navigateTo(`/queues/${item.id}`);
// }
</script>
