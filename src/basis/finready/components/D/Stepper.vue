<template>
  <section>
    <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 block md:hidden">

      <slot>
        <li v-for="(it, idx) in steps"
          :key="it.id"
          class="flex items-center space-x-2.5"
          :class="[stepClassM(it.id)]">
          <span :class="[borderClassM(it.id)]"
            class="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
            {{ it.label }}
          </span>
          <span>
            <h3 class="font-medium leading-tight">
              <slot></slot>
            </h3>
            <p v-if="it.description"
              class="text-sm">{{ it.description }}</p>
          </span>
        </li>
      </slot>

    </ol>
    <ol
      class="hidden md:flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">

      <li v-for="(it, idx) in steps"
        :key="it.id"
        :class="[{ 'text-blue-600 dark:text-blue-500': !!active(it.id) }, finalClass(it.id)]"
        class="flex items-center">
        <span
          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          <span :class="[stepClass(it.id)]"
            class="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
            {{ it.label }}
          </span>
          <span class="flex flex-col ml-2 w-28">
            <h3 class="font-medium leading-tight">
              <slot></slot>
            </h3>
            <p v-if="it.description"
              class="text-sm">{{ it.description }}</p>
          </span>
        </span>
      </li>

    </ol>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number,
  steps: {
    id: string | number;
    label: string;
    description?: string;
  }[]
}>();
const active = computed(() => ((step: string | number) => props.modelValue == step));
const stepClass = computed(() => (step: string | number) => (!!(active.value(step))
  ? 'border-blue-600 dark:border-blue-500'
  : 'border-gray-500 dark:border-gray-400'));
const finalClass = computed(() => (step: string | number) => ((step != props.steps[props.steps.length - 1].id)
  ? "md:w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
  : ''));

const stepClassM = computed(() => (step: string | number) => (!!(active.value(step))
  ? 'text-blue-600 dark:text-blue-500 border-blue-600 dark:border-blue-500'
  : 'text-gray-500 dark:text-gray-400'));
const borderClassM = computed(() => (step: string | number) => (!!(active.value(step))
  ? 'border-blue-600 dark:border-blue-500'
  : 'border-gray-500 dark:border-gray-400'));

// export interface StepBodyType {
//   steps: IStepItem[];
//   stepIndex: number;
// }
</script>