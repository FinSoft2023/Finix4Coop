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
const { error, pending } = apiGet();

const route = useRoute();
const id = route.params.id;
const txStore = useTxStore();

const data = ref(txStore.getMember(id));

const qrLink = computed(() => JSON.stringify({ memcode: data.value?.memcode, balance: data.value?.balance, accNo: data.value?.accNo }));

useBreadcrumb(pageDef.label);
</script>
