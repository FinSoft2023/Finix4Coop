<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <FDocFinancePrinting></FDocFinancePrinting>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.printDoc');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);
</script>
