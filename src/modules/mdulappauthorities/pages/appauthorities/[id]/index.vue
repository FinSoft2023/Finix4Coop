<template>
  <BFullPage>
    <FNotificationChanges />
    <BPartPageBody>
      <div class="mt-10 flex flex-col justify-center items-center">
        <Icon name="i-mdi-smiley-happy-outline"
        class="w-10 h-10"></Icon>
      </div>
      <h1 class="text-center text-xl">ค้นหาเอกสารเจอแล้ว</h1>        
      <UCard>
        <DEntitySection v-model="data" :entries :pending />
      </UCard>
    </BPartPageBody>

    <!-- <template #side>
      <DSubLinks />
    </template> -->
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
