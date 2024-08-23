 <template>
  <BFullPage>
    <BPartPageTitle>ผูกบัญชี (ทดสอบ)</BPartPageTitle>

    <UAlert icon="i-heroicons-document-check"
      description="ยืนยันการผูกบัญชี online"
      title="ยืนยันผูกบัญชี" />

    <BPartPageBody>
      <UCard>
        ผูกบัญชีสมาชิกเลขที่ {{ memcode }}
      </UCard>

      <BPartButtonsBand>
        <UButton to="https://www.google.com"
          icon="i-heroicons-chevron-left-16-solid"
          variant="outline">ยกเลิก</UButton>
        <template #next>
          <UButton @click="handleSubmit">ยืนยัน</UButton>
        </template>
      </BPartButtonsBand>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.root');
useSmartStepper(pageDef);
useBreadcrumb('Link Account');

// const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

// const { apiGet, apiPost } = useHostApi(pageDef);
const { apiGet } = useLocalStage(pageDef);
const { apiPost } = useHostApi(pageDef);
const { data, pending } = apiGet();
const { postResult, error, executePost } = apiPost();

const route = useRoute();
const memcode = route.query.id;
const amount = route.query.amount;

const memStore = useLinkMemberStore();

useComponentResolver(defaultViewResolvers);

const handleSubmit = async () => {
  const { memcode: mcode, amount: memamnt } = storeToRefs(memStore);
  mcode.value = memcode?.toString() || '';
  memamnt.value = parseFloat(amount?.toString() || '0');
  // await executePost(data.value);
  // const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/`);
};
</script>
