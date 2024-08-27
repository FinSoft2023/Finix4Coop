import { bigPlatformBuilder, trainingmembers } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('trainingmembers', 'ตรวจสอบขอกู้ฉุกเฉิน', {
  list: {
    root: trainingmembers,
    completed: trainingmembers,
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
    print: {
      entity: trainingmembers,
      post: true,
      role: 'print',
    },   
    takePhoto: {
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
