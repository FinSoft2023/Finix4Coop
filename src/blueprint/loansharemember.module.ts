import { bigPlatformBuilder, loansharemember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loansharemember', 'ขอสินเชื่อ', {
  list: {
    root: loansharemember,
    completed: loansharemember,
    closed: loansharemember,
  },
  create: {
    root: {
      entity: loansharemember,
      post: true,
      role: 'stepedit',
    },
    condition: {
      entity: loansharemember,
      post: true,
      role: 'stepedit',
    },
    loan: {
      entity: loansharemember,
      post: true,
      role: 'stepedit',
      subName: 'loanshare',
    },
    confirm: {
      entity: loansharemember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loansharemember,
      role: 'steps',
    },
  },
  each: {
    root: loansharemember,
    loan: {
      entity: loansharemember,
      post: true,
      role: 'edit',
      subName: 'loanshare',
    },
    print: {
      entity: loansharemember,
      post: true,
      role: 'print',
    },
    scan: {
      entity: loansharemember,
      post: true,
    },
    takePhoto: {
      entity: loansharemember,
      post: true,
    },
    cancel: {
      entity: loansharemember,
      post: true,
      role: 'confirm',
    },
  },
});
