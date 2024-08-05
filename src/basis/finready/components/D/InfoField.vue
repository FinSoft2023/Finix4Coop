<template>
  <dl>
    <dt class="text-md text-gray-400">{{ label }}</dt>
    <dd class="text-md font-bold">{{ display }}</dd>
  </dl>
</template>

<script setup lang="ts">
const model = defineModel<any>();
const props = defineProps<{ label: string, asIs?: boolean, dateFormat?: string, digit?: number }>();

const display = computed(() => {
  const data = model.value;
  if (props.asIs || !data) {
    return data;
  }
  if (typeof data == 'number') {
    if (props.digit)
      return data.toLocaleString(undefined, { minimumFractionDigits: props.digit, maximumFractionDigits: props.digit });
    else
      return data.toLocaleString();
  }
  if (props.dateFormat) {
    return formatDate(data, props.dateFormat);
  }
  return data;
});

// Function to get the formatted string from the Date object in DD/MM/YYYY format
const formatDate = (date: string, format: string) => {
  // date string is in the format YYYYMMDD, converting it to 'DD/MM/YYYY'
  if (format === 'full') {
    const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1');
    return formattedDate;
  } else if (format === 'y-m') {
    const formattedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2');
    return formattedDate;
  }

  return date;
}
</script>