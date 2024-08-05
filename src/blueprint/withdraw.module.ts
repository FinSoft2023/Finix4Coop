import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('withdraws', 'Withdraw', {
  list: {
    root: withdraw,
    completed: withdraw,
    closed: withdraw,
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: withdraw,
      post: true,
      role: 'stepfinal',
    },
    steps: {
      entity: withdraw,
      role: 'steps',
    },
    close: {
      entity: withdraw,
      post: true,
    },
  },
  each: {
    root: withdraw,
    print: {
      entity: withdraw,
      role: 'print',
    },
    scan: withdraw,
    takePhoto: {
      entity: withdraw,
      post: true,
    },
    cancel: {
      entity: withdraw,
      post: true,
      role: 'confirm',
    },
  },
});
