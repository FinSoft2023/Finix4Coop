<template>
  <UCard>
    <DEntitySection v-model="member"
      :entries
      :pending />
  </UCard>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');
const { entries, schema } = getEntrySchema(pageDef, 'account');

const qsto = useQueStore();
const { member } = storeToRefs(qsto);

useComponentResolver(defaultViewResolvers);
</script>