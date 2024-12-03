<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="flex justify-center mb-10">
        <img class="w-[50mm] h-[50mm] max-w-full rounded-lg"
          src="https://www.saving-sskh.com/images/logo-saving.png"
          alt="">
      </div>
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-8 text-center text-4xl tracking-tight font-extrabold lg:text-6xl text-blue-600 dark:text-primary-500">
          ยินดีต้อนรับ
        </h1>
        <p class="mb-4 text-center text-2xl tracking-tight font-bold text-gray-900 md:text-3xl dark:text-white">
          สหกรณ์ออมทรัพย์โรงพยาบาลศรีสะเกษ จำกัด
        </p>
        <p class="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">สามารถทำรายการได้โดยการกดที่ปุ่มด้านล่าง</p>

        <UButton size="xl"
          color="blue"
          to="/kiosks/scanqr"
          >
          รับคิว
          ติดต่อสหกรณ์</UButton>
          
        </div>
        <!-- to="/kiosks/preparephoto" -->
    </div>
  </section>
</template>
