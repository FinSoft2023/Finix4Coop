<template>
  <BFullPage>
    <BPartPageBody>
      <DocPrintContainer title="Printing Sample Page">
        <DocPaper>
          <div class="flex justify-start items-end h-full">
            <img :src="qrCode"
              alt="QR Code"
              class="max-w-full shadow-md rounded-lg"
              style="width: 150px; height: 150px" />
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
