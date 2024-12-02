<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
        ต้องมีไลน์สหกรณ์เพื่อคิว
      </h1>
      <h1 class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        กรุณาเปิด QR จากไลน์ แล้วแสดงกับกล้อง kiosk ด้านล่าง
      </h1>
      <div class="flex justify-center">
        <h1 @click="showinfo"
          class="mb-4 mr-2 text-center  text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white underline">
          วิธีเปิด QR
        </h1>
        <UIcon name="i-mdi-alert-circle"
          class="text-gray-500 w-6 h-6 mt-2" />
      </div>
      <!-- <h1 class="mt-8 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        เข้าไลน์ SAVING SSFH COOP เลือกเมนู QR Code รับคิว
      </h1> -->
      <div class="mt-0 flex justify-center text-center items-center gap-4">
        <!-- ภาพ QR Code -->
        <div class="flex justify-center text-center items-center gap-8">
          <NuxtLink to="/kiosks/preparephoto">
            <img class="w-[400px] h-auto"
              src="../../../../apps/facingweb/public/images/shownowqr.png"
              alt="photo1" />
          </NuxtLink>
        </div>
      </div>
      <div class="mt-8 flex justify-center">
        <UButton class="mr-5"
          size="xl"
          variant="outline"
          to="/kiosks/addline">
          ยังไม่ Line สหกรณ์
        </UButton>
        <UButton size="xl"
          variant="solid"
          :trailing="true"
          to="/kiosks/create/numpad">
          ไม่มีโทรศัพท์ (รับจากตู้คิว)
        </UButton>
      </div>
      <div v-if="isVisible"
        class="mt-8">
        <h1 class="mt-8 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
          วิธีเพิ่มเพื่อน Line สหกรณ์
        </h1>
        <div class="flex justify-center text-center items-center gap-8">
          <img class="w-[700px] h-auto"
            src="../../../../apps/facingweb/public/images/QRG.png"
            alt="photo1" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const countdown = ref("00:10:00"); // เวลาเริ่มต้น
let countdownInterval = null;

const startCountdown = () => {
  let timeRemaining = 10 * 60; // 10 นาทีในรูปแบบวินาที

  countdownInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (timeRemaining % 60).toString().padStart(2, "0");
      countdown.value = `00:${minutes}:${seconds}`;
    } else {
      clearInterval(countdownInterval);
      countdown.value = "00:00:00";
      // สามารถเพิ่มการทำงานเมื่อเวลาหมดได้
    }
  }, 1000);
};

// ใช้ ref เพื่อสร้างตัวแปร state
const isQRCodeVisible = ref(false);
const isVisible = ref(false);

// ฟังก์ชันที่ใช้เมื่อกดปุ่มเพื่อแสดง QR Code
const showQRCode = () => {
  isQRCodeVisible.value = true;
};
const showinfo = () => {
  isVisible.value = true;
};



onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});
</script>
