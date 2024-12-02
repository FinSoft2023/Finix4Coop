<template>
  <BFullPage>
    <BPartPageBody>
      <client-only>
        <Vue3Lottie animationLink="https://lottie.host/b1e8f9cf-b3f3-43fb-b4ba-836ad71b78e6/c2O5ikoF2P.json"
          :height="100"
          :width="100" />
      </client-only>
      <h1 class="mb-2 mt-1 text-center text-3xl tracking-tight  lg:text-4xl text-gray-900 dark:text-white">
        ขั้นตอนบนตู้ kiosk จบแล้ว
      </h1>
      <h1 class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        กรุณาดำเนินการต่อบนโทรศัพท์ของท่าน
      </h1>
      <div class="flex justify-center">
        <client-only>
          <Vue3Lottie animationLink="https://lottie.host/08aa1160-aecb-4846-9218-d9b002ffcbd1/f6pJYYhee3.json"
            :height="300"
            :width="300" />
        </client-only>

      </div>

    </BPartPageBody>
    <BPartButtonsBand>

    </BPartButtonsBand>
  </BFullPage>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';


import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/kiosks');
  }, 5000);
});
</script>
