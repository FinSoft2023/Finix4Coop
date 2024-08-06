<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-book-open"
      description="QR Code โอนเงิน"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <UCard class="flex justify-center">
          <img :src="qrCode"
            alt="QR Code"
            class="flex justify-center max-w-full shadow-md rounded-lg"
            style="width: 200px; height: 200px" />
        </UCard>

        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
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

  const pageDef = useActiveModulePage('create.qrcode');
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
    navigateTo(`/transferonline/create/${redirectPath}`);
  };
</script>
