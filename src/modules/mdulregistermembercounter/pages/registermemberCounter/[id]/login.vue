<template>
  <BFullPage>
    <BPartPageBody>
      <div class="flex justify-center">
        <!-- <UAuthForm
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
        />        -->
        <template>
          <UAuthForm
            title="เข้าใช้งานระบบ"
            align="bottom"
            icon="i-heroicons-user-circle"
          />
          <EInputText label="ชื่อผู้ใช้" 
          placeholder="กรอกชื่อผู้ใช้"></EInputText>
          <EInputText label="รหัส" 
          placeholder="กรอกรหัสผ่าน"></EInputText>

          <UButton to="/registermemberCounter/stateCheck" block
            >เข้าสู่ระบบ</UButton
          >
        </template>
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
