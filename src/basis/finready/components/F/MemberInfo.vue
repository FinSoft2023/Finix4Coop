<template>
  <UCard>
    <DEntitySection v-model="member"
      :entries
      :pending />
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{ account: any }>();
const pageDef = useActiveModulePage('each.root');
const { entries, schema } = getEntrySchema(pageDef, 'account');

const pending = ref(false);
const member = computed(() => props.account);

useComponentResolver(defaultViewResolvers);
</script>