<template>
  <BFullPage>
    <BPartPageTitle>{{ pageDef.label }}</BPartPageTitle>

    <BPartPageBody>
      <UCard>
        <DTable :columns="columns"
        :rows="people"></DTable>
      </UCard>
    </BPartPageBody>

    <template #side>
      <DSubLinks />
    </template>
  </BFullPage>
</template>

<script setup lang="ts">
const pageDef = useActiveModulePage('each.history');

const { entries } = getEntrySchema(pageDef);
const { apiGet } = useHostApi(pageDef);
const { data, error, pending } = apiGet();

const people = [
  {
    mon: "มกราคม",
    id: 1,
    id_contract: 2222,
    name_contract: "หุ้น",
    installment: "1,000",
    price: "1,000",
  },
  {
    mon: "มกราคม",
    id: 1,
    id_contract: 1552555987,
    name_contract: "เงินกู้สามัญทั่วไป",
    installment: "1,500",
    price: "1,500",
  },
  {
    mon: "มกราคม",
    id: 1,
    id_contract: 1552555987,
    name_contract: "เงินกู้เพื่อเหตุฉุกเฉิน",
    installment: "1,000",
    price: "1,000",
  },
  {
    mon: "กุมภาพันธ์",
    id: 2,
    id_contract: 2222,
    name_contract: "หุ้น",
    installment: "1,000",
    price: "1,000",
  },
  {
    mon: "กุมภาพันธ์",
    id: 2,
    id_contract: 1552555987,
    name_contract: "เงินกู้สามัญทั่วไป",
    installment: "1,500",
    price: "1,500",
  },
  {
    mon: "กุมภาพันธ์",
    id: 2,
    id_contract: 1552555987,
    name_contract: "เงินกู้เพื่อเหตุฉุกเฉิน",
    installment: "1,000",
    price: "1,000",
  },
  {
    mon: "มีนาคม",
    id: 3,
    id_contract: 2222,
    name_contract: "หุ้น",
    installment: "1,000",
    price: "-",
  },
  {
    mon: "มีนาคม",
    id: 3,
    id_contract: 1552555987,
    name_contract: "เงินกู้สามัญทั่วไป",
    installment: "1,500",
    price: "1,500",
  },
  {
    mon: "มีนาคม",
    id: 3,
    id_contract: 1552555987,
    name_contract: "เงินกู้เพื่อเหตุฉุกเฉิน",
    installment: "1,000",
    price: "1,000",
  },
];


useBreadcrumb(pageDef.label);
</script>
