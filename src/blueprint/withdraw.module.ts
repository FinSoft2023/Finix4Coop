import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('withdrawals', 'ถอนเงิน', {
  list: {
    root: accTransactions,
    completed: accTransactions,
    closed: accTransactions,
  },
  create: {
    root: {
      entity: accTransactions,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: accTransactions,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: accTransactions,
      role: 'steps',
    },
    close: {
      entity: accTransactions,
      post: true,
    },
  },
  each: {
    root: accTransactions,
    print: {
      entity: accTransactions,
      post: true,
      role: 'print',
    },
    scan: {
      entity: accTransactions,
      post: true,
    },
    takePhoto: {
      entity: accTransactions,
      post: true,
    },
    cancel: {
      entity: accTransactions,
      post: true,
      role: 'confirm',
    },
  },
});
