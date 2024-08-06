<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <UAlert icon="i-heroicons-document-check"
      description="ระบุข้อมูลและตรวจสอบเพื่อทำการฝาก online"
      title="ฝากเงิน online" />

    <BPartPageBody>
      <DItemGrid col="x2">
        <UCard>
          <UFormGroup label="จำนวนเงิน (บาท)">
            <UInput type="number"
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
          <UButton @click="handleContinue">ดำเนินการต่อ</UButton>
        </template>
      </BPartButtonsBand>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.deposit');

const amount = ref<number>();

const { entries } = getEntrySchema(pageDef, 'account');
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function handleContinue() {
  navigateTo('./depositing');
}

useBreadcrumb(pageDef.label);
</script>
