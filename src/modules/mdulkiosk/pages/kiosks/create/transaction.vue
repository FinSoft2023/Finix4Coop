<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <!-- <UCard>
          <DEntitySection v-model="data"
            :entries="entries"
            :pending />
        </UCard> -->
        <FTransaction />

        <BPartButtonsBand>
          <UButton class="mr-5"
            size="xl"
            variant="outline"
            icon="i-heroicons-chevron-left-16-solid"
            to="/kiosks/create/takephoto">
            ย้อนกลับ
          </UButton>
          <template #next>
            <UButton size="xl"
              variant="solid"
              icon="i-heroicons-chevron-right-16-solid"
              :trailing="true"
              type="submit">Save</UButton>
          </template>
        </BPartButtonsBand>

      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.transaction');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/kiosks${redirectPath}`);
};
</script>
