<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <UButton @click="handleConfirmation">สั่งจ่าย</UButton>
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.scan');

const { entries } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const route = useRoute();
  async function handleConfirmation() {
  await executePost({ state: 'deliver', tstmp: { deliver: new Date().toISOString() } });
  navigateTo(`/cheques/${route.params.id}`);
}

useBreadcrumb(pageDef.label);
</script>
