<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">

        <div>
          <h3 class="text-2xl font-bold dark:text-white">
            กรุณาเตรียมโทรศัพท์มือถือ เพื่อ สแกน QR Code
          </h3>

          <div class="flex justify-between mt-10">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-44">
              <path stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <div class="mt-14">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                width="70"
                height="70">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
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

        <p class="text-lg text-gray-500 dark:text-gray-400 mt-8">
          กรุณาเปิดกล้องโทรศัทพ์ของคุณในการสแกน QR Code เพื่อให้โทรศัทพ์ของคุณ
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          สามารถ สแกนเอกสาร หรือ ถ่ายรูปถ่าย และทำธุรกรรมต่อได้
        </p>
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