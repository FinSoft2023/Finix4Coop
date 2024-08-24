<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <!-- <UCard>
      </UCard> -->
      <DQrCodeBindAccount :qr-data="qrLink" />
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.qrCode');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const qrLink = computed(() => JSON.stringify({ memcode: data.value?.memcode, balance: data.value?.balance, accNo: data.value?.accNo }));

useBreadcrumb(pageDef.label);
</script>
