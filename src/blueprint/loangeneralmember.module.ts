import { bigPlatformBuilder, loangeneralmember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loangeneralmember', 'ขอสินเชื่อสมามัญ', {
  list: {
    root: loangeneralmember,
    completed: loangeneralmember,
    closed: loangeneralmember,
  },
  create: {
    root: {
      entity: loangeneralmember,
      post: true,
      role: 'stepedit',
    },
    condition: {
      entity: loangeneralmember,
      post: true,
      role: 'stepedit',
    },
    loan: {
      entity: loangeneralmember,
      post: true,
      role: 'stepedit',
      subName: 'loanshare',
    },
    confirm: {
      entity: loangeneralmember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loangeneralmember,
      role: 'steps',
    },
  },
  each: {
    root: loangeneralmember,
    loan: {
      entity: loangeneralmember,
      post: true,
      role: 'edit',
      subName: 'loanshare',
    },
    print: {
      entity: loangeneralmember,
      post: true,
      role: 'print',
    },
    scan: {
      entity: loangeneralmember,
      post: true,
    },
    takePhoto: {
      entity: loangeneralmember,
      post: true,
    },
    cancel: {
      entity: loangeneralmember,
      post: true,
      role: 'confirm',
    },
  },
});
