import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('cheque', 'Cheque', {
  list: {
    root: withdraw,
    completed: withdraw,
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
    },
  },
  each: {
    root: withdraw,
    print: {
      entity: withdraw,
      role: 'print',
    },
    scan: withdraw,
    takePhoto: {
      entity: withdraw,
      post: true,
    },
  },
}
);