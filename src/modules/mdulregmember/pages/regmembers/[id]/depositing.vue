<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <img alt="QR Code"
          :src="qrPayment" />
        <DEntitySection v-model="data"
          :entries
          :pending />
      </UCard>
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
