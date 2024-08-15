import { bigPlatformBuilder, bindaccount } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('bindaccount', 'ผูกบัญชี', {
  list: {
    root: bindaccount,
    completed: bindaccount,
    closed: bindaccount,
  },
  create: {
    root: {
      entity: bindaccount,
      post: true,
      role: 'stepedit',
    },
    bindaccount: {
      entity: bindaccount,
      post: true,
      role: 'stepedit',
    },
    confirmBindaccount: {
      entity: bindaccount,
      post: true,
      role: 'stepconfirm',
    },
    confirm: {
      entity: bindaccount,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: bindaccount,
      role: 'steps',
    },
    close: {
      entity: bindaccount,
      post: true,
    },
  },
  each: {
    root: bindaccount,
    scan: {
      entity: bindaccount,
      post: true,
    },
    takePhoto: {
      entity: bindaccount,
      post: true,
    },
    signature: {
      entity: bindaccount,
      post: true,
    },
    takeSignature: {
      entity: bindaccount,
      post: true,
    },
    cancel: {
      entity: bindaccount,
      post: true,
      role: 'confirm',
    },
  },
});
