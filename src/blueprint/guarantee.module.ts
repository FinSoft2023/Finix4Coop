import { bigPlatformBuilder, guarantee } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('guarantee', 'ฌาปนกิจ', {
  list: {
    root: guarantee,
    listmenu: guarantee,
    closed: guarantee,
  },
  create: {
    root: {
      entity: guarantee,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: guarantee,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: guarantee,
      role: 'steps',
    },
    condition: {
      entity: guarantee,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: guarantee,
    print: {
      entity: guarantee,
      post: true,
      role: 'print',
    },
    detail: {
      entity: guarantee,
      post: true,
      role: 'edit',
    },
    print1: {
      entity: guarantee,
      post: true,
      role: 'print',
    },
    print2: {
      entity: guarantee,
      post: true,
      role: 'print',
    },
    print3: {
      entity: guarantee,
      post: true,
      role: 'print',
    },
    cancel: {
      entity: guarantee,
      post: true,
      role: 'confirm',
    },
  },
});
