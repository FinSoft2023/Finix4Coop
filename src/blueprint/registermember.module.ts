import { bigPlatformBuilder, registermember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('registermember', 'สมัครสมาชิก', {
  list: {
    root: registermember,
    completed: registermember,
    closed: registermember,
  },
  create: {
    root: {
      entity: registermember,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: registermember,
      post: true,
      role: 'stepconfirm',
    },
    condition: {
      entity: registermember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: registermember,
      role: 'steps',
    },
  },
  each: {
    root: registermember,
    loan: {
      entity: registermember,
      post: true,
      role: 'edit',
      subName: 'Spouse',
    },
    information: {
      entity: registermember,
      post: true,
    },
    finish: {
      entity: registermember,
      post: true,
    },
    cancel: {
      entity: registermember,
      post: true,
      role: 'confirm',
    },
  },
});