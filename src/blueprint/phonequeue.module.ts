import { bigPlatformBuilder, kiosk } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('Transactionphone', 'เลือกธุรกรรม', {
  list: {
    root: kiosk,
  },
  create: {
    root: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
    },
    prepare: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: kiosk,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: kiosk,
      role: 'steps',
    },
  },
  each: {
    root: kiosk,
  },
});
