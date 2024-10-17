<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <div class="flex justify-center mt-10">
        <div>
          <img
            class="w-[50mm] h-[50mm] max-w-full rounded-lg"
            src="https://static-00.iconduck.com/assets.00/capture-icon-512x512-kxoj9fna.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-center mt-21">
        <button @click="navigateToLocalhost3001">
          กรุณาสแกน Qr Code ที่ตู้รับคิว
        </button>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('each.loan');
useBreadcrumb('Edit');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { executePost } = apiPost();

useComponentResolver(defaultEditResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./');
};

const navigateToLocalhost3001 = () => {
  window.location.href = 'http://localhost:3000';
};
</script>
