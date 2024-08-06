<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="(image, index) in photos"
        :key="index">
        <img class="h-auto max-w-[500px] rounded-lg cursor-pointer"
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

<script setup
  lang="ts">
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
  const photos = ref([
    { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', alt: 'Image 1' },
    // Add more images here
  ]);
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
