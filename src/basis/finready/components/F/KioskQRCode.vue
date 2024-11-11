<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1
        class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white"
      >
        สแกน QR Code ด้านล่างเพื่อใช้รับคิวบนมือถือ
      </h1>
      <h1
        class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white"
      >
        เปิดไลน์ สแกน QR Code ด้านล่าง
      </h1>
      <div class="flex justify-center text-center items-center gap-8">
        <img
          class="w-[250px] h-auto"
          src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
          alt="QR Code"
        />
      </div>
      <p
        class="mb-0 text-center text-lg font-light text-gray-500 dark:text-gray-400"
      >
        วิธีสแกนรับคิว
      </p>
      <div class="flex justify-center text-center items-center gap-8">
        <img
          class="w-[800px] h-auto"
          src="https://media.discordapp.net/attachments/789054794223976468/1304379434005958736/App.png.png?ex=672f2d83&is=672ddc03&hm=04929407ef0ed019d8f0addb3a7f543a7a05e99556b59135d0fced6adacc5e95&=&format=webp&quality=lossless&width=1440&height=457"
          alt="QR Code"
        />
      </div>
      <!-- <div class="flex justify-center text-center items-center gap-8">
      <UIcon name="i-mdi-arrow-down-bold" 
      class="w-8 h-8 text-green-500"/>
      </div> -->

      <!-- ปุ่มดำเนินการต่อ -->
      <div class="flex justify-center space-x-4 mt-4"></div>
    </div>
    <BPartButtonsBand>
      <UButton
        class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/create/choice"
      >
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton
          class="mr-5"
          size="xl"
          icon="i-heroicons-chevron-right-16-solid"
          variant="solid"
          :trailing="true"
          to="/kiosks"
        >
          เสร็จสิ้น
        </UButton>
      </template>
    </BPartButtonsBand>
  </section>
</template>
