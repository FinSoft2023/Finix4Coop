<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page" @printed="handleConfirmation">
        <FDocChequePrinting></FDocChequePrinting>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.print');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet, apiPost } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();
  const { postResult, executePost } = apiPost();

  const route = useRoute();
  async function handleConfirmation() {
  await executePost({ state: 'active', tstmp: { active: new Date().toISOString() } });
  navigateTo(`/cheques/${route.params.id}`);
}
  useBreadcrumb(pageDef.label);
</script>
