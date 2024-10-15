<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DocPrintContainer title="Printing Sample Page">
        <DocPaper />
        <DocPaper :more="true" />
        <DocChequePrinting />
      </DocPrintContainer>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.import');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/tracking/${item.id}`);
}
</script>
