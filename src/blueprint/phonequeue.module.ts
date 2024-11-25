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
    },
  },
  each: {
    root: kiosk,
    queue: kiosk,
  },
});