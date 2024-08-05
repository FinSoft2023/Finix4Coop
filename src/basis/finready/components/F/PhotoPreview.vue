<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center">
      <h3 class=" text-4xl font-bold dark:text-white">เอกสาร ถอนเงิน</h3>
    </div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl ">
      <section>
        <div class="p-4 font-bold">ใบถอนเงิน Withdrewal SLIP</div>
        <UCard>
          <div class=" flex justify-center text-center items-center">
            <DGallery :photos=""></DGallery>
          </div>
        </UCard>
      </section>
      <div class="mt-4 mx-auto max-w-screen-sm text-center">
        <UButton class="mr-5"
          size="xl"
          variant="solid"
          icon="i-mdi-file-document-delete-outline">
          ลบเอกสาร
        </UButton>
        <UButton size="xl"
          variant="solid"
          icon="i-heroicons-arrow-right"
          to="/flow5/step5">
          ดำเนินการต่อ
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const photos = [{

}]
</script>