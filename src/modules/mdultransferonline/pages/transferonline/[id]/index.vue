<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <div class="flex justify-center">
        <Icon class="w-20 h-20 text-green-400"
          name="line-md:confirm-circle"></Icon>
      </div>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        ทำรายการฝากเงินเสร็จสิ้น
      </h2>
      <h3 class="text-center text-gray-500 dark:text-gray-300 ">
        กลับไปยังหน้าแรกเพื่อตรวจสอบยอดเงิน
      </h3>
      <div class="flex justify-center">
        <UButton to="/transferonline/">Home</UButton>
      </div>
      <!-- <UCard>
        <DEntitySection v-model="data"
          :entries
          :pending />
      </UCard> -->
    </BPartPageBody>

    <!-- <template #side>
      <DSubLinks />
    </template> -->
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);
</script>
