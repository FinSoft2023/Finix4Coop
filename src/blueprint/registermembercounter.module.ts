import { bigPlatformBuilder, registermembercounter } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('registermemberCounter', 'รับเรื่องสมัครสมาชิกใหม่', {
  list: {
    root: registermembercounter,
    listCheck: registermembercounter,
    confrimCheck: registermembercounter,
    linkeCheck: registermembercounter,
    stateCheck: registermembercounter,
    confirm: registermembercounter,
  },
  create: {
    root: {
      entity: registermembercounter,
      post: true,
      role: 'stepedit',
    },
    addInformation: {
      entity: registermembercounter,
      post: true,
      role: 'stepedit',
      subName: 'addInformation',
    },
    confirm: {
      entity: registermembercounter,
      post: true,
      role: 'stepconfirm',
     },
    steps: {
      entity: registermembercounter,
      role: 'steps',
    },
  },
  each: {
    root: {
      entity: registermembercounter,
    },
    print: {
      entity: registermembercounter,
      post: true,
      role: 'print',
    },
    qrPrint: {
      entity: registermembercounter,
      post: true,
      role: 'print',
    },
    addInformation: {
      entity: registermembercounter,
      post: true,
      role: 'addInformation',
    },
    scanPaper: {
      entity: registermembercounter,
      post: true,
      role: 'edit',
    },  
    cancel: {
      entity: registermembercounter,
      post: true,
      role: 'confirm',
    },
  },
});
