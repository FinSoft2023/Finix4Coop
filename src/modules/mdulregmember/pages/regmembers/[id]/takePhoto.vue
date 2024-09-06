<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data" :entries :pending />
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.takePhoto');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { error, pending } = apiGet();

const route = useRoute();
const id = route.params.id;
const txStore = useTxStore();

const data = txStore.getMember(id);

useBreadcrumb(pageDef.label);
</script>
