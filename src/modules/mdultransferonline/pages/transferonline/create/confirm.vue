<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert icon="i-heroicons-document-check"
      description="ยืนยันจำนวนเงินฝาก"
      :title="pageDef.label" />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">

        <DItemGrid col="x2">
          <UCard>
            <div class="p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-700 font-medium">จำนวนเงินฝาก (บาท)</span>
                <span class="text-gray-900 font-bold">{{ data.amount }}</span>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-700 font-medium">ค่าธรรมเนียม (บาท)</span>
                <span class="text-gray-900 font-bold">8</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-700 font-medium">รวมจ่าย (บาท)</span>
                <span class="text-gray-900 font-bold">{{ data.amount + 8 }}</span>
              </div>
            </div>
          </UCard>
          <UCard>
            <div class="flex justify-center items-center">
              <img alt="qr payment"
                :src="qrCode" />
            </div>
          </UCard>
        </DItemGrid>

        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
          <template #next>
            <UButton class="hidden"
              type="submit">comfirm</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';
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

const memSto = useLinkMemberStore();
const { memcode, amount, qrcode } = storeToRefs(memSto);

// const 
const qrCode = useQRCode(qrcode.value);

useComponentResolver(defaultViewResolvers);

const handleSubmit = async () => {
  amount.value = amount.value + data.value.amount;
  await executePost(Object.assign(data.value, { memcode: memcode.value, txat: new Date().toISOString() }));
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/transferonline${redirectPath}`);
};
</script>
