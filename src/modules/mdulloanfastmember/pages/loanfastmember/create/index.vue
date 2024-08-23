<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

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
            <div class="mt-2 space-y-2">
              <p class="text-sm">ดอกเบี้ย</p>
              <FMoneyAmount v-if="data.installments" :amount="(data.Amount / 100) * 5"></FMoneyAmount>
              <p class="text-sm">ส่งงวด (บาท/งวด)</p>
              <FMoneyAmount v-if="data.installments" :amount="(data.Amount / 12) + ((data.Amount / 100) * 5)"></FMoneyAmount>
            </div>
          </UCard>
          <FMemberInfo :account="data?.account"></FMemberInfo>

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
  navigateTo(`/loanfastmember/create/${redirectPath}`);
};
</script>
