import { bigPlatformBuilder, scan } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('scan', 'scan', {
  list: {
    root: scan,
    closed: scan,
  },
  create: {
    root: {
      entity: scan,
      post: true,
    },
    scanQR: {
      entity: scan,
      post: true,
    },
    takePhoto: {
      entity: scan,
      post: true,
    },
    camera: {
      entity: scan,
      post: true,
    },
    
  },
  each: {
    root: scan,
    edit: {
      entity: scan,
      post: true,
      role: 'edit',
    },
    success: {
      entity: scan,
      role: 'confirm',
    },
    takephoto: {
      entity: scan,
      role: 'edit',
    },
    complete: {
      entity: scan,
      role: 'confirm',
    },
    close: {
      entity: scan,
      role: 'confirm',
    },
  },

});
