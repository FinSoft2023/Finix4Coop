<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
      <!-- ข้อความหัวเรื่อง -->
      <h1 class="mb-8 text-center text-4xl tracking-tight font-extrabold lg:text-5xl text-gray-900 dark:text-white">
        กรุณาเปิด Line OA เพื่อรับคิว
      </h1>


      <!-- ภาพไอคอนแสดงขั้นตอนการสมัคร -->
      <div class="grid grid-cols-5 gap-4 items-center">
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
      </div>
      <p class="mb-4 text-center text-lg font-bold text-gray-700 dark:text-gray-400">
        หากไม่ยังมี Line OA ของสหกรณ์ Add Line โดยสแกน Qr ด้านล่าง
      </p>
      <div class="flex justify-center text-center items-center">
        <img class="w-[50mm] h-[50mm]"
          src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
          alt="QR Code" />
      </div>
      <!-- ปุ่มดำเนินการต่อ -->
      <div class="flex justify-center space-x-4 mt-8">
        <UButton class="mr-5"
          size="xl"
          variant="solid"
          :trailing="true"
          to="">
          ไม่มีมือถือ
        </UButton>
        <UButton size="xl"
          variant="solid"
          :trailing="true"
          to="/kiosks/create/scankiosk">
          ดำเนินการต่อ
        </UButton>
      </div>
    </div>
  </section>
</template>
