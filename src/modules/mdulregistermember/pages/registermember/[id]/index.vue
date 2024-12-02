<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <!-- <DEntitySection v-model="data" :entries :pending /> -->
        <div class="p-4">
        <Placeholder class="h-48" />
        <div class="flex justify-center">
          <Icon
            class="w-20 h-20 text-green-400"
            name="line-md:confirm-circle"
          ></Icon>
        </div>
        <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          ส่งคำขอสมัครสมาชิกเรียบร้อยแล้ว
        </h2>
        <h3 class="text-center text-gray-500 dark:text-gray-300">
          กรุณาติดต่อเจ้าหน้าที่ได้ที่สหกรณ์
        </h3>
        <div class="flex justify-center mt-5">
          <UButton to="/">หน้าแรก</UButton>
        </div>
      </div>
      </UCard>
    </BPartPageBody>

    <template #side>
      <!-- <DSubLinks /> -->
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
