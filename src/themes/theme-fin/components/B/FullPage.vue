<template>
  <UPage>

    <template #right
      v-if="!!$slots.side">
      <slot name="side"></slot>
    </template>

    <UMain class="space-y-4">
      <slot></slot>
    </UMain>
  </UPage>
</template>