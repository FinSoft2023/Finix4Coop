<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <!-- First UCard that will toggle the second one -->
      <UCard v-if="!showSecondCard" @click="toggleSecondCard">
        <!-- <p class="text-2xl font-bold text-center">เก็บเข้าเอกสารกลับเข้าระบบ</p>
        <img alt=""
          :src="imageUrl">
        <DShowQrCode qr-data="https://anycounter-428810.web.app/chooseInputCheck" /> -->
        <FScanPaper></FScanPaper>
      </UCard>

      <!-- Second UCard that will replace the first one -->
      <UCard v-if="showSecondCard" @click="toggleSecondCard">
        <p class="text-2xl font-bold text-center">เอกสารที่สแกนเเล้ว</p>
        <img src="https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg" alt="Your Image" class="mx-auto mt-4" />
        <div class="flex justify-center mt-5">
          <UButton class="mr-3">สแกนเอกสารใหม่</UButton>
          <UButton>ยืนยันการสแกน</UButton>
        </div>
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageDef = useActiveModulePage('each.scan');
const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);

// Ref to control visibility of the second card
const showSecondCard = ref(false);

// Toggle function to switch between the two UCards
const toggleSecondCard = () => {
  showSecondCard.value = !showSecondCard.value;
};
</script>
