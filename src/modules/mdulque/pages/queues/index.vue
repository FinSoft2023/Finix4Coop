<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <BPartPageBody>
      <BPartButtonsBand> </BPartButtonsBand>

      

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div></div>
        <div class="col-span-2 md:col-span-3">
          <UCard>
            <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">คิวที่</h2>
            <h2 class="mt-4 mb-4 text-4xl text-center font-bold dark:text-white">A00{{ idx + 1 }}</h2>
            <h2 class="mt-4 mb-4 text-4xl text-center font-bold dark:text-white">{{ user?.name }} ไม่พบข้อมูล</h2>
            <h2 class="mt-4 mb-4 text-2xl text-center dark:text-white">{{ item?.type }}ถอน</h2>
            <div class="grid grid-cols-2 gap-1 mx-auto max-w-lg">
              <UButton to="/queues/create" icon="i-heroicons-plus-circle" variant="solid" block >เรียกคิว</UButton>
              <UButton to="/" icon="i-heroicons-forward" variant="solid" block>คิวถัดไป</UButton>
            </div>
          </UCard>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <!-- <DTable @selection-changed="selectItem" :data :pending /> -->
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
