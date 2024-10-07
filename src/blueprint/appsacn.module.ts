import { bigPlatformBuilder, appsacn } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('appsacn', 'appsacn', {
  list: {
    root: appsacn,
    closed: appsacn,
  },
  create: {
    root: {
      entity: appsacn,
      post: true,
    },
    scanQR: {
      entity: appsacn,
      post: true,
    },
    takePhoto: {
      entity: appsacn,
      post: true,
    },
    camera: {
      entity: appsacn,
      post: true,
    },
    
  },
  each: {
    root: appsacn,
    edit: {
      entity: appsacn,
      post: true,
      role: 'edit',
    },
    success: {
      entity: appsacn,
      role: 'confirm',
    },
    takephoto: {
      entity: appsacn,
      role: 'edit',
    },
    complete: {
      entity: appsacn,
      role: 'confirm',
    },
    close: {
      entity: appsacn,
      role: 'confirm',
    },
  },
});
