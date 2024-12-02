<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>


    <UAlert
      icon="i-heroicons-document-check"
      description="กรุณาตรวจสอบความถูกต้องของข้อมูล"
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
      
          <UCard class="col-span-2">
            <DEntitySection v-model="data" :entries :pending />
            
          </UCard>
          <UCard class="mt-2 items-center">
            <h5
              class="text-md font-bold leading-none text-gray-900 dark:text-white"
            >
              ข้อมูลครอบครัวของคุณ
            </h5>
            <div class="mt-3 flex items-center">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg" :alt="` image`">
          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-md font-medium text-gray-900 truncate dark:text-white">นางสำลี ข้าวสวย</p>
            <p class="text-md text-gray-500 truncate dark:text-gray-400">บุตร</p>
          </div>
        </div>
        </UCard>
        <UCard class="mt-2 items-center">
            <h5
              class="text-md font-bold leading-none text-gray-900 dark:text-white"
            >
              ข้อมูลผู้รับผลประโยชน์
            </h5>
            <div class="mt-3 flex items-center">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg" :alt="` image`">
          </div>
          <div class="flex-1 min-w-0 ms-4">
            <p class="text-md font-medium text-gray-900 truncate dark:text-white">นางสำลี ข้าวสวย</p>
            <p class="text-md text-gray-500 truncate dark:text-gray-400">บุตร</p>
          </div>
        </div>
        </UCard>
   

        <BPartButtonsBand>
          <UButton
            @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline"
            >ย้อนกลับ</UButton
          >
          <template #next>
            <UButton type="submit">ยืนยันการสมัคร</UButton>
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
  navigateTo(`/registermember${redirectPath}`);
};
</script>
