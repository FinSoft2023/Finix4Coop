import { bigPlatformBuilder, loanordinarymember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loanordinarymember', 'สมัครสมาชิก', {
  list: {
    root: loanordinarymember,
    completed: loanordinarymember,
    closed: loanordinarymember,
  },
  create: {
    root: {
      entity: loanordinarymember,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: loanordinarymember,
      post: true,
      role: 'stepconfirm',
    },
    condition: {
      entity: loanordinarymember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loanordinarymember,
      role: 'steps',
    },
  },
  each: {
    root: loanordinarymember,
    loan: {
      entity: loanordinarymember,
      post: true,
      role: 'edit',
      subName: 'Spouse',
    },
    information: {
      entity: loanordinarymember,
      post: true,
    },
    finish: {
      entity: loanordinarymember,
      post: true,
    },
    cancel: {
      entity: loanordinarymember,
      post: true,
      role: 'confirm',
    },
  },
});
