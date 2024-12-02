<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
       <DItemGrid
        col="x3">
        <UCard class="col-span-2">
          <DEntitySection v-model="data"
            :entries
            :pending />
          <!-- <FMemberInfo :account="data?.account"></FMemberInfo> -->
        </UCard>
        <div>
          <UCard class="mb-4">
            <img :src="img"
              alt="img"
              class="max-w-full shadow-md rounded-lg w-500 h-auto" />
          </UCard>
          <UCard>
            <img :src="signature"
              alt="imgsignature"
              class="max-w-full shadow-md rounded-lg w-500 h-auto" />
          </UCard>
        </div>
        </DItemGrid>
        <p class="text-2xl font-bold ">เอกสาร</p>
        <DGallery :photos="images" />

    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.root');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

useBreadcrumb(pageDef.label);


const images = ref([
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },
  { src: 'https://rescue1global.org/wp-content/uploads/2015/07/R1.jpg' },

]);
const img = ref('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png');
const signature = ref('https://st4.depositphotos.com/5624298/20992/i/450/depositphotos_209925582-stock-illustration-pencil-drawing-illustration-art-make.jpg');

</script>
