<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, index) in photos"
        :key="index">
        <img class="h-auto max-w-full rounded-lg cursor-pointer"
          :src="image.src"
          :alt="image.alt"
          @click="showImage(image)">
      </div>
    </div>

    <div v-if="selectedImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      @click="closeImage">
      <img class="max-w-full max-h-full"
        :src="selectedImage.src"
        :alt="selectedImage.alt">
    </div>
  </div>
</template>

<script setup lang="ts">
interface Image {
  src: string;
  alt: string;
}

const props = defineProps<{ photos: Image[] }>();

const selectedImage = ref<Image | null>(null);

function showImage(image: Image) {
  selectedImage.value = image;
}

function closeImage() {
  selectedImage.value = null;
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>