import { bigPlatformBuilder, loanfast } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('director', 'กรรมการเงินกู้', {
  list: {
    root: loanfast,
    completed: loanfast,
    close: loanfast,
    printsheet: {
      entity: loanfast,
      post: true,
      role: 'print',
    },
    sendpayment: loanfast,
  },
  create: {
    root: {
      entity: loanfast,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: loanfast,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loanfast,
      role: 'steps',
    },
  },
  each: {
    root: loanfast,
    scan: {
      entity: loanfast,
      post: true,
    },
    takePhoto: {
      entity: loanfast,
      post: true,
    },
    cancel: {
      entity: loanfast,
      post: true,
      role: 'confirm',
    },
  },
});
