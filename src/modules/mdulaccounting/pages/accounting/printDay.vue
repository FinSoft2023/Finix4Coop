<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <FReportPrintingDay></FReportPrintingDay>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.printDay');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);
</script>
