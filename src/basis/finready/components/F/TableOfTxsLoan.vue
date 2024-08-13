<template>
  <DTable :data="formattedData"
    :columns="columns"
    :pending="pending" />
</template>

<script setup
  lang="ts"
  generic="T extends { id: any, [key: string]: any }">
  const selected = defineModel<T[] | undefined>({
    // default: [],
  });
  const props = defineProps<{
    data: T[],
    pending?: boolean,
  }>();

  const columns = [{
    key: 'id',
    label: 'ลำดับที่'
  }, {
    key: 'type',
    label: 'ประเภท'
  }, {
    key: 'name',
    label: 'ชื่อ-สกุล'
  }, {
    key: 'amount',
    label: 'ยอดขอกู้'
  }, {
    key: 'installments',
    label: 'งวด'
  }, {
    key: 'bankAccount',
    label: 'บัญชีธนาคาร'
  }, {
    key: 'forperson',
    label: 'ผู้รับอำนาจรับเงินแทน'
  }, {
    key: 'counter',
    label: 'เคาน์เตอร์'
  }, {
    key: 'row-actions',
  }];

  const formatInstallments = (installments: string) => {
    const options: Record<string, string> = {
      option1: '16 งวด',
      option2: '24 งวด',
      option3: '240 งวด'
    };
    return options[installments] || installments;
  };

  const formatBankAccount = (bankAccount: string) => {
    const bankOptions: Record<string, string> = {
      bank1: 'กรุงไทย',
      bank2: 'กสิกร'
    };
    return bankOptions[bankAccount] || bankAccount;
  };

  const formattedData = computed(() => {
    return props.data.map((item, index) => ({
      ...item,
      id: index + 1, // Start id from 1
      installments: formatInstallments(item.installments),
      bankAccount: formatBankAccount(item.bankAccount),
    }));
  });
</script>
