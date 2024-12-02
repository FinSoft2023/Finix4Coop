<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
        กรุณาเปิดไลน์เพื่อ ADD Line สหกรณ์
      </h1>
      <h1 class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        กรุณากดปุ่ม แสดง QR Code เพื่อเพิ่มเพื่อนไลน์ก่อนสแกนรับคิว
      </h1>
      <div class="flex justify-center"
        @click="showinfo">
        <h1
          class="mb-4 mr-2 text-center  text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white underline">
          วิธีเพิ่มเพื่อน
        </h1>
        <UIcon name="i-mdi-alert-circle"
          class="text-gray-500 w-6 h-6 mt-2" />
      </div>

      <div class="mt-8 flex flex-col justify-center text-center items-center gap-8">
        <img class="w-[300px] h-auto"
          src="../../../../apps/facingweb/public/images/photo1.jpg"
          alt="photo1" />
        <div class="mt-8 justify-center text-center items-center gap-8">
          <!-- ปุ่มที่เมื่อคลิกแล้วจะทำให้รูปแสดงและปุ่มหายไป -->
          <UButton v-if="!isQRCodeVisible"
            class="ml-2"
            size="xl"
            @click="showQRCode">
            แสดง QR Code
          </UButton>
        </div>
      </div>

    </div>
    <!-- ปุ่มดำเนินการต่อ -->
    <BPartButtonsBand>
      <UButton class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/index/addline">
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton size="xl"
          variant="solid"
          icon="i-heroicons-chevron-right-16-solid"
          :trailing="true"
          to="/kiosks/index/selsel">
          ถัดไป
        </UButton>
      </template>
    </BPartButtonsBand>
     <div v-if="isVisible" class="mt-8">
      <h1 class="text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        วิธีเพิ่มเพื่อน Line สหกรณ์
      </h1>
      <div class="grid grid-cols-1">
        <div class="flex justify-center text-center items-center gap-8">
          <img class="w-[700px] h-auto"
            src="../../../../apps/facingweb/public/images/App.jpg"
            alt="photo1" />
        </div>
      </div>
    </div>
    <!-- ภาพ QR Code ที่จะแสดงเมื่อปุ่มถูกคลิก -->
    <div v-if="isQRCodeVisible"
      class="flex flex-col justify-center text-center items-center gap-4">
      <h1 class="text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        ADD LINE สหกรณ์
      </h1>
      <UCard>
        <img class="w-[200px] h-auto"
          src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
          alt="QR Code" />
      </UCard>
      <div class="flex justify-center text-center items-center gap-8">
        <p class="mb-0 text-center text-lg font-light text-gray-500 dark:text-gray-400">
          QR Code สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
        </p>
      </div>
    </div>   
  </section>

</template>
<script setup lang="ts">
import { ref } from 'vue';

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

const isModalOpen = ref(false);
const isCopied = ref(false);
function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
  if (isModalOpen.value) {
    isCopied.value = false; // Reset the copied state when opening the modal
  }
}
</script>
