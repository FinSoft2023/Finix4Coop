<template>
  <UButton class="mr-5" size="sm" variant="solid" to=""> บันทึก </UButton>
  <UButton class="mr-5" size="sm" variant="solid" to="" color="gray">
    ยกเลิก
  </UButton>
  <UCard>
    <h1
      class="mb-8 text-center text-2xl tracking-tight font-extrabold lg:text-2xl text-gray-900 dark:text-white"
    >
      กดปุ่ม สแกนเอกสาร ด้านล่าง เพื่อเก็บไฟล์เอกสารไว้ในระบบ
    </h1>
    <div class="mb-8">
      <!-- ข้อความหัวเรื่อง -->
      <div class="flex justify-center items-center gap-8 mb-8">
        <div class="text-center">
          <UIcon name="i-heroicons-document-text" class="w-[25mm] h-[25mm]" />
          <div class="text-center items-top">
            <P>นำเอกสารเข้าเครื่อง</P>
          </div>
        </div>
        <div class="text-center">
          <UIcon name="i-mdi-chevron-right" class="w-[15mm] h-[15mm]" />
        </div>
        <div class="text-center">
          <UIcon name="i-mdi-scanner" class="w-[25mm] h-[25mm]" />
          <div class="text-center items-">
            <P>กดปุ่ม สแกนเอกสาร</P>
          </div>
        </div>
      </div>     
      <div class="flex justify-center">
        <UButton size="sm" icon="i-mdi-scanner"> สแกนเอกสาร </UButton>
      </div>
    </div>
  </UCard>
  <DGallery :photos="photos"></DGallery>
</template>
<script setup lang="ts">
const photos = ref([
  {
    src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg',
    alt: 'Photo 1',
  },
  {
    src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg',
    alt: 'Photo 2',
  },
  {
    src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg',
    alt: 'Photo 3',
  },
]);
</script>
