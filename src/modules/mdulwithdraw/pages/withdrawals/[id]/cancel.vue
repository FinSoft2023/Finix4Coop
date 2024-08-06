<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data"
          :entries
          :pending />
      </UCard>

      <BOnPageModal label="Please confirm"
        actionText="ตกลง"
        @action="handleConfirmation">
        แน่ใจแล้วใช่หรือไม่
      </BOnPageModal>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.cancel');

const { entries } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const route = useRoute();
async function handleConfirmation() {
  await executePost({ state: 'cancel', tstmp: { cancel: new Date().toISOString() } });
  navigateTo(`/withdrawals/${route.params.id}`);
}

useBreadcrumb(pageDef.label);
</script>
