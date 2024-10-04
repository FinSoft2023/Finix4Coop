import { bigPlatformBuilder, kiosk } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('kiosks', 'คู้คิว', {
  list: {
    root: kiosk,
  },
  create: {
    root: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
      subName: 'account',
    },
    takephoto: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
      subName: 'account',
    },
    choice: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
      subName: 'account',
    },
    scankiosk: {
      entity: kiosk,
      post: true,
      role: 'stepedit',
      subName: 'account',
    },
    confirm: {
      entity: kiosk,
      post: true,
      role: 'stepconfirm',
      subName: 'account',
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
