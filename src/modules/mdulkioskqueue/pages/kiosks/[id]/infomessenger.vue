<template>
  <BFullPage>
    <BPartPageBody>
      <FMessen></FMessen>
    </BPartPageBody>
    
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
