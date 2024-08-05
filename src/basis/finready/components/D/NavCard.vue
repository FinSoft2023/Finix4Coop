<template>
  <UCard>
    <div class="flex">
      <div class="flex-grow">
        <slot></slot>
      </div>
      <div class="grow-0 -mr-2 ml-auto flex items-center">
        <UIcon class="text-lg" name="i-heroicons-chevron-right" />
      </div>
    </div>
  </UCard>
</template>