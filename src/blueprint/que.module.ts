import { bigPlatformBuilder, queue } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('queues', 'เรียกคิว', {
  list: {
    root: queue, // คิว
  },
  create: {
    root: { // เรียกคิว
      entity: queue,
      post: true,
      role: 'stepedit',
      subName: 'account',
    },
    confirm: {
      entity: queue,
      post: true,
      role: 'stepconfirm',
      subName: 'account',
    },
    steps: {
      entity: queue,
      role: 'steps',
    },
  },
  each: {
    root: {
      entity: queue,
      subName: 'account',
    },
  },
});
