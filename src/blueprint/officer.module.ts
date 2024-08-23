import { bigPlatformBuilder, officer } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('officer', 'ผูกบัญชี', {
  list: {
    root: officer,
    completed: officer,
    closed: officer,
  },
  create: {
    root: {
      entity: officer,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: officer,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: officer,
      role: 'steps',
    },
    close: {
      entity: officer,
      post: true,
    },
  },
  each: {
    root: officer,
    print: {
      entity: officer,
      post: true,
      role: 'print',
    },
    scan: {
      entity: officer,
      post: true,
    },
    takePhoto: {
      entity: officer,
      post: true,
    },
    qrCode: {
      entity: officer,
      post: true,
    },
    cancel: {
      entity: officer,
      post: true,
      role: 'confirm',
    },
  },
});
