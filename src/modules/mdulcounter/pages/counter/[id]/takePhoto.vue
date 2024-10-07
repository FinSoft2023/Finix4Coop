<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard v-if="!showSecondCard" @click="toggleSecondCard"> 
        <p class="text-2xl font-bold text-center">บันทึกภาพ</p>
        <img alt=""
          :src="imageUrl">
          <DShowQrCode qr-data="https://anycounter-428810.web.app/chooseInputCheck" />
      </UCard>
      <UCard v-if="showSecondCard" @click="toggleSecondCard">
        <p class="text-2xl font-bold text-center">รูปของคุณ</p>
        <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Your Image" class="mx-auto mt-4" />
        <div class="flex justify-center mt-5">
          <UButton class="mr-3">ถ่ายใหม่</UButton>
          <UButton>ยืนยันรูปภาพ</UButton>
        </div>
      </UCard>
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

// Ref to control visibility of the second card
const showSecondCard = ref(false);

// Toggle function to switch between the two UCards
const toggleSecondCard = () => {
  showSecondCard.value = !showSecondCard.value;
};
</script>
