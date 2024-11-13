<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white">
        สแกนรับคิวด้วยไลน์สหกรณ์
      </h1>
      <h1 class="mt-8 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white">
        เข้าไลน์ SAVING SSFH COOP สแกน QR Code
      </h1>
      <div class="mt-8 flex justify-center text-center items-center gap-8">

        <!-- ภาพ QR Code ที่จะแสดงเมื่อปุ่มถูกคลิก -->
        <UCard>
          <div class="flex justify-center text-center items-center gap-8">
            <img class="w-[200px] h-auto"
              src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
              alt="QR Code" />
          </div>
        </UCard>
      </div>
      <div class="flex justify-center items-center gap-2">
        <UIcon name="i-mdi-refresh"
          class="w-8 h-8"></UIcon>
        <h1 class="mt-8 mb-8 text-center text-3xl tracking-tight lg:text-3xl text-gray-900 dark:text-white">
          00:10:56
        </h1>
      </div>
      <div class="flex justify-center items-center gap-2 ml-5">
        <UButton size="xl"
          class="py-2.5 px-20 me-2 mb-2"
          variant="solid"
          :trailing="true"
          to="/kiosks">
          ตกลง
        </UButton>
      </div>

      <!-- <div class="flex justify-center mt-4 gap-8">
        <UButton class="py-2.5 px-20 me-2 mb-2"
          to="/kiosks/index/uiscan"
          icon="i-heroicons-chevron-left-16-solid"
          size="sm"
          color="gray"
          variant="solid"
          label="Button"
          >กลับ</UButton>
        <UButton class="py-2.5 px-20 me-2 mb-2"
          icon="i-heroicons-chevron-right-16-solid"
          size="sm"
          color="primary"
          variant="solid"
          label="Button"
          :trailing="false"
          :ui="{ rounded: 'rounded-full' }">ตกลง</UButton>
      </div> -->


      <!-- ปุ่มดำเนินการต่อ -->
    </div>
    <BPartButtonsBand>
      <!-- <UButton class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/index/uiscan">
        ย้อนกลับ
      </UButton> -->
      <!-- <template #next>
        <UButton size="xl"
          class="py-2.5 px-20 me-2 mb-2"
          variant="solid"
          :trailing="true"
          to="/kiosks/index/selsel">
          ตกลง
        </UButton>
      </template> -->
    </BPartButtonsBand>

  </section>
</template>
