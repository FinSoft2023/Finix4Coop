import { bigPlatformBuilder, bindanaccount } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('bindanaccount', 'bindanaccount', {
  list: {
    root: bindanaccount,
    completed: bindanaccount,
    closed: bindanaccount,
  },
  create: {
    root: {
      entity: bindanaccount,
      post: true,
      role: 'stepedit',
    },
    IdCard: {
      entity: bindanaccount,
      post: true,
      role: 'stepedit',
      subName:'idcard',
    },
    numberPhone: {
      entity: bindanaccount,
      post: true,
      role: 'stepedit',
      subName:'numberphone',
    },
    otp: {
      entity: bindanaccount,
      post: true,
      subName:'otp',
      role: 'stepedit',
    },
    safeSettings: {
      entity: bindanaccount,
      post: true,
      role: 'stepedit',
    },
    steps: {
      entity: bindanaccount,
      role: 'steps',
    },
    confirm: {
      entity: bindanaccount,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: bindanaccount,
    cancel: {
      entity: bindanaccount,
      post: true,
      role: 'confirm',
    },
  },
});
