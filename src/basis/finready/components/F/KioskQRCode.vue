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

      <!-- QR Code -->
      <div class="mt-8 flex justify-center text-center items-center gap-8">
        <UCard>
          <div class="flex justify-center text-center items-center gap-8">
            <img
              class="w-[200px] h-auto"
              src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
              alt="QR Code"
            />
          </div>
        </UCard>
      </div>

      <!-- นับถอยหลัง -->
      <div class="flex justify-center items-center gap-2">
        <UIcon name="i-mdi-refresh" class="w-8 h-8"></UIcon>
        <h1
          class="mt-8 mb-8 text-center text-3xl tracking-tight lg:text-3xl text-gray-900 dark:text-white"
        >
          {{ countdown }}
        </h1>
      </div>

      <!-- ปุ่มตกลง -->
      <div class="flex justify-center items-center gap-2 ml-5">
        <UButton
          size="xl"
          class="py-2.5 px-20 me-2 mb-2"
          variant="solid"
          :trailing="true"
          to="/kiosks"
        >
          ตกลง
        </UButton>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 656, // กำหนดเวลานับถอยหลัง (วินาที)
    };
  },
  computed: {
    countdown() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(interval);
          this.redirectToHome();
        }
      }, 1000);
    },
    redirectToHome() {
      this.$router.push("/kiosks"); // แก้ไขเส้นทางหน้าแรกตามที่คุณต้องการ
    },
  },
};
</script>
