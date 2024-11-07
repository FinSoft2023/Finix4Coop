<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <BPartPageBody>
      <FTransaction />

      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <!-- <UCard>
          <DEntitySection v-model="data"
            :entries="entries"
            :pending />
        </UCard> -->
        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >กลับ</UButton
          >
          <template #next>
            <UButton type="submit">
              ถัดไป
              <UIcon
                class="h-4 w-4"
                name="i-heroicons-chevron-right-16-solid"
              />
            </UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.root');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/Transactionphone${redirectPath}`);
};
</script>
