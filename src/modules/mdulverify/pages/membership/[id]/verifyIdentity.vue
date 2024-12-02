<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <div class="flex justify-center">    
          <h1>ถ่ายรูป</h1>
        </div>
        <DShowQrCode qr-data="https://anycounter-428810.web.app/chooseInputCheck" />
      </UCard>
      <div class="flex justify-end">
      <UButton to="/membership/7tpveu8kbhtz24cwsrwh/scanPaper">ถัดไป</UButton>
      </div>
    </BPartPageBody>
    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.verifyIdentity');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const qrLink = computed(() => JSON.stringify({ memcode: data.value?.memcode, balance: data.value?.balance, accNo: data.value?.accNo }));

useBreadcrumb(pageDef.label);
</script>
