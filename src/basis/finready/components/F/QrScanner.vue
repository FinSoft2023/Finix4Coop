<template>
  <div>
    <video ref="video"
      class="qr-video"
      autoplay
      muted
      playsinline></video>
    <canvas ref="canvas"
      class="qr-canvas"
      hidden></canvas>
    <div class="qr-result"
      v-if="qrCode">
      <p>ผลลัพธ์: {{ qrCode }}</p>
    </div>
    <div class="flex justify-center mt-4 gap-4">
      <UButton @click="stopScan"
        :disabled="!scanning">หยุดสแกน</UButton>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// import jsQR from "jsqr";

export default {
  name: "QrScanner",
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const scanning = ref(false);
    const qrCode = ref<string | null>(null);
    let stream: MediaStream | null = null;
    let animationFrame: number;

    const startScan = async () => {
      qrCode.value = null;
      scanning.value = true;

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        if (video.value) {
          video.value.srcObject = stream;
          video.value.play();
        }

        scanFrame();
      } catch (error) {
        console.error("Error accessing camera: ", error);
        scanning.value = false;
      }
    };

    const stopScan = () => {
      scanning.value = false;

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
      }

      cancelAnimationFrame(animationFrame);
    };

    const scanFrame = () => {
      if (!canvas.value || !video.value) return;

      const context = canvas.value.getContext("2d");
      if (!context || !video.value.videoWidth || !video.value.videoHeight) return;

      canvas.value.width = video.value.videoWidth;
      canvas.value.height = video.value.videoHeight;

      context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

      const imageData = context.getImageData(0, 0, canvas.value.width, canvas.value.height);
      const qrResult = jsQR(imageData.data, imageData.width, imageData.height);

      if (qrResult) {
        qrCode.value = qrResult.data;
        stopScan();
      } else {
        animationFrame = requestAnimationFrame(scanFrame);
      }
    };

    onMounted(() => {
      console.log("QR Scanner Mounted");
      startScan();
    });

    onUnmounted(() => {
      stopScan();
    });

    return {
      video,
      canvas,
      scanning,
      qrCode,
      startScan,
      stopScan,
    };
  },
};
</script>

<style scoped>
.qr-video {
  width: 100%;
  max-height: 300px;
  border: 1px solid #ccc;
}

.qr-result {
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid green;
  background-color: #f0fff0;
}
</style>