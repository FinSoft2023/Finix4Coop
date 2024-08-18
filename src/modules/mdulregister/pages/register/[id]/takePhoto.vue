<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <img src="https://kalyanamitra.org/th/images/dailydhamma/2560/07/600719_07.jpg" alt="Daily Dhamma Image" style="width: 100%; height: auto;" />
      </UCard>
      <div class="mt-4 grid grid-cols-2 gap-2 mx-auto ">
      <input type="file"
            ref="fileInput"
            @change="handleFileUpload"
            hidden>

      <UButton @click="$refs.fileInput.click()"
              variant="solid"
              color="gray"
              block>แก้ไขลายเซ็น</UButton>
      <UButton class="mr-5"
              variant="solid"
              color="green"
              block>บันทึก</UButton>
    </div>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.takePhoto');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
