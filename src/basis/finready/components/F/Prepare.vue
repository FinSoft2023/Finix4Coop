<template>
  <UCard v-for="(module, index) in modules2">
    <div class="flex items-center">
      <UIcon :name="module.icon" class="w-8 h-8" />
      <h1 class="text-lg font-bold ml-4">{{ module.title }}</h1>
    </div>
    <div class="flex space-x-2 items-center mb-4 mt-2">
      <UIcon :name="module.check" class="w-5 h-5 text-red-500"></UIcon>
      <p>กรอกข้อมูล</p>
    </div>
    <UButton type="submit" :to="module.to" color="red" block
      >กรอกข้อมูล</UButton
    >
  </UCard>
  <UCard v-for="(module, index) in modules">
    <div class="flex items-center">
      <UIcon :name="module.icon" class="w-8 h-8 text-primary" />
      <h1 class="text-lg font-bold ml-4">{{ module.title }}</h1>
    </div>
    <div class="flex space-x-2 items-center mb-4 mt-2">
      <UIcon :name="module.check" class="w-5 h-5 text-green-500"></UIcon>
      <p>เตรียมข้อมูลเเล้ว</p>
    </div>
    <UButton type="submit" :to="module.to" color="primary" block
      >รับคิว</UButton
    >
  </UCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const navigateToLocalhost = () => {
  window.location.href = 'http://localhost:3003/registermember/create';
};

const modules = [
  {
    title: 'ฝากเงิน',
    to: '',
    icon: 'i-heroicons-wallet',
    check: 'i-heroicons-check-circle-20-solid',
  },
  {
    title: 'ถอนเงิน',
    to: '',
    icon: 'i-heroicons-wallet',
    check: 'i-heroicons-check-circle-20-solid',
  },
  {
    title: 'กู้สามัญ',
    to: '',
    icon: 'i-mdi-cash-fast',
    check: 'i-heroicons-check-circle-20-solid',
  },
  {
    title: 'สมัครฌาปนกิจ',
    to: '',
    icon: 'i-mdi-account-child',
    check: 'i-heroicons-check-circle-20-solid',
  },
  {
    title: 'สมัครสมาชิก',
    to: '',
    icon: 'i-mdi-user-add',
    check: 'i-heroicons-check-circle-20-solid',
  },
  {
    title: 'สอบถามข้อมูล และอื่นๆ',
    to: '',
    icon: 'i-mdi-document',
    check: 'i-heroicons-check-circle-20-solid',
  },
];
const modules2 = [
  {
    title: 'กู้ฉุกเฉิน',
    to: '',
    icon: 'i-mdi-cash-fast',
    check: 'i-mdi-close-circle',
  },
];

const config = {
  wrapper: 'relative flex flex-col self-stretch w-full',
  highlight: 'ring-2 ring-primary dark:ring-primary',
  scale: 'lg:scale-[1.1] lg:z-10',
  rounded: 'rounded-xl',
  body: {
    base: 'flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col',
    padding: 'p-6 lg:p-8 xl:p-10',
  },
  inner: 'flex items-center gap-3',
  title:
    'text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate',
  description: 'text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2',
  amount: {
    base: 'flex flex-row items-baseline gap-x-1',
    discount:
      'text-gray-500 dark:text-gray-400 line-through text-xl sm:text-2xl font-medium',
    price: 'text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold',
    cycle: 'text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate',
  },
  features: {
    vertical: 'space-y-3 text-sm',
    horizontal: 'grid lg:grid-cols-2 text-sm gap-3',
    item: {
      base: 'flex items-center gap-x-3 min-w-0',
      label: 'text-gray-600 dark:text-gray-400 truncate',
      icon: {
        base: 'w-5 h-5 flex-shrink-0 text-primary',
        name: 'i-heroicons-check-circle-20-solid',
        class: 'bg-red-500 text-white hover:bg-red-600',
      },
    },
  },
  divider: 'my-6 lg:my-8',
  left: '',
  right: '',
};
</script>
