<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/withdrawals/"
          icon="i-mdi-file-document-delete-outline">ลบเอกสาร</UButton>
        <UButton to="/withdrawals/"
          icon="i-heroicons-arrow-right">ดำเนินการต่อ</UButton>
      </BPartButtonsBand>
      <FPhotoPreview></FPhotoPreview>
    </BPartPageBody>

  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.takePhoto');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);

</script>
