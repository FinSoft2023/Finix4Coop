<!-- <template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data" :entries :pending />
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template> -->
<template>
  <BFullPage>
    <BPartPageBody>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="flex justify-center">
            <h1 class="mb-2 mt-1 text-center text-3xl tracking-tight  lg:text-4xl text-gray-900 dark:text-white">
              กำลังพิมพ์บัตรคิวของคุณ
            </h1>

          </div>

          <UCard class="mt-3 max-w-md mx-auto">
            <div class="text-center mt-8">
              <h1 class="mb-4 text-center text-xl tracking-tight lg:text-2xl text-gray-900 dark:text-white">
                หมายเลขคิว
              </h1>
              <h1
                class="mb-8 text-5xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
                A-002
              </h1>
              <h1 class="mb-4 text-center text-xl tracking-tight lg:text-2xl text-gray-900 dark:text-white">
                มีคิวก่อนหน้าอยู่ 4 คิว
              </h1>
              <p class="mt-12 text-lg font-light text-gray-500 dark:text-gray-400">
              </p>
            </div>
          </UCard>
          <div class="flex justify-center">

          </div>
          <div class="mt-10  max-w-md mx-auto rounded-lg">
            <client-only>
              <Vue3Lottie animationLink="https://lottie.host/e0cedb3e-4cde-44b2-93fc-60b878a6155d/ej5ii6iTxG.json"
                :height="200"
                :width="200" />
            </client-only>
          </div>
        </div>
      </section>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
