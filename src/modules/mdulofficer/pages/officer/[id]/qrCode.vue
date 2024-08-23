<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <UButton to="/cheques/"
          icon="i-heroicons-arrow-right"
          @click="handleConfirmation">ดำเนินการต่อ</UButton>

        <img alt=""
          :src="imageUrl">
      </UCard>
      <DQrCodeBindAccount qr-data="https://anycounter-428810.web.app/chooseInputCheck" />
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

useBreadcrumb(pageDef.label);
</script>
