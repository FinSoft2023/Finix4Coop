<template>
  <BFullPage>
    <!-- <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle> -->

    <BPartPageBody>
      <div class="flex justify-center">
        <Icon class="w-20 h-20 text-green-400"
          name="line-md:confirm-circle"></Icon>
      </div>
      <h2 class="mt-4 mb-4 text-2xl text-center font-bold dark:text-white">
        ผูกบัญชีเรียบร้อยแล้ว
      </h2>
      <h3 class="text-center text-gray-500 dark:text-gray-300 ">
        คุณสามารถดำเนินการทำธุกรรมออนไลน์ได้แล้ว
      </h3>
      <div class="flex justify-center">
        <UButton to="/">Home</UButton>
      </div>    
    </BPartPageBody>
   
  </BFullPage>
</template>

<script setup
  lang="ts">
  const pageDef = useActiveModulePage('each.root');

  const { entries } = getEntrySchema(pageDef);
  const { apiGet } = useHostApi(pageDef);
  const { data, error, pending } = apiGet();

  useBreadcrumb(pageDef.label);
</script>
