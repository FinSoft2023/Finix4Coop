<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <p class="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          เตรียมตัว "ถ่ายภาพ" ยืนยันตัวตน
        </p>
        <p class="mb-4 text-lg tracking-tight text-gray-600 dark:text-gray-300">
          กรุณาทำการตั้งค่าและเตรียมตัวให้พร้อมก่อนที่จะทำการยืนยันตัวตน
        </p>
        <div class="flex justify-center mb-8">
          <client-only>
                <Vue3Lottie
               animationLink="https://lottie.host/58c8b5de-64d8-4ce4-af3a-aab5dc38896f/BzAMrKZpao.json"
                 :height="400"
                  :width="400"
                 />
              </client-only>
        </div>
        <div class="mt-8">
          <UButton to="/kiosks/create"
            size="xl"
            variant="solid">
            เริ่มถ่ายภาพ
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import { useRouter } from 'vue-router';

const countdown = ref(3);  // 3 วินาที
const countdownActive = ref(false);
let countdownInterval = null;
const router = useRouter();

const startCountdown = () => {
  countdownActive.value = true;
  countdownInterval = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value -= 1;
    } else {
      clearInterval(countdownInterval);
      countdownActive.value = false;
      router.push('/photo');  // เปลี่ยนเส้นทางไปยังหน้าถ่ายรูป
    }
  }, 1000);
};
</script>
