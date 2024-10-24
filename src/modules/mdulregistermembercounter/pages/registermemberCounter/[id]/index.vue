<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <FNotificationChanges></FNotificationChanges>
    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data" :entries :pending />
      </UCard>
    </BPartPageBody>
    <
    <template #side>
      <DEntitySection v-model="data" :entries :pending />
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
