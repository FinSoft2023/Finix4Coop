<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        
        <dl>
            <dt
              class="mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            เรื่อง
            </dt>
            <UInput v-model="value" />
            <dt
              class="mt-2 mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            เรียน
            </dt>
            <UInput v-model="value" />

            <dt
              class="mt-2 mb-2 font-light leading-none text-gray-400 dark:text-white"
            >
            บันทึกข้อความ
            </dt>
            <UInput v-model="value" />
           
          </dl>
      </UCard>
      <div class="flex justify-end">
        <UButton>บันทึกข้อความ</UButton>
        <UButton to="/move/gwacyixeidxrxjx4fjb0/print" class="ml-3">ปริ้นเอกสาร</UButton>
      </div>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.report');

const value = ref('')
const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
