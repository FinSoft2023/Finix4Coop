<template>
  <!-- <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <UCard>
        <!-- <DEntitySection v-model="data" :entries :pending /> -->
        <!-- <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          คิว A1
        </h2> -->
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">คุณได้คิวที่
              </p>
              <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                A-002</h1>
              <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">กรุณาเปิดหน้านี้ไว้เเล้วรอเจ้าหน้าที่เรียก </p>
            </div>
          </div>
        </section>
      </UCard>
    </BPartPageBody>


  <!-- </BFullPage> -->
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.queue');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
