<template>
  <section class="bg-white dark:bg-gray-900">
    <div class=" px-4 mx-auto max-w-screen-md lg:py-4 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
        ต้องใช้ไลน์เพื่อใช้งานการรับคิวบนมือถือของคุณ
      </h1>
      <h1 v-if="!isQRCodeVisible"
        class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        กรุณากดปุ่ม แสดง QRC Code เพื่อแอดไลน์
      </h1>
      <h1 v-if="isQRCodeVisible"
        class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        QR Code สหกรณ์
      </h1>
      <div 
        class="mt-8 flex justify-center text-center items-center gap-8">
        <img class="w-[260px] h-auto"
          src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
          alt="QR Code" />
      </div>    
      <!-- ปุ่มดำเนินการต่อ -->
      <div class="flex justify-center space-x-4 mt-4">
        <!-- <UButton class="mr-5" size="xl" variant="solid" :trailing="true" to="">
          ไม่มีโทรศัพท์
        </UButton> -->
      </div>
    </div>
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
          to="/kiosks/create/selsel">
          ข้าม
        </UButton>
      </template>
    </BPartButtonsBand>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// ใช้ ref เพื่อสร้างตัวแปร state
const isQRCodeVisible = ref(false);

// ฟังก์ชันที่ใช้เมื่อกดปุ่มเพื่อแสดง QR Code
const showQRCode = () => {
  isQRCodeVisible.value = true;
};
</script>
