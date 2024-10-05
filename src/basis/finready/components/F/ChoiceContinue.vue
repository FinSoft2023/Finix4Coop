<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <!-- ข้อความหัวเรื่อง -->
        <h1 class="mb-8 text-center text-4xl tracking-tight font-extrabold lg:text-5xl text-gray-900 dark:text-white">
          กรุณาเปิด Line OA เพื่อรับคิว
        </h1>
        <p class="mb-4 text-center text-lg font-bold text-gray-700 dark:text-gray-400">
          หากไม่ยังมี Line OA สแกน Qr ด้านล่าง
        </p>

        <!-- ภาพ QR Code และ Line Logo -->
        <div class="flex justify-center items-center space-x-4">
          <img class="w-[200px] h-[200px]"
            src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0"
            alt="QR Code" />
          <img class="w-[200px] h-[200px]"
            src="https://th.bing.com/th/id/OIP.ExxuDxLZqscE0NNAj8OBtAHaHa?rs=1&pid=ImgDetMain"
            alt="Arrow" />
          <img class="w-[200px] h-[200px]"
            src="https://static.vecteezy.com/system/resources/previews/023/986/611/original/line-app-logo-line-app-logo-transparent-line-app-icon-transparent-free-free-png.png"
            alt="Line Logo" />
        </div>

        <!-- ภาพไอคอนแสดงขั้นตอนการสมัคร -->
        <div class="flex justify-center mt-6">
        
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
    </div>
  </section>
</template>
