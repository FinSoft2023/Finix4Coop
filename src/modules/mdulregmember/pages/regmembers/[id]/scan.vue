<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DShowQrCode :qr-data="qrLink" />
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.scan');

const host = 'http://localhost:3000';
const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const qrLink = computed(() => `${host}/transferonline/create/linkacc?id=${data.value?.memcode}&amount=${data.value?.balance}`);

useBreadcrumb(pageDef.label);
</script>
