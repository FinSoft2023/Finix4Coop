<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UPageCard v-for="(module, index) in modules"
        :key="index"
        v-bind="module">
        <template #description>
          <span class="line-clamp-2">{{ module.description }}</span>
        </template>
      </UPageCard>

      <BPartSectionTitle>{{ pageDef.label }}</BPartSectionTitle>

      <DTable @selection-changed="selectItem"
        :data
        :pending />
    </BPartPageBody>
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('list.root');
  useBreadcrumb('List');

  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  function selectItem(item: any) {
    navigateTo(`/transferonline/${item.id}`);
  }

  const modules = [{
    title: 'ฝากเงิน',
    description: 'โอนเสร็จ รู้ยอดเงินได้ทันที',
    to: '/transferonline/create',
    icon: 'i-mdi-instant-deposit'
  },]
</script>
