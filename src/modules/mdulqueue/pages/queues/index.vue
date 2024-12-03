<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <!-- <BPartButtonsBand>
        <UButton to="/queues/create"
          icon="i-heroicons-plus-circle">New</UButton>
        <template #next>
          <DSmartTabs />
        </template>
</BPartButtonsBand>

<BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

<FTableOfTxs @selection-changed="selectItem" :data :pending /> -->
      <DItemGrid col="x4">
        <UPageCard icon="i-heroicons-user-plus-16-solid"
          title="เรียกคิว"
          description="เรียกคิวลูกค้าเพื่อให้บริการ"
          to="/queues/create/confirm" />
        <UPageCard icon="i-heroicons-forward-16-solid"
          title="ข้ามคิว"
          description="ข้ามคิวลูกค้าคนถัดไป" 
          to="/queues" />

        <UCard class="col-span-2">
          <h2 class="mt-4 mb-4 text-4xl text-center font-bold dark:text-white">A001</h2>
          <h2 class="mt-4 mb-4 text-2xl text-center dark:text-white">ยืนยันตัวตน</h2>
        </UCard>
      </DItemGrid>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.root');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

function selectItem(item: any) {
  navigateTo(`/queues/${item.id}`);
}
</script>
