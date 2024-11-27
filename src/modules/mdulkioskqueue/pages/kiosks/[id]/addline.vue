<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->
    <BPartPageBody>
      <FKioskQRCode></FKioskQRCode>
      <div class="flex justify-center">
        <UButton class="mr-5"
          size="xl"
          variant="outline"
          to="/kiosks/index/uiscan">
          ยังไม่ Line สหกรณ์
        </UButton>
        <UButton size="xl"
          variant="solid"
          :trailing="true"
          to="/kiosks/create/choice">
          ไม่มีโทรศัพท์ (รับจากตู้คิว)
        </UButton>
      </div>
    </BPartPageBody>
    <!-- <BPartButtonsBand>
      <UButton class="mr-5"
        size="xl"
        variant="outline"
        to="/kiosks/index/addline">
        ยังไม่ Line สหกรณ์
      </UButton>
      <template #next>

        <UButton size="xl"
          variant="solid"
          :trailing="true"
          to="/kiosks/create/choice">
          ไม่มีโทรศัพท์ (รับจากตู้คิว)
        </UButton>
      </template>
</BPartButtonsBand> -->
  </BFullPage>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);

const modules = [
  {
    title: 'มีโทรศัพท์ (รับด้วยโทรศัพท์)',
    to: '/kiosks/index/uiscan',
    icon: 'i-mdi-cellphone',
  },
  {
    title: 'ไม่มีโทรศัพท์ (รับจากตู้คิว)',
    to: '/kiosks/create/choice',
    icon: 'i-mdi-cast-variant',
  },
];
</script>
