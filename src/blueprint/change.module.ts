import { bigPlatformBuilder, change } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('change', 'ย้ายสหกรณ์', {
  list: {
    root: change,
    completed: change,
    closed: change,
    print: {
      entity: change,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: change,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: change,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: change,
      role: 'steps',
    },
    condition: {
      entity: change,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: change,
    scan: {
      entity: change,
      post: true,
    },
    print: {
      entity: change,
      post: true,
      role: 'print',
    },
    printDoc: {
      entity: change,
      post: true,
      role: 'print',
    },
    report: {
      entity: change,
      post: true,
    },
    reportDoc: {
      entity: change,
      post: true,
    },
    cancel: {
      entity: change,
      post: true,
      role: 'confirm',
    },
  },
});
