<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert
      icon="i-heroicons-book-open"
      description="ระบุรายละเอียดขั้นตอนการทำงาน"
      :title="pageDef.label"
    />

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <DItemGrid col="x3">
          <UCard class="col-span-2">
            <p class="text-2xl font-bold text-center mt-24">ท่านต้องการจะผูกบัญชีให้กับสมาชิกท่านนี้หรือไม่</p>
          </UCard>
          <FMemInfoQ />
        </DItemGrid>

        <BPartButtonsBand>
          <template #next>
            <UButton type="submit">Save</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.root');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useLocalStage(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

// If this is the first step, you can initialize the data value like this:
// data.value = {};

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = getNextStep(pageDef);
  navigateTo(`/officer/create/${redirectPath}`);
};
</script>
