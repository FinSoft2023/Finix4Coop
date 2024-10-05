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
    },
    choice: {
      entity: kiosk,
      post: true,
    },
    scankiosk: {
      entity: kiosk,
      post: true,
    },
    
  },
  each: {
    root: kiosk,
  },
});
