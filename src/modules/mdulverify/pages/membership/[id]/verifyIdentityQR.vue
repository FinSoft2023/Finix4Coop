<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DQrCodeBindAccount :qr-data="qrLink" />
      </UCard>
      <div class="flex justify-end">
        <UButton to="/membership/7tpveu8kbhtz24cwsrwh">เสร็จสิ้น</UButton>
        </div>
    </BPartPageBody>
    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.verifyIdentityQR');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const qrLink = computed(() => JSON.stringify({ memcode: data.value?.memcode, balance: data.value?.balance, accNo: data.value?.accNo }));
useBreadcrumb(pageDef.label);
</script>
