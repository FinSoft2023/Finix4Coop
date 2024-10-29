<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UForm
        @submit="handleSubmit"
        :state="data"
        :schema="schema"
        :pending="pending"
        class="space-y-4"
      >
        <UButton type="submit">บันทึก</UButton>
        <!-- <UCard>
          <URadioGroup
            v-model="selected"
            legend="ผลอนุมัติที่ประชุม"
            :options="options"
          />
          <URadioGroup
            v-if="selected === 'con'"
            v-model="selected2"
            legend="ส่งเอกสารหักเงิน"
            :options="options2"
          />        
        </UCard> -->
        <UCard>
          <div class="flex justify-between">
            <div>
              <UButton @click="showImage = true"
                >สแกนเอกสารหักเงินเดือน</UButton
              >
            </div>
          </div>
          <div class="flex justify-center" v-if="showImage">
            <img
              class="h-[500px]"
              src="http://womenfund.in.th/images/2560/06.2560/2708/2708.jpg"
              alt="สแกนเอกสารหักเงินเดือน"
            />
          </div>
        </UCard>
      </UForm>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref<string | null>(null);
const selected2 = ref<string | null>(null);
const showImage = ref(false);

const pageDef = useActiveModulePage('each.addInformation');
useBreadcrumb('Edit');

const { entries, schema } = getEntrySchema(pageDef);
const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { executePost } = apiPost();

useComponentResolver(defaultEditResolvers);

const handleSubmit = async () => {
  await executePost(data.value);
  navigateTo('./');
};

const options = [
  {
    value: 'con',
    label: 'อนุมัติ',
  },
  {
    value: 'sms',
    label: 'ไม่อนุมัติ',
  },
];
const options2 = [
  {
    value: 'yes',
    label: 'ส่งเอกสารให้ รพ',
  },
  {
    value: 'No',
    label: 'ไม่ส่ง',
  },
];
</script>
