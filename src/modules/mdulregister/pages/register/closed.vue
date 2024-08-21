<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>      
      <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
        <div>
          <h5 class="mr-3 font-semibold dark:text-white">เลือกการส่งข้อมูลเพื่อตรวจสอบ</h5>
        </div>
        <div class="flex justify-end gap-4">

          <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">ยืนยันส่งเรื่องให้กับ รพ</UButton>
        <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">Export เอกสาร</UButton>
        </div>
      </div>
    </div>
      <BPartButtonsBand>
        <!-- <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">ยืนยันส่งเรื่องให้กับ รพ</UButton>
        <UButton to="/register/closed"
          icon="i-heroicons-plus-circle">Export เอกสาร</UButton> -->

        <!-- <template #next>
          <DSmartTabs />
        </template> -->
      </BPartButtonsBand>
      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>
      <UCard>
        <NTableOfTxsListName @selection-changed="selectItem"
          :data
          :pending />
      </UCard>
    </BPartPageBody>
    <template #side>
      <UCard></UCard>

    </template>
  </BFullPage>

</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.closed');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/register/${item.id}`);
  }
</script>
