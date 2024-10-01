import { bigPlatformBuilder, deduction } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('deduction', 'หักเงินรายเดือน', {
  list: {
    root: deduction,
    completed: deduction,
    closed: deduction,
  },
  create: {
    root: {
      entity: deduction,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: deduction,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: deduction,
      role: 'steps',
    },
    close: {
      entity: deduction,
      post: true,
    },
  },
  each: {
    root: deduction,
    update: {
      entity: deduction,
      post: true,
    },
    history: {
      entity: deduction,
      post: true,
    },
    cancel: {
      entity: deduction,
      post: true,
      role: 'confirm',
    },
  },
});
