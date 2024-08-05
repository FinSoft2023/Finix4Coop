<template>
  <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ถอนเงิน</h2>
    <p class="font-extrabold text-gray-500 lg:mb-16 text-xl dark:text-gray-400 mb-2">
    <p class="font-extrabold ">สแกน เอกสาร </p>
    </p>
    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
      ใช้กล้องโทรศัพท์ถ่ายเอกสารของคุณเพื่อบันทึกภาพไว้ในระบบ</p>
  </div>
  <div class="grid grid-cols-2 gap-4 justify-center">
    <NuxtLink>
      <div
        class="max-w-sm p-6 text-center bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <UIcon name="i-mdi-qrcode-scan"
          class="w-8 h-8 text-gray-400 dark:text-gray-400 mb-3"></UIcon>
        <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-400 dark:text-white">สแกน QR Code
        </h5>
      </div>
    </NuxtLink>
    <NuxtLink>
      <div
        class="max-w-sm p-6 text-center  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <UIcon name="i-mdi-scan-helper"
          class="w-8 h-8 text-gray-800 dark:text-gray-500 mb-3"></UIcon>
        <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-800 dark:text-white">ถ่ายเอกสาร
        </h5>
      </div>
    </NuxtLink>
  </div>
</template>