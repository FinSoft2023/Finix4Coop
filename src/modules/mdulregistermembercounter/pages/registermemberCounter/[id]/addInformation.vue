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
        <UButton type="submit">บันทึก</UButton>
        <UCard>
          <div class="flex justify-between">
            <div>
              <UButton @click="showImage = true">สแกนเอกสารหักเงินเดือน</UButton>
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
          <div class="flex justify-center" v-if="showImage">
            <img
              class="h-[500px]"
              src="http://womenfund.in.th/images/2560/06.2560/2708/2708.jpg"
              alt="สแกนเอกสารหักเงินเดือน"
            />
          </div>
        </UCard>
      </UForm>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref(false);
const showImage = ref(false);

const pageDef = useActiveModulePage('each.addInformation');
useBreadcrumb('Edit');

const { entries, schema } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { executePost } = apiPost();

useComponentResolver(defaultEditResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./');
};
</script>
