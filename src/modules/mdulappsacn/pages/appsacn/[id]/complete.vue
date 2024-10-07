<template>
  <BFullPage>
    <BPartPageBody>
      <div class="text-center">
        <UIcon
          name="i-mdi-success-circle"
          class="w-[80px] h-[80px] text-green-600"
        />
      </div>
      <div class="text-center mt-5">
        <h1 class="mt-8 mb-8">ภาพถ่ายถูกส่งไปยัง คอมพิวเตอร์แล้ว</h1>
        <UButton to="/">กลับหน้าหลัก</UButton>
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.complete');

const { entries } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const route = useRoute();
async function handleConfirmation() {
  await executePost({ deletedAt: new Date().toISOString() });
  navigateTo(`/appsacn/${route.params.id}`);
}

useBreadcrumb(pageDef.label);
</script>
