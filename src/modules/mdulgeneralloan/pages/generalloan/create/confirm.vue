<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-document-check"
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
          <UCard>
            <img :src="img"
              alt="img"
              class="max-w-full shadow-md rounded-lg w-500 h-auto" />
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

const pageDef = useActiveModulePage('create.confirm');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

useComponentResolver(defaultViewResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/generalloan${redirectPath}`);
};

const img = ref('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png');
</script>
