<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>
    <FNotificationChanges></FNotificationChanges>
    <BPartPageBody>
      <UCard>
        <DEntitySection v-model="data" :entries :pending />
      </UCard>
      <!-- <UForm @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4">
        <DItemGrid col="x3">
          <UCard class="col-span-2">
            <DEntitySection v-model="data"
              :entries
              :pending />
          </UCard>
          <UCard> <p>รูปภาพประจำตัว</p>
            <img class="mt-3" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Daily Dhamma Image" style="width: 100%; height: auto;" />

            <p class="mt-3">ลายเซ็น</p>
            <UCard class="mt-3"> <img src="https://kalyanamitra.org/th/images/dailydhamma/2560/07/600719_07.jpg" alt="Daily Dhamma Image" style="width: 100%; height: auto;" />
            </UCard>
           
          </UCard>
        </DItemGrid>
      </UForm> -->
    </BPartPageBody>

    <template #side>
      <!-- <FPaymentState></FPaymentState> -->
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


</script>
