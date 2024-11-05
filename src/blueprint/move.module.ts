import { bigPlatformBuilder, move } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('move', 'ย้ายสังกัด', {
  list: {
    root: move,
    completed: move,
    closed: move,
    print: {
      entity: move,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: move,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: move,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: move,
      role: 'steps',
    },
    condition: {
      entity: move,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: move,
    scan: {
      entity: move,
      post: true,
    },
    print: {
      entity: move,
      post: true,
      role: 'print',
    },
    printDoc: {
      entity: move,
      post: true,
      role: 'print',
    },
    report: {
      entity: move,
      post: true,
    },
    reportDoc: {
      entity: move,
      post: true,
    },
    cancel: {
      entity: move,
      post: true,
      role: 'confirm',
    },
  },
});
