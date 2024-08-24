<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        Scan QR Code
      </h2>

      <QrcodeStream @detect="handleDetect" />

    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';

const qrstore = useLinkMemberStore();
const { memcode, amount, accNo } = storeToRefs(qrstore);

function handleDetect(qrcode: any[]) {
  if (qrcode.length) {
    const jsdata = qrcode[0].rawValue;
    const data = JSON.parse(jsdata);
    memcode.value = data.memcode;
    if (data.accNo) {
      accNo.value = data.accNo;
      amount.value = data.balance;
    }
    navigateTo('./success');
  }
}
</script>