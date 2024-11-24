<template>
  <BFullPage>
    <BPartPageBody>
     <FNumpad></FNumpad>
      <div class="mt-8 text-center">
        <ULink to="/kiosks/create/scankiosk"
          active-class="text-green"
          inactive-class="text-green-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          ยังไม่เป็นสมาชิก
        </ULink>
      </div>
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
const pageDef = useActiveModulePage('create.choice');
useBreadcrumb('Create');

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const { postResult, executePost } = apiPost();


const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/kiosks${redirectPath}`);
};
</script>
