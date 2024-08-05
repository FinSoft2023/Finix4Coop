import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('accounting', 'Accounting', {
  list: {
    root: accTransactions,
    daily: accTransactions, // รายวัน
    monthly: accTransactions, // รายเดือน
    yearly: accTransactions, // รายปี
    printDay: {
      entity: accTransactions,
      role: 'print',
    },
    printMonth: {
      entity: accTransactions,
      role: 'print',
    },
    printYear: {
      entity: accTransactions,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: accTransactions,
      post: true,
    },
  },
  each: {
    root: accTransactions,
  },
});
