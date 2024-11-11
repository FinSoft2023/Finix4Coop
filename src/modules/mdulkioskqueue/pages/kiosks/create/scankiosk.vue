<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <FTransaction />
    </BPartPageBody>

    
    <BPartButtonsBand>
      <UButton
        class="mr-5"
        size="xl"
        icon="i-heroicons-chevron-left-16-solid"
        variant="outline"
        to="/kiosks/index/addline"
      >
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton
          size="xl"
          variant="solid"
          :trailing="true"
          icon="i-heroicons-chevron-right-16-solid"
          to="/kiosks/index"
        >
          รับคิว
        </UButton>
      </template>
    </BPartButtonsBand>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.scankiosk');
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
