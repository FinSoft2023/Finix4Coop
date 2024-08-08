<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <FNotificationChanges />

    <BPartPageBody>
      <DItemGrid col="x3">
        <UCard class="col-span-2">
          <DEntitySection v-model="data"
            :entries
            :pending />
        </UCard>

        <FMemberInfo :account="data?.account"></FMemberInfo>
      </DItemGrid>

      <DGallery :photos="data?.images"></DGallery>

    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);
</script>
