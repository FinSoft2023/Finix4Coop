import { bigPlatformBuilder, category } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('categories', 'Category', {
  list: {
    root: category,
    closed: category,
  },
  create: {
    root: {
      entity: category,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: category,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: category,
      role: 'steps',
    }
  },
  each: {
    root: category,
    edit: {
      entity: category,
      post: true,
      role: 'edit',
    },
    close: {
      entity: category,
      role: 'confirm',
    },
  },
});
