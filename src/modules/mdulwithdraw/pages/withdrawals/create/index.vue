<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-book-open"
      description="ระบุรายละเอียดขั้นตอนการทำงาน"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <DItemGrid col="x3">
          <UCard class="col-span-2">
            <DEntitySection v-model="data"
              :entries
              :pending />
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
const { pending } = apiGet();
const { postResult, error, executePost } = apiPost();

// If this is the first step, you can initialize the data value like this:
// data.value = {};
const qsto = useQueStore();
const { queue, member } = storeToRefs(qsto);
const data = ref<any>({
  txcode: queue.value.txcode,
  accNo: member.value.accNo,
  name: member.value.name,
});

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = getNextStep(pageDef);
  navigateTo(`/withdrawals/create/${redirectPath}`);
};
</script>
