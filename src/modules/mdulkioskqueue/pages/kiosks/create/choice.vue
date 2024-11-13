<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-4 lg:px-6">
          <UForm @submit="handleSubmit"
            :state="data"
            :schema="schema"
            :pending="pending"
            class="space-y-4">
            <h1
              class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
              กรุณากรอกรหัสสมาชิกของท่าน
            </h1>
            <h1 class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
              หากยังไม่มีเลขสมาชิกสามารถกดปุ่ม "ยังไม่เป็นสมาชิก" ด้านล่าง
            </h1>
            <DEntitySection v-model="data"
              :entries="entries"
              :pending />
          </UForm>
        </div>
      </section>
    </BPartPageBody>
    <BPartButtonsBand>
      <UButton class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/index/addline">
        ย้อนกลับ
      </UButton>
      <template #next>
        <!-- <UButton class="mr-4"
          size="xl"
          variant="solid"
          to="/kiosks/create/scankiosk">
          ยังไม่มีรหัสสมาชิก
        </UButton> -->
        <ULink to="/components/link"
          active-class="text-green"
          inactive-class="mr-5 text-green-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          ยังไม่เป็นสมาชิก
        </ULink>
        <UButton size="xl"
          variant="solid"
          icon="i-heroicons-chevron-right-16-solid"
          :trailing="true"
          to="/kiosks/create/scankiosk">
          ถัดไป
        </UButton>
      </template>
    </BPartButtonsBand>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.choice');
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
