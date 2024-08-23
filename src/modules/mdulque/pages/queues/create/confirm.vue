<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-document-check"
      description="ตรวจสอบข้อมูลของสมาชิกผู้เข้ารับบริการ"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :schema="schema"
        :state="data"
        :pending="pending"
        class="space-y-4">
        <DItemGrid col="x3">
          <UCard class="col-span-2">
            <DEntitySection v-model="data"
              :entries
              :pending />
          </UCard>
          <UCard>
            <img alt="Queue Image"
              :src="queue.imageUrl" />
          </UCard>
        </DItemGrid>

        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
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
const qsto = useQueStore();
const { queue, member } = storeToRefs(qsto);

const pageDef = useActiveModulePage('create.confirm');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const query = ref<any>({});
const { postResult, error, executePost } = apiPost(query);

useComponentResolver(defaultViewResolvers);

const handleSubmit = async () => {
  query.value = { id: queue.value.id };
  member.value = data.value;

  await executePost({
    status: 'called',
  });
  navigateTo(`/officer/create`);
};
</script>
