<template>
  <UPage>
    <template #left>
      <UAside :links="navLinks">

        <template #top>
          <UDashboardSearchButton label="Search..." />
        </template>
        <template #bottom>
          <UDivider type="dashed"
            class="my-6" />
          <UPageLinks :links="pageLinks" />
        </template>

      </UAside>
    </template>

    <template #right
      v-if="!!$slots.side">
      <slot name="side"></slot>
    </template>

    <UMain class="space-y-4">
      <slot></slot>
    </UMain>
  </UPage>
</template>

<script setup lang="ts">
const themeSettings = useThemeSettings();
const { navLinks } = storeToRefs(themeSettings);

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Learn how to contribute',
  to: '/getting-started/contributing',
  target: '_blank'
}]
</script>
