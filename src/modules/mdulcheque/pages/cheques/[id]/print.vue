<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
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

  const handleConfirmation = () => {
    executePost({ state: 'active', tstmp: { active: new Date().toISOString() } });
  }

  useBreadcrumb(pageDef.label);
</script>
