<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
          <h1
            class="mb-8 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white"
          >
            คุณต้องการรับคิวจากช่องทางไหน ?
          </h1>
          <DItemGrid col="x2">
            <UPageCard
              v-for="(module, index) in modules"
              :key="index"
              class="text-red-500"
              v-bind="module"
            >
              <!-- <template #description>
                <span class="line-clamp-2">{{ module.description }}</span>
              </template> -->
            </UPageCard>
          </DItemGrid>
        </div>
      </section>
      <!-- <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
          <h1
            class="mb-8 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white"
          >
            คุณต้องการรับคิวจากช่องทางไหน ?
          </h1>

          <div class="flex justify-center space-x-4 mt-4">
            <UButton
              class="mr-5"
              size="xl"
              variant="solid"
              :trailing="true"
              to="/kiosks/create/choice"
            >
              โทรศัพท์
            </UButton>
            <UButton
              size="xl"
              variant="solid"
              :trailing="true"
              to="/kiosks/create/scankiosk"
            >
              จากตู้ (ไม่มีโทรศัพท์)
            </UButton>
          </div>
        </div>
      </section> -->
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

const modules = [
  {
    title: 'โทรศัพท์',
    to: '/kiosks/create/uiscan',
    icon: 'i-mdi-cellphone',
  },
  {
    title: 'จากตู้ (ไม่มีโทรศัพท์)',
    to: '/kiosks/create/choice',
    icon: 'i-mdi-cast-variant',
  },
];
</script>
