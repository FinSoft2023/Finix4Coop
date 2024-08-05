<template>
  <DStepper v-model="activeStep"
    :steps />
</template>

<script setup lang="ts">
const { steps, activeStep } = getSmartStepper();
</script>