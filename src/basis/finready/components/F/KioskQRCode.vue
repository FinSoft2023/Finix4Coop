<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
        สแกนรับคิวด้วยไลน์สหกรณ์
      </h1>
      <h1 class="mt-8 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        เข้าไลน์ SAVING SSFH COOP สแกน QR Code
      </h1>
      <div class="mt-8 flex justify-center text-center items-center gap-8">
        <!-- ภาพ QR Code -->
        <UCard>
          <div class="flex justify-center text-center items-center gap-8">
            <img class="w-[200px] h-auto"
              src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
              alt="QR Code" />
          </div>
        </UCard>
      </div>
      <!-- เวลาแบบนับถอยหลัง -->
      <div class="flex justify-center items-center gap-2">
        <UIcon name="i-mdi-refresh"
          class="w-8 h-8 cursor-pointer"
          @click="resetCountdown" />
        <h1 class="mt-8 mb-8 text-center text-3xl tracking-tight lg:text-3xl text-gray-900 dark:text-white">
          {{ countdown }}
        </h1>
      </div>
      <!-- ปุ่มดำเนินการต่อ -->
      <div class="flex justify-center items-center gap-2 ml-5">
        <UButton size="xl"
          class="py-2.5 px-20 me-2 mb-2"
          variant="solid"
          :trailing="true"
          to="/kiosks">
          ตกลง
        </UButton>
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

const resetCountdown = () => {
  clearInterval(countdownInterval); // หยุดการนับถอยหลังก่อน
  countdown.value = "00:10:00"; // รีเซ็ตค่าเริ่มต้น
  startCountdown(); // เริ่มการนับถอยหลังใหม่
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});
</script>
