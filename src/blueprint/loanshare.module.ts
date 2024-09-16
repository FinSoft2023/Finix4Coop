import { bigPlatformBuilder, loanfast } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loanshare', 'กู้หุ้น', {
  list: {
    root: loanfast,
    completed: loanfast,
    close: loanfast,

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
    print: {
      entity: loanfast,
      post: true,
      role: 'print',
    },
    scan: {
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
