<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <p v-if="!photoTaken"
          class="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          ถ่ายภาพ ยืนยันตัวตน
        </p>
        <p v-if="photoTaken"
          class="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          ภาพถ่ายของท่าน
        </p>

        <div>
          <video v-show="!photoTaken"
            ref="video"
            width="640"
            height="480"
            autoplay></video>
          <canvas v-show="photoTaken"
            ref="canvas"
            width="640"
            height="480"></canvas>
        </div>

        <div class="mt-5"
          v-if="!photoTaken">
          <UButton @click="takePhoto"
            size="xl"
            variant="solid"
            icon="i-heroicons-camera"
            :trailing="true">
            ถ่ายภาพ
          </UButton>
        </div>

        <div class="mt-5"
          v-if="photoTaken">
          <UButton @click="retakePhoto"
            class="mr-5"
            size="xl"
            variant="solid"
            icon="i-heroicons-arrow-uturn-left"
            :trailing="true">
            ถ่ายภาพใหม่
          </UButton>
          <UButton size="xl"
            variant="solid"
            icon="i-heroicons-arrow-right"
            :trailing="true"
            to="/kiosks/create/choice">
            ดำเนินการต่อ
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const photoTaken = ref(false);
const video = ref(null);
const canvas = ref(null);

const startVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = stream;
  } catch (err) {
    console.error("Error accessing the camera:", err);
  }
};

const takePhoto = () => {
  const context = canvas.value.getContext('2d');
  context.drawImage(video.value, 0, 0, 640, 480);
  photoTaken.value = true;

  const stream = video.value.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
};

const retakePhoto = () => {
  photoTaken.value = false;
  startVideo();
};

onMounted(() => {
  startVideo();
});
</script>
