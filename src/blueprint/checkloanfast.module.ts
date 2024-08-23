import { bigPlatformBuilder, checkloanfast } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('checkloanfast', 'ตรวจสอบขอกู้ฉุกเฉิน', {
  list: {
    root: checkloanfast,
    completed: checkloanfast,
    closed: checkloanfast,
  },
  create: {
    root: {
      entity: checkloanfast,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: checkloanfast,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: checkloanfast,
      role: 'steps',
    },
    condition: {
      entity: checkloanfast,
      post: true,
      role: 'stepedit',
    },
  },
  each: {
    root: checkloanfast,
    cancel: {
      entity: checkloanfast,
      post: true,
      role: 'confirm',
    },
  },
});
