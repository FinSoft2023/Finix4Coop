<template>
  <BFullPage>

    <BPartPageBody>
      <a href="/appsacn/[id]/takephoto">
        <UCard>
          <div class="flex justify-between">
            <h1>โปรดถ่ายรูปเอกสาร</h1>
            <UIcon name="i-mdi-camera" class="w-6 h-6"></UIcon>
          </div>
        </UCard>
      </a>
      <div class="text-center">
        <UIcon
          name="i-mdi-success-circle"
          class="w-[80px] h-[80px] text-green-600"
        />
      </div>
      <div class="text-center mt-5">
        เลขสมาชิก 0001
        <h1 class="mt-5">ข้อมูลถูกส่งไปยัง คอมพิวเตอร์แล้ว</h1>
      </div>
    </BPartPageBody>   
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
