import { bigPlatformBuilder, loanfast } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loanFast', 'กู้ ฉุกเฉิน', {
  list: {
    root: loanfast,
    completed: loanfast,
    closed: loanfast,
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
    check: {
      entity: loanfast,
      post: true,
      role: 'edit',
      subName: 'fillinInformation',
    },
    steps: {
      entity: loanfast,
      role: 'steps',
    },
    close: {
      entity: loanfast,
      post: true,
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
