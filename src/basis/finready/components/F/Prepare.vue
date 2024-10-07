<template>
  <!-- <UPageCard v-for="(module, index) in modules"
      :key="index"
      :class="['cursor-pointer', { 'bg-primary-200 text-white': isSelected(index) }]"
      v-bind="module"
      @click="toggleCard(index)">
    </UPageCard> -->
  <UCard v-for="(module, index) in modules">
    <UIcon :name="module.icon"
      class="w-10 h-10 text-primary" />
    <h1 class="text-lg font-bold ">{{ module.title }}</h1>
    <div class="flex space-x-2 items-center">
      <UIcon :name="module.check"
        class="w-5 h-5 text-primary"></UIcon>
      <p>เตรียมข้อมูลเเล้ว</p>
    </div>
    <UButton type="submit" :to="module.to" color="primary"
      block>รับคิว</UButton>
  </UCard>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';


const modules = [
  {
    title: 'ฝากเงิน',
    to: '',
    icon: 'i-heroicons-wallet',
    check: 'i-mdi-check-circle'
  },
  {
    title: 'ถอนเงิน',
    to: '',
    icon: 'i-heroicons-wallet',
    check: 'i-mdi-check-circle'

  },
  {
    title: 'กู้สามัญ',
    to: '',
    icon: 'i-mdi-cash-fast',
    check: 'i-mdi-check-circle'

  },
  {
    title: 'กู้ฉุกเฉิน',
    to: '',
    icon: 'i-mdi-cash-fast',
    check: 'i-mdi-check-circle'

  },
  {
    title: 'สมัครฌาปนกิจ',
    to: '',
    icon: 'i-mdi-account-child',
    check: 'i-mdi-check-circle'

  },
  {
    title: 'สมัครสมาชิก',
    to: '',
    icon: 'i-mdi-user-add',
    check: 'i-mdi-check-circle'

  },
  {
    title: 'สอบถามข้อมูล และอื่นๆ',
    to: '',
    icon: 'i-mdi-document',
    check: 'i-mdi-check-circle'

  },
];
</script>
