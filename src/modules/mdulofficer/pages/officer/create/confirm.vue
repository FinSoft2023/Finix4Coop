<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert
      icon="i-heroicons-document-check"
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
            <p class="text-2xl font-bold text-center mt-24">เริ่มดำเนินการผูกบัญชี</p>
          </UCard>
          <FMemInfoQ />
        </DItemGrid>

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >Back</UButton
          >
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

const pageDef = useActiveModulePage('create.confirm');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { pending } = apiGet();
const { postResult, error, executePost } = apiPost();

const qsto = useQueStore();
const { queue, member } = storeToRefs(qsto);
const data = ref<any>({
  memcode: member.value.memcode,
  accNo: member.value.accNo,
  name: member.value.name,
  balance: 10000,
});

useComponentResolver(defaultViewResolvers);


const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/officer${redirectPath}`);
};
</script>
