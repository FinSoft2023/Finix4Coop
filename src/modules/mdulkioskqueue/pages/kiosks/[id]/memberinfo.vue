<template>
  <BFullPage>
    <BPartPageBody>
      <FMemberInfoCard :memberData="memberData" />
    </BPartPageBody>
    <BPartButtonsBand>
      <UButton class="mr-5"
        size="xl"
        variant="outline"
        icon="i-heroicons-chevron-left-16-solid"
        to="/kiosks/create/choice">
        ย้อนกลับ
      </UButton>
      <template #next>
        <UButton size="xl"
          variant="solid"
          icon="i-heroicons-chevron-right-16-solid"
          :trailing="true"
          to="/kiosks/create/scankiosk">
          ถัดไป
        </UButton>
      </template>
    </BPartButtonsBand>
  </BFullPage>
</template>

<script setup lang="ts">
const route = useRoute();
const memberData = reactive({
  id: route.query.id || "2001",
  name: "นายตัวxxx สมxx",
  status: "สมาชิก",
  registrationDate: "10 มกราคม 2564",
});
</script>
