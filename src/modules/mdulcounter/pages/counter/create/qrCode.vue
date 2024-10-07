<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard @click="navigateToCounter">
        <img alt=""
          :src="imageUrl">
          <DShowQrCode qr-data="https://anycounter-428810.web.app/chooseInputCheck" />
      </UCard>
    </BPartPageBody>
  </BFullPage>
</template>

<script setup lang="ts">
// import type { z } from 'zod';

const pageDef = useActiveModulePage('create.qrCode');
useBreadcrumb('Create');

const { entries, schema } = getEntrySchema(pageDef);
// type TSchema = z.output<typeof schema>;

const { apiGet, apiPost } = useHostApi(pageDef);
const { data, error, pending } = apiGet();
const { postResult, executePost } = apiPost();

const handleSubmit = async () => {
  await executePost(data.value);
  const redirectPath = postResult.value?.id ? `/${postResult.value.id}` : '';
  navigateTo(`/counter${redirectPath}`);
};

const router = useRouter();

const navigateToCounter = () => {
  router.push('/counter/d4ta0trdj9czj73l2qzf');
};
</script>
