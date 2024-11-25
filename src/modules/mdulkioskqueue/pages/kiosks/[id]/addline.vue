<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-4 lg:px-6">
          <h1 class="mb-8 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
            คุณได้นำโทรศัพท์มาด้วยไหม ?
          </h1>
          <h1 class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
            หากไม่มี กรุณาเลือกเมนู "ไม่มีโทรศัพท์" เพื่อรับคิวบนตู้
          </h1>
          <DItemGrid col="x2">
            <UPageCard v-for="(module, index) in modules"
              :key="index"
              class="text-red-500"
              v-bind="module">
            </UPageCard>
          </DItemGrid>
        </div>
      </section>
    </BPartPageBody>
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
    title: 'มีโทรศัพท์ (รับด้วยโทรศัพท์)',
    to: '/kiosks/index/uiscan',
    icon: 'i-mdi-cellphone',
  },
  {
    title: 'ไม่มีโทรศัพท์ (รับจากตู้คิว)',
    to: '/kiosks/create/choice',
    icon: 'i-mdi-cast-variant',
  },
];
</script>
