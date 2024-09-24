import { bigPlatformBuilder, loanfast } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('directorfast', 'กรรมการเงินกู้', {
  list: {
    root: loanfast,
    active: loanfast,
    meeting: loanfast,
    completed: loanfast,
    sendpayment: loanfast,
    close: loanfast,
    printsheet: {
      entity: loanfast,
      post: true,
      role: 'print',
    },
    report: {
      entity: loanfast,
      post: true,
      role: 'print',
    },
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
