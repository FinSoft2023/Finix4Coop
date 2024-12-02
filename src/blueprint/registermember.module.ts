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
    beneficiary: {
      entity: registermember,
      post: true,
      role: 'stepedit',
      subName: 'beneficiary',
    },
    memberFamily: {
      entity: registermember,
      post: true,
      role: 'stepedit',
      subName: 'memberFamily',
    },
    confirm: {
      entity: registermember,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: registermember,
      role: 'steps',
    },
    close: {
      entity: registermember,
      post: true,
    },
  },
  each: {
    root: registermember,
    edit: {
      entity: registermember,
      post: true,
      role: 'edit',
    },
    print: {
      entity: registermember,
      post: true,
      role: 'print',
    },
    scan: {
      entity: registermember,
      post: true,
    },
    takePhoto: {
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
