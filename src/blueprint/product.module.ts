import { bigPlatformBuilder, product } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('products', 'Product', {
  list: {
    root: product,
  },
  create: {
    root: {
      entity: product,
      post: true,
    },
  },
  each: {
    root: product,
    codes: {
      entity: product,
      post: true,
      subName: 'code',
      role: 'edit',
    }
  },
});
