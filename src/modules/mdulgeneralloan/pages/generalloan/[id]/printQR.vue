<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <DocPaper>
            <div class="flex justify-start items-end h-full">
            <img src="https://qrcg-free-editor.qr-code-generator.com/1.3.2/assets/images/websiteQRCode_noFrame.png"
              alt="QR Code"
              class="max-w-full"
              style="width: 120px; height: 120px" />
          </div>
        </DocPaper>
      </DocPrintContainer>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.printQR');
import { useQRCode } from '@vueuse/integrations/useQRCode';


const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
const props = defineProps<{
  qrData: string;
}>();

const qrCode = useQRCode(props.qrData);
const refreshPage = () => {
  // window.location.reload();
};

</script>
