<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UButton @click="handleClose">ส่งเรื่องรายการทั้งหมด</UButton>

      <FTableOfTxs :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.close');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const query = ref({ txid: '' });
const { postResult, executePost } = apiPost(query);

const handleClose = async () => {
  const txdata = data.value as any[];
  for await (const item of txdata) {
    const txid = item.id;
    query.value = { txid };
    await executePost({
      state: 'account',
      tstmp: {
        closefinance: new Date().toISOString(),
      }
    });
  }
  navigateTo(`/financials/rptDaily`);
};
</script>
