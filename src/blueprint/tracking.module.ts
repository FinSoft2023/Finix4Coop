import { bigPlatformBuilder, tracking } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('tracking', 'ติดตามทวงหนี้', {
  list: {
    root: tracking,
    month1: tracking,
    month2: tracking,
    month3: tracking,
    closed: tracking,
  },
  create: {
    root: {
      entity: tracking,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: tracking,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: tracking,
      role: 'steps',
    },
    close: {
      entity: tracking,
      post: true,
    },
  },
  each: {
    root: tracking,
    print: {
      entity: tracking,
      post: true,
      role: 'print',
    },
    cancel: {
      entity: tracking,
      post: true,
    },
  },
});
