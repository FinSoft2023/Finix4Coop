<!-- <template>
  <div class="camera-capture">
    <div v-if="!isCaptured">
      <video ref="video"
        autoplay
        class="camera-video"></video>
      <div class="flex justify-center gap-4 mt-4">
        <UButton icon="i-mdi-camera"
          @click="capturePhoto">ถ่ายรูป</UButton>
      </div>
    </div>
    <div v-else>
      <img :src="photoData"
        alt="ถ่ายรูปสำเร็จ"
        class="photo-preview" />
      <div class="flex justify-center gap-4 mt-4">
        <UButton @click="retakePhoto">ถ่ายใหม่</UButton>
        <UButton to="/appauthorities/[id]/warn">ยันยัน</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'CameraCapture',
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const photoData = ref<string | null>(null);
    const isCaptured = ref(false);
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } }
        });
        if (video.value && stream) {
          video.value.srcObject = stream;
        }
      } catch (error) {
        console.error('ไม่สามารถเปิดกล้องได้:', error);
      }
    };

    const capturePhoto = () => {
      if (video.value) {
        const canvas = document.createElement('canvas');
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        const context = canvas.getContext('2d');
        if (context) {
          context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
          photoData.value = canvas.toDataURL('image/png');
          isCaptured.value = true;
        }
      }
    };

    const retakePhoto = () => {
      photoData.value = null;
      isCaptured.value = false;
    };

    const stopCamera = () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
      }
    };

    onMounted(() => {
      startCamera();
    });

    onUnmounted(() => {
      stopCamera();
    });

    return {
      video,
      photoData,
      isCaptured,
      capturePhoto,
      retakePhoto,
    };
  },
});
</script> -->

<!-- <style scoped>
.camera-capture {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.camera-video {
  width: 100%;
  max-width: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.photo-preview {
  width: 100%;
  max-width: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-capture {
  background-color: #4caf50;
  color: #fff;
}

.btn-retake {
  background-color: #f44336;
  color: #fff;
}
</style> -->
<template>
  <div class="camera-capture">
    <div v-if="!isCaptured">
      <video ref="video"
        autoplay
        class="camera-video"></video>
      <div class="flex justify-center gap-4 mt-4">
        <UButton icon="i-mdi-camera" @click="capturePhoto">ถ่ายรูป</UButton>
      </div>
    </div>
    <div v-else>
      <img :src="photoData"
        alt="ถ่ายรูปสำเร็จ"
        class="photo-preview" />
      <div class="flex justify-center gap-4 mt-4">
        <UButton @click="retakePhoto">ถ่ายใหม่</UButton>
        <UButton to="/appauthorities/[id]/warn">ยันยัน</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'CameraCapture',
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const photoData = ref<string | null>(null);
    const isCaptured = ref(false);
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (video.value && stream) {
          video.value.srcObject = stream;
        }
      } catch (error) {
        console.error('ไม่สามารถเปิดกล้องได้:', error);
      }
    };

    const capturePhoto = () => {
      if (video.value) {
        const canvas = document.createElement('canvas');
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        const context = canvas.getContext('2d');
        if (context) {
          context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
          photoData.value = canvas.toDataURL('image/png');
          isCaptured.value = true;
        }
      }
    };

    const retakePhoto = () => {
      photoData.value = null;
      isCaptured.value = false;
    };

    const stopCamera = () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
      }
    };

    onMounted(() => {
      startCamera();
    });

    onUnmounted(() => {
      stopCamera();
    });

    return {
      video,
      photoData,
      isCaptured,
      capturePhoto,
      retakePhoto,
    };
  },
});
</script>

<style scoped>
.camera-capture {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.camera-video {
  width: 100%;
  max-width: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.photo-preview {
  width: 100%;
  max-width: 400px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-capture {
  background-color: #4caf50;
  color: #fff;
}

.btn-retake {
  background-color: #f44336;
  color: #fff;
}
</style>
