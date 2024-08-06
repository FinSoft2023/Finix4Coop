<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/cheques/"
          icon="i-heroicons-arrow-right">ดำเนินการต่อ</UButton>
      </BPartButtonsBand>
      <DGallery :photos="[{src:data.imageUrl, alt:''}]" />
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
