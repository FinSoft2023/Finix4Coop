<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <BPartButtonsBand>
        <template #next>
          <DSmartTabs />
        </template>
      </BPartButtonsBand>
      <div class="flex justify-between">
     </div>
      <FTableOfTxs @selection-changed="addInformation" :data :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('list.linkeCheck');
useBreadcrumb('List');

const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

// function addInformation(item: any) {
//   navigateTo(`/registermemberCounter/${item.id}`);
// }
function addInformation(item: any) {
  navigateTo(`/registermemberCounter/create/addInformation`);
}

</script>
