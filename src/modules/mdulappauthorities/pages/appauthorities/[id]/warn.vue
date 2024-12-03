<template>
  <BFullPage>
    <BPartPageBody>
      <div class="mt-10 flex flex-col justify-center items-center">
        <Icon name="i-hugeicons-payment-success-01"
          class="w-10 h-10 text-green-600"></Icon>
        <h1 class="mb-2 mt-1 text-center text-2xl tracking-tight  lg:text-4xl text-gray-900 dark:text-white">
          ถ่ายรูปเสร็จแล้ว
        </h1>
        <h1 class="mb-4 text-center text-1xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
          กรุณาดำเนินการต่อบนคอมพิวเตอร์ของท่าน
        </h1>
      </div>



    </BPartPageBody>


  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.warn');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);



</script>
