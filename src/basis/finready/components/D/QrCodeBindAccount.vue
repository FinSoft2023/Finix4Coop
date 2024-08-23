<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">

        <div>
          <h3 class="text-2xl font-bold dark:text-white">
            QR Code สำหรับ เสร็จสิ้นการยืนยันตัวตน
          </h3>

          <div class="flex justify-center mt-10 mb-10">
           
            
            <img :src="qrCode"
              alt="QR Code"
              class="max-w-full shadow-md rounded-lg"
              style="width: 200px; height: 200px" />
          </div>
        </div>
        <UButton icon="i-heroicons-arrow-path-solid"
          color="gray"
          variant="outline"
          @click="refreshPage">Refresh</UButton>

        <div class="flex justify-center"></div>

        <div class="flex justify-center"></div>

        <h3 class="mt-5 text-2xl font-bold dark:text-white"></h3>
        <a href="">
          <div class="flex justify-center"></div>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode';

const props = defineProps<{
  qrData: string;
}>();

const qrCode = useQRCode(props.qrData);
const refreshPage = () => {
  // window.location.reload();
};
</script>