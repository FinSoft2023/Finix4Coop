<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <UButton to="/kiosks/create"
          icon="i-heroicons-plus-circle">New</UButton>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>

      <!-- <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <FTableOfTxs @selection-changed="selectItem"
        :data
        :pending /> -->
      <div class="text-center space-y-2 space-x-2">
        <H1>Scan QR</H1>
        <UButton to="/kiosks/addline"
          size="xl">ไม่มี Line</UButton>
        <UButton to="/kiosks/create/"
          size="xl">ไม่มีโทรศัพท์</UButton>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.scanqr');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/kiosks/${item.id}`);
}
</script>
