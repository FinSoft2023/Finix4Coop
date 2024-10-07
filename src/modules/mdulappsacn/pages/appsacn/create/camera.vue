<template>
  <BFullPage>
    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <div class="flex justify-center">
          <div v-if="!photoData">
            <!-- วิดีโอแสดงผลจากกล้อง -->
            <video ref="video" autoplay></video>
            <div class="flex justify-center mt-8">
              <UButton @click="capturePhoto">ถ่ายรูป</UButton>
            </div>
          </div>

          <div v-else>
            <!-- แสดงตัวอย่างรูปภาพที่ถ่าย -->
            <img :src="photoData" alt="รูปที่ถ่ายได้" />
            <div class="flex justify-center mt-8 gap-8">
              <UButton @click="retakePhoto">ถ่ายใหม่</UButton>
              <UButton type="submit" to="/appsacn/[id]/complete">ตกลง</UButton>
            </div>
          </div>
        </div>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.camera');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/appsacn${redirectPath}`);
};
import { ref, onMounted, onBeforeUnmount } from 'vue';

const video = ref(null);
const photoData = ref(null);
let stream = null;

// เปิดกล้องและแสดงวิดีโอ
onMounted(async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.value.srcObject = stream;
  } catch (error) {
    console.error('ไม่สามารถเข้าถึงกล้องได้:', error);
  }
});

// หยุดการใช้งานกล้องเมื่อออกจากคอมโพเนนต์
onBeforeUnmount(() => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
});

// ถ่ายรูป
function capturePhoto() {
  const canvas = document.createElement('canvas');
  const videoElement = video.value;

  // ตั้งค่าขนาด canvas ให้ตรงกับวิดีโอ
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  // วาดวิดีโอไปบน canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  // แปลง canvas เป็น Data URL ของรูปภาพ
  photoData.value = canvas.toDataURL('image/png');
}

// ถ่ายรูปใหม่
function retakePhoto() {
  photoData.value = null;
}
</script>
<style scoped>
video {
  width: 100%;
  max-width: 400px;
}

img {
  width: 100%;
  max-width: 400px;
  border: 2px solid #000;
}
</style>
