<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->
    <BPartPageBody>
      <div class="flex justify-center">
        <Icon class="w-20 h-20 text-green-400"
          name="line-md:confirm-circle"></Icon>
      </div>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        ขอกู้ฉุกเฉินเรียบร้อยแล้ว
      </h2>
      <h3 class="text-center text-gray-500 dark:text-gray-300 ">
        คุณสามารถดำเนินการทำธุกรรมออนไลน์ได้แล้ว
      </h3>
      <div class="flex justify-center">
        <UButton to="/">Home</UButton>
      </div>    
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
  navigateTo(`/loanfastmember${redirectPath}`);
};
</script>
