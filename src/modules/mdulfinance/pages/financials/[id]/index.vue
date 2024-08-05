<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BOnPageNotification id="next"
      label="ข้อมูลคำขอได้เข้าสู่ระบบแล้ว"
      description="สามารถกดที่ปุ่ม 'ทำรายการถัดไป' ได้หากต้องการทำรายการคำขอถัดไป."
      actionText="ทำรายการถัดไป" />

    <BPartPageBody>
      <DItemGrid col="x3">
        <UCard class="col-span-2">
          <DEntitySection v-model="data"
            :entries
            :pending />
        </UCard>

        <FMemberInfo></FMemberInfo>
      </DItemGrid>

      <DGallery :photos="photos"></DGallery>
    </BPartPageBody>

    <template #side>      
      <!-- <DSubLinks /> -->
    </template>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);

  const photos = ref([
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', alt: 'Image 1' },
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', alt: 'Image 2' },
    // Add more images here
  ]);
</script>
