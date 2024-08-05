<template>
  <EntitySection>
    <template #loading>
      <slot name="loading">
        <DFieldSkeleton icon />
      </slot>
    </template>
  </EntitySection>
</template>