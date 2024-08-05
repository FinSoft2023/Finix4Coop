<template>
  <UPageHeader>
    <h1>
      <slot></slot>
    </h1>
    <UBreadcrumb :links="links" />
  </UPageHeader>
</template>

<script setup lang="ts">
const links = useModulePageLevels();
</script>