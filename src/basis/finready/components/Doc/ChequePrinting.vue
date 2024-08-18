<template>
  <div class="paperDoc w-[250mm] h-[91mm] p-[0mm] print:p-0 mx-auto print:m-0  mt-4 bg-white">
    <slot></slot>
    <div class="text-right bottom-right text-boton">
       <UIcon name="i-mdi-qrcode-scan" style="width: 50px; height: 50px"/>
      </div>
  </div>
</template>
<style scoped>
.paperDoc {
  position: relative;
}

.bottom-right {
  position: absolute;
  right: 5mm;
  bottom: 5mm;
  text-align: right;
}
</style>