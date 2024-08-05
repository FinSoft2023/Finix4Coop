<template>
  <div class="flex justify-between items-center">
    <div class="flex items-center space-x-3 sm:space-x-4">
      <slot></slot>
    </div>
    <div>
      <slot name="next"></slot>
    </div>
  </div>
</template>