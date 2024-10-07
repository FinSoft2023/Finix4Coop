import { bigPlatformBuilder, counter } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('counter', 'เคาน์เตอร์', {
  list: {
    root: counter,
    completed: counter,
    closed: counter,
  },
  create: {
    root: {
      entity: counter,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: counter,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: counter,
      role: 'steps',
    },
    close: {
      entity: counter,
      post: true,
    },
    qrCode: {
      entity: counter,
      post: true,
    },
  },
  each: {
    root: counter,
    print: {
      entity: counter,
      post: true,
      role: 'print',
    },
    scan: {
      entity: counter,
      post: true,
    },
    scanSignature: {
      entity: counter,
      post: true,
    },
    qrCode: {
      entity: counter,
      post: true,
    },
    free: {
      entity: counter,
      post: true,
    },
    free1: {
      entity: counter,
      post: true,
    },
    free2: {
      entity: counter,
      post: true,
    },
    takePhoto: {
      entity: counter,
      post: true,
    },
    fillData: {
      entity: counter,
      post: true,
      role: 'edit',
      subName: 'account',
    },
    cancel: {
      entity: counter,
      post: true,
      role: 'confirm',
    },
  },
});
