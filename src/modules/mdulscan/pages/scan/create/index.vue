<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <div>
          <qrcode-stream @decode="onDecode" @init="onInit" />
          <p v-if="decodedText">QR Code: {{ decodedText }}</p>
          <p v-else>กำลังสแกน QR Code...</p>
        </div>

        <UButton type="submit">Scan</UButton>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.root');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/scan${redirectPath}`);
};

import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';

const decodedText = ref(null);

function onDecode(result) {
  decodedText.value = result;
}

function onInit(promise) {
  promise.catch((error) => {
    console.error(error);
    alert('ไม่สามารถเข้าถึงกล้องได้!');
  });
}
</script>
