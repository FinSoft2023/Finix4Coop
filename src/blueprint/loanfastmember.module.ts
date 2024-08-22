import { bigPlatformBuilder, loanfastmember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loanfastmember', 'ขอกู้ฉุกเฉิน', {
  list: {
    root: loanfastmember,
    completed: loanfastmember,
    closed: loanfastmember,
  },
  create: {
    root: {
      entity: loanfastmember,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: loanfastmember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loanfastmember,
      role: 'steps',
    },
    condition: {
      entity: loanfastmember,
      post: true,
      role: 'stepedit',
    },
  },
  each: {
    root: loanfastmember,
    cancel: {
      entity: loanfastmember,
      post: true,
      role: 'confirm',
    },
  },
});
