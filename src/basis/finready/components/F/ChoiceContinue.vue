<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1
        class="mb-4 text-center text-3xl tracking-tight font-extrabold lg:text-3xl text-gray-900 dark:text-white"
      >
        คุณมีไลน์สหกรณ์แล้วหรือยัง ?
      </h1>
      <h1
        class="mb-4 text-center text-2xl tracking-tight font-light lg:text-2xl text-gray-900 dark:text-white"
      >
        มีแล้วสามารถกดข้ามขั้นตอนนี้ได้ด้วยการกด" ถัดไป " เพื่อสแกนรับคิวได้เลย
      </h1>
      
      <!-- ภาพไอคอนแสดงขั้นตอนการสมัคร -->
      <!-- <div class="grid grid-cols-5 gap-4 items-center">
        <div class="text-center">
          <img class="w-[35mm] h-[35mm]"
            src="https://static.vecteezy.com/system/resources/previews/023/986/611/original/line-app-logo-line-app-logo-transparent-line-app-icon-transparent-free-free-png.png"
            alt="Line Logo" />
        </div>
        <div class="text-center">
          <UIcon name="i-mdi-chevron-right"
            class="w-[15mm] h-[15mm]" />
        </div>
        <div class="text-center">
          <UIcon name="i-mdi-scan-helper"
            class="w-[25mm] h-[25mm]" />
        </div>
        <div class="text-center">
          <UIcon name="i-mdi-chevron-right"
            class="w-[15mm] h-[15mm]" />
        </div>
        <div class="text-center">
          <img class="w-[35mm] h-[35mm]"
            src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
            alt="QR Code" />
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 ">
        <div class="text-center items-top">
          <P>เปิด Line OA ของสหกรณ์</P>
        </div>
        <div class="text-center items-">
        </div>
        <div class="text-center items-">
          <P>เข้า เมนู Scan</P>
        </div>
        <div class="text-center items-">
        </div>
        <div class="text-center items-">
          กด "ดำเนินการต่อ" เเล้วสแกน QR Code
        </div>
      </div> -->
      <!-- <p class="mb-4 text-center text-lg font-bold text-gray-700 dark:text-gray-400">
        หากไม่ยังมี Line OA ของสหกรณ์ Add Line โดยสแกน Qr ด้านล่าง
      </p> -->
      <div class="flex justify-center text-center items-center gap-8">
        <!-- <img
        class="w-[200px] h-aoto"
        src="https://media.discordapp.net/attachments/789054794223976468/1304334143819354162/photo_--_--.jpg?ex=672f0355&is=672db1d5&hm=119fab1b23c1a7994fe66ce4af0a20aaa9e372bea4ff847575f6611c782f653b&=&format=webp"
        alt="QR Code"
        />
        <img
        class="w-[200px] h-aoto"
        src="https://media.discordapp.net/attachments/789054794223976468/1304334143479349329/photo_--_--.jpg?ex=672f0355&is=672db1d5&hm=4dde151481c521289fe08fc1e883e1e226338dbab9ef14bed6f359addd2d82ba&=&format=webp"
        alt="QR Code"
        />
        />-->
      </div>
      <!-- <p
        class="mb-0 font-bold text-center text-lg  text-gray-500 dark:text-gray-400"
      >
        <strong class="font-bold">สแกนเลย</strong>
      </p> -->
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
        วิธีการเพิ่มเพื่อนไลน์สหกรณ์
      </p>
      <div class="ml-8 flex justify-center text-center items-center gap-8">
        <img
          class="w-[600px] h-auto"
          src="https://media.discordapp.net/attachments/789054794223976468/1304364458935586826/App.png.png?ex=672f1f90&is=672dce10&hm=73e625064ec5ff0d3b419d841404596ad767d497a2af01e2485e33adda2a2fe0&=&format=webp&quality=lossless&width=1440&height=599"
          alt="QR Code"
        />
        <UIcon name="i-ic-twotone-arrow-forward"></UIcon>
      </div>

      <!-- ปุ่มดำเนินการต่อ -->
      <div class="flex justify-center space-x-4 mt-4">
        <!-- <UButton class="mr-5" size="xl" variant="solid" :trailing="true" to="">
          ไม่มีโทรศัพท์
        </UButton> -->
      </div>
    </div>
    <BPartButtonsBand>
      <UButton
        class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/index/addline"
      >
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton
          size="xl"
          variant="solid"
          icon="i-heroicons-chevron-right-16-solid"
          :trailing="true"
          to="/kiosks/create/selsel"
        >
          ถัดไป
        </UButton>
      </template>
    </BPartButtonsBand>
  </section>
</template>
