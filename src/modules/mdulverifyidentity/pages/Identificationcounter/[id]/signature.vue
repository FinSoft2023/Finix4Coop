<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
  
  <UCard v-if="!showSecondCard">
    <div class="flex justify-center mb-5">    
    <h1>สแกนเก็บลายเซ็น</h1>
  </div>
    <FScanPaper></FScanPaper>
    <div class="flex items-center justify-center">
      <UButton @click="toggleSecondCard"
        icon="i-mdi-scanner">Scan Paper</UButton>
    </div>
  </UCard>
  <!-- Second UCard that will replace the first one -->
  <UCard v-if="showSecondCard">
    <p class="text-2xl font-bold text-center mb-4">เอกสารที่สแกนเเล้ว</p>
    <DGallery :photos="photos" />
    <div class="flex justify-center mt-5">
      <UButton @click="toggleSecondCard"
        class="mr-3">สแกนเอกสารใหม่</UButton>
      <UButton >ยืนยันการสแกน</UButton>
    </div>
  </UCard>
<div class="flex justify-end">
<!-- <UButton to="/membership/7tpveu8kbhtz24cwsrwh/verifyIdentityQR">ถัดไป</UButton> -->
</div>
</BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('each.signature');
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
// Ref to control visibility of the second card
const showSecondCard = ref(false);
// Toggle function to switch between the two UCards
const toggleSecondCard = () => {
  showSecondCard.value = !showSecondCard.value;
};
// Photos array ref for DGallery component
const photos = ref([
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },
]);
</script>
