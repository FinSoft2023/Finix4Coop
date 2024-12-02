<template>
   <UCard v-if="!showSecondCard">
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
            <UButton @click="$router.back">ยืนยันการสแกน</UButton>
          </div>
        </UCard>
</template>
<script setup lang="ts">
import { ref } from 'vue';


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
