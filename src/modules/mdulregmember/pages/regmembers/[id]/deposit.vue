<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <UAlert icon="i-heroicons-document-check"
      description="ระบุข้อมูลและตรวจสอบเพื่อทำการฝาก online"
      title="ฝากเงิน online" />

    <BPartPageBody>
      <UForm @submit="handleContinue"
        :state="data"
        class="space-y-4">

        <DItemGrid col="x2">
          <UCard>
            <UFormGroup label="จำนวนเงิน (บาท)">
              <UInput type="number"
                required
                v-model="amount" />
            </UFormGroup>
          </UCard>
          <UCard>
            <DEntitySection v-model="data"
              :entries
              :pending />
          </UCard>
        </DItemGrid>
        <BPartButtonsBand>
          <template #next>
            <UButton type="submit">ดำเนินการต่อ</UButton>
          </template>
        </BPartButtonsBand>

      </UForm>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.deposit');

const { entries } = getEntrySchema(pageDef, 'account');
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const amount = ref<number>();
const memcode = computed(() => data.value?.memcode);

const qrSto = useQrStore();
const { qrCode } = storeToRefs(qrSto);
async function handleContinue() {
  await executePost({ amount: amount.value, memcode: memcode.value });
  const qrResultText = postResult.value;
  const qrResult = JSON.parse(qrResultText);
  qrCode.value = qrResult.QrText;
  navigateTo('./depositing');
}

useBreadcrumb(pageDef.label);
</script>
