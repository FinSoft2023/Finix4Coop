import { bigPlatformBuilder, trainingmembers } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('trainingmembers', 'อบรม', {
  list: {
    root: trainingmembers,
    completed: trainingmembers,
    closed: trainingmembers,
  },
  create: {
    root: {
      entity: trainingmembers,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: trainingmembers,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: trainingmembers,
      role: 'steps',
    },
  },
  each: {
    root: trainingmembers,
    idcard: {
      entity: trainingmembers,
      post: true,
    },
    cancel: {
      entity: trainingmembers,
      post: true,
      role: 'confirm',
    },
  },
});
