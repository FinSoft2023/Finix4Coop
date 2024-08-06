<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <DItemGrid col="x3">
        <UCard class="col-span-2">
          <DEntitySection v-model="data"
            :entries
            :pending />
        </UCard>

        <FMemberInfo></FMemberInfo>
      </DItemGrid>

      <DGallery :photos="photos"></DGallery>

      <BOnPageModal label="Please confirm"
        actionText="ตกลง"
        @action="handleConfirmation">
        แน่ใจแล้วใช่หรือไม่
      </BOnPageModal>
    </BPartPageBody>
    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup
  lang="ts">
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
