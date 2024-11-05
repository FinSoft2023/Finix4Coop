import { bigPlatformBuilder, resign } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('resign', 'ลาออก', {
  list: {
    root: resign,
    completed: resign,
    closed: resign,
    print: {
      entity: resign,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: resign,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: resign,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: resign,
      role: 'steps',
    },
    condition: {
      entity: resign,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: resign,
    scan: {
      entity: resign,
      post: true,
    },
    print: {
      entity: resign,
      post: true,
      role: 'print',
    },
    printDoc: {
      entity: resign,
      post: true,
      role: 'print',
    },
    report: {
      entity: resign,
      post: true,
    },
    reportDoc: {
      entity: resign,
      post: true,
    },
    cancel: {
      entity: resign,
      post: true,
      role: 'confirm',
    },
  },
});
