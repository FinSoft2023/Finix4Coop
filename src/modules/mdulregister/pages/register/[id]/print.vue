<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <DocPaper />
        <NDocRegisterPrinting></NDocRegisterPrinting>
        <DocChequePrinting />
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.print');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
