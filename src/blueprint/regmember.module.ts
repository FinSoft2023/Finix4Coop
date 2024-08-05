import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('regmembers', 'ผูกสมาชิก (ชั่วคราว)', {
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
      subName: 'account',
    },
    confirm: {
      entity: accTransactions,
      post: true,
      role: 'stepconfirm',
      subName: 'account',
    },
    steps: {
      entity: accTransactions,
      role: 'steps',
    },
  },
  each: {
    root: {
      entity: accTransactions,
      subName: 'account',
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
