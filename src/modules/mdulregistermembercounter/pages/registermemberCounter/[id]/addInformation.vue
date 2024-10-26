<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <UCard>
          <div class="flex justify-between">
            <div>
              <UButton>สแกนเอกสารหักเงินเดือน</UButton>
            </div>
            <div class="flex gap-4">
              <p v-if="!selected">ไม่อนุมัติ</p>
              <p v-else>อนุมัติ</p>
              <UToggle
                on-icon="i-heroicons-check-20-solid"
                off-icon="i-heroicons-x-mark-20-solid"
                v-model="selected"
              />
            </div>
          </div>
        </UCard>
        <UButton type="submit">บันทึก</UButton>
      </UForm>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';
const selected = ref(false);

const pageDef = useActiveModulePage('each.addInformation');
useBreadcrumb('Edit');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { executePost } = apiPost();

useComponentResolver(defaultEditResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./');
};
</script>
