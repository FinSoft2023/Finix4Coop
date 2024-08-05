import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('accounts', 'Account', {
  list: {
    root: withdraw, // รายวัน
    month: withdraw, // รายเดือน
    year: withdraw, // รายปี
    printDay: {
      entity: withdraw,
      role: 'print',
    },
    printMonth: {
      entity: withdraw,
      role: 'print',
    },
    printYear: {
      entity: withdraw,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
    },
  },
  each: {
    root: withdraw,
  },
});
