<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs"
        class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs"
          :key="tab.label"
          :selected="isCurrent(tab)">{{ tab.label }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4"
        aria-label="Tabs">
        <a v-for="tab in tabs"
          :key="tab.label"
          :href="tab.to"
          :class="[activeClass(tab), 'rounded-md px-3 py-2 text-sm font-medium']"
          :aria-current="isCurrent(tab) ? 'page' : undefined">{{ tab.label }}</a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: {
    label: string;
    to: string;
  }[]
}>();

const route = useRoute();
const isCurrent = computed(() => (tab: { to: string }) => tab.to === route.fullPath);
const activeClass = computed(() => (tab: { to: string }) =>
  isCurrent.value(tab)
    ? 'bg-indigo-100 text-indigo-700'
    : 'text-gray-500 hover:text-gray-700');
</script>