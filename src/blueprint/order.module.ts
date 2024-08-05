import { bigPlatformBuilder, order } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('orders', 'Order', {
  list: {
    root: order,
  },
  create: {
    root: {
      entity: order,
      post: true,
    },
  },
  each: {
    root: order,
    items: {
      entity: order,
      post: true,
      subName: 'orderItems',
      role: 'children',
    },
  },
});
