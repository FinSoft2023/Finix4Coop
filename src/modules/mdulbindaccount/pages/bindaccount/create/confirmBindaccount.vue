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
            <div class="flex justify-center">
        <Icon class="w-20 h-20 text-green-400"
              name="line-md:confirm-circle"></Icon>
      </div>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        สมาชิกได้ทำการระบุตัวตนเรียบร้อยแล้ว
      </h2>
  
          </UCard>
          <UCard> Your content here </UCard>
        </DItemGrid>

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton type="submit">ดำเนินการต่อ</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.confirmBindaccount');
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
  navigateTo(`/bindaccount/create/${redirectPath}`);
};
</script>
