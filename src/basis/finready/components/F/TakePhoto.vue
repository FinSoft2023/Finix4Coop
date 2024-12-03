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

        <div class="relative">
          <video v-show="!photoTaken"
            ref="video"
            width="640"
            height="480"
            autoplay></video>
          <canvas v-show="photoTaken"
            ref="canvas"
            style="width: 640px; height: 480px;"></canvas>
          <div v-if="countdownActive"
            class="absolute inset-0 flex items-center justify-center bg-black/10">
            <div class="countdown-circle">
              <span class="text-6xl font-bold text-white">{{ countdown }}</span>
            </div>
          </div>
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
            to="/kiosks/create/transaction">
            ดำเนินการต่อ
          </UButton>
          <!-- <NuxtLink to="/kiosks/index/infomessenger">></NuxtLink> -->
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
const countdown = ref(5);
const countdownActive = ref(false);
const videoSettings = ref({ width: 1920, height: 1080 });
let countdownInterval = null;

const startVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = stream;

    // ดึงข้อมูลความละเอียดของกล้อง
    const track = stream.getVideoTracks()[0];
    const settings = track.getSettings();
    videoSettings.value.width = settings.width || 1920;
    videoSettings.value.height = settings.height || 1080;

    // ตั้งค่าขนาดแสดงผลเริ่มต้น
    video.value.width = videoSettings.value.width;
    video.value.height = videoSettings.value.height;
  } catch (err) {
    console.error("Error accessing the camera:", err);
  }
};

const takePhoto = () => {
  // ใช้ความละเอียดของกล้องที่ได้จาก `videoSettings`
  const context = canvas.value.getContext('2d');
  const { width, height } = videoSettings.value;
  canvas.value.width = width;
  canvas.value.height = height;

  context.drawImage(video.value, 0, 0, width, height);

  // กำหนดขนาดแสดงผลเป็น 640x480
  canvas.value.style.width = '640px';
  canvas.value.style.height = '480px';

  photoTaken.value = true;

  const stream = video.value.srcObject;
  const tracks = stream.getTracks();
  tracks.forEach(track => track.stop());
};

const startCountdown = () => {
  countdownActive.value = true;
  countdown.value = 5;
  countdownInterval = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value -= 1;
    } else {
      clearInterval(countdownInterval);
      countdownActive.value = false;
      takePhoto();
    }
  }, 1000);
};

const retakePhoto = () => {
  photoTaken.value = false;
  startVideo();
  startCountdown();
};

onMounted(() => {
  startVideo();
  startCountdown(); // เริ่มนับถอยหลังและถ่ายรูปทันที
});
</script>

<style>
.countdown-circle {
  width: 120px;
  height: 120px;
  border: 8px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    border-color: rgba(255, 255, 255, 0.8);
  }

  50% {
    transform: scale(1.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  100% {
    transform: scale(1);
    border-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
