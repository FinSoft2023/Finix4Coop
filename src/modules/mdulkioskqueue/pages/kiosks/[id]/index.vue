<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <!-- <DEntitySection v-model="data" :entries :pending /> -->
      <!-- <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
          คิว A1
        </h2> -->
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h1 class="mb-4 text-center text-3xl tracking-tight  lg:text-4xl text-gray-900 dark:text-white">
            หมายเลขคิว
          </h1>
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              A-002
            </h1>           
            <p class="mt-8 text-lg font-light text-gray-500 dark:text-gray-400">
              กรุณาจดจำหมายเลขคิวของคุณไว้ เพื่อใช้เรียกบริการตามลำดับค่ะ
            </p>
            <UIcon class="mt-5 w-[80px] h-[80px] text-gray-500"
              name="i-mdi-note-edit-outline"></UIcon>
          </div>
        </div>
      </section>
      <div class="flex justify-center mt-0">
        <UButton size="xl"
          class="py-2.5 px-20 me-2 mb-2"
          variant="solid"
          :trailing="true"
          to="/kiosks">
          ตกลง
        </UButton>
        <!-- <UButton size="xl" variant="solid" :trailing="true">
                    ไม่ต้องการ
                  </UButton> -->
      </div>
    </BPartPageBody>

    <!-- <template #side>
      <DSubLinks />
    </template> -->
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
