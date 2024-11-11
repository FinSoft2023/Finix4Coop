<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <FChoiceContinue />
    </BPartPageBody>
  </BFullPage>
</template>
<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);

const modules = [
  {
    title: 'โทรศัพท์',
    to: '/kiosks/create/choice',
    icon: 'i-mdi-cellphone',
  },
  {
    title: 'จากตู้ (ไม่มีโทรศัพท์)',
    to: '/kiosks/create/scankiosk',
    icon: 'i-mdi-cast-variant',
  },
];
</script>
