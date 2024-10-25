<template>
  <BFullPage>
    <BPartPageBody>
      <div class="flex justify-center">
        <UAuthForm
          title="เข้าใช้งานระบบ"
          description=""
          align="bottom"
          to="/registermemberCounter/linkeCheck"
          icon="i-heroicons-user-circle"
          :fields="[
            {
              type: 'email',
              label: 'ชื่อผู้ใช้',
              name: 'email',
              placeholder: 'qup',
              // color: 'gray',
            },
            {
              type: 'password',
              label: 'รหัสผ่าน',
              name: 'password',
              placeholder: '12345',
              // color: 'gray',
            },
          ]"
        />       
      </div>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.print');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);
</script>
