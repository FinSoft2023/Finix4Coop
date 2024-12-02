<template>
  <div class="custom-font w-[210mm] h-[297mm] p-[5mm] print:p-0 mx-auto print:m-0 bg-white">
    <slot></slot>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "TH Sarabun PSK";
  src: url("path/to/THSarabunPSK.woff2") format("woff2"),
    url("path/to/THSarabunPSK.woff") format("woff"),
    url("path/to/THSarabunPSK.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: "TH Sarabun PSK", Arial, sans-serif;
  /* เปลี่ยนเป็นฟอนต์ TH Sarabun PSK */
  font-size: 16px;
  /* ขนาดฟอนต์พื้นฐาน */
  line-height: 1.5;
  /* ระยะห่างบรรทัด */
}

/* ฟอนต์พิเศษในบางส่วน */
.font-bold {
  font-weight: bold;
}

.text-center {
  text-align: center;
}
</style>
