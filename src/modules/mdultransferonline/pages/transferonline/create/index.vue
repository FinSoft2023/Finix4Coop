<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />
    <UAlert icon="i-heroicons-book-open"
      description="ระบุจำนวนเงินที่ต้องการฝาก"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <UCard class="col-span-2">
          <DEntitySection v-model="data"
            :entries
            :pending />
        </UCard>

        <BPartButtonsBand>
          <template #next>
            <UButton type="submit">comfirm</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  // import type { z } from 'zod';

  const pageDef = useActiveModulePage('create.root');
  useSmartStepper(pageDef);
  useBreadcrumb('Create');

  const { entries, schema } = getEntrySchema(pageDef);
  // type TSchema = z.output<typeof schema>;

  const { apiGet, apiPost } = useLocalStage(pageDef);
  const { data, pending } = apiGet();
  const { postResult, error, executePost } = apiPost();

  const memStore = useLinkMemberStore();
  const { memcode, qrcode } = storeToRefs(memStore);
  // If this is the first step, you can initialize the data value like this:
  data.value = { memcode: memcode.value };

  const handleSubmit = async () => {
    const result = await $fetch<any>('/api/transferonline/create', {
      method: 'POST',
      body: data.value,
    });
    const qrResult = JSON.parse(result);
    qrcode.value = qrResult.QrText;
    await executePost(data.value);
    const redirectPath = getNextStep(pageDef);
    navigateTo(`/transferonline/create/${redirectPath}`);
  };
</script>
