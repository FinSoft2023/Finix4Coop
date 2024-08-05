<template>
  <UHeaderPopoverLinks :links="links" />
</template>

<script setup lang="ts">
const route = useRoute();
const links = getSubLinks(route);
</script>