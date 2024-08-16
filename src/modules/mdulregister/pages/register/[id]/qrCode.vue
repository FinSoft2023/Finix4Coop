<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <div class="mx-auto max-w-screen-sm text-center">
            <p class="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-2xl dark:text-white">
              สแกน Qr Code ผูก Chat Bot Line</p>
            <div class="flex justify-center">
              <img class="max-w-full shadow-md rounded-lg"
                   src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                   alt="">
            </div>
           
          </div>
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.qrCode');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
