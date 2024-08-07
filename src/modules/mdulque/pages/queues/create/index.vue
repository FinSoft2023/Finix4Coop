<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <DSmartSubStepper />

    <UAlert
      icon="i-heroicons-book-open"
      description="ระบุรข้อมูลของสมาชิกผู้เข้ารับบริการ"
      :title="pageDef.label"
    />

    <BPartPageBody>
      <UForm @submit="handleSubmit"
        :state="data"
        :pending="pending"
        class="space-y-4">
        <DItemGrid col="x3">
          <UCard class="col-span-2">
            <UFormGroup label="เลขสมาชิก">
              <UInput required
                v-model="memcode" />
            </UFormGroup>
          </UCard>
          <UCard>
            <img alt="Queue Image"
              :src="queue.imageUrl" />
          </UCard>
        </DItemGrid>

        <BPartButtonsBand>
          <UButton @click="$router.back"
            icon="i-heroicons-chevron-left-16-solid"
            variant="outline">Back</UButton>
          <template #next>
            <UButton type="submit">Save</UButton>
          </template>
        </BPartButtonsBand>
      </UForm>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';
const qsto = useQueStore();
const { queue } = storeToRefs(qsto);

const memcode = ref('');

const pageDef = useActiveModulePage('create.root');
useSmartStepper(pageDef);
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet } = useHostApi(pageDef);
const { apiPost } = useLocalStage(pageDef);
const { data: dataMember, pending } = apiGet({ 'fltr-val': memcode.value });
const { postResult, error, executePost } = apiPost();
const data = ref<any>({});

// If this is the first step, you can initialize the data value like this:
// data.value = {};

const handleSubmit = async () => {
  const mcode = memcode.value;
  const members = dataMember.value;
  const member = members.find((m: any) => m.memcode === mcode);
  console.log('Member:', member);
  
  if (!member) {
    alert('ไม่พบข้อมูลสมาชิก');
    return;
  }
  await executePost(member);
  const redirectPath = getNextStep(pageDef);
  navigateTo(`/queues/create/${redirectPath}`);
};
</script>
