import { bigPlatformBuilder, loanofficer } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('loanofficer', 'กู้สามัญ', {
  list: {
    root: loanofficer,
    completed: loanofficer,
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: loanofficer,
      post: true,
      role: 'print',
    },
    printReport: { // ปริ้น รายงาน 
      entity: loanofficer,
      post: true,
      role: 'print',
    },
    closed: loanofficer,
    finished: loanofficer,
  },
  create: {
    root: {
      entity: loanofficer,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: loanofficer,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: loanofficer,
      role: 'steps',
    },
    condition: {
      entity: loanofficer,
      post: true,
      role: 'stepconfirm',
    },
  },
  each: {
    root: loanofficer,
    print: {
      entity: loanofficer,
      post: true,
      role: 'print',
    },
    scan: {
      entity: loanofficer,
      post: true,
    },
    cancel: {
      entity: loanofficer,
      post: true,
      role: 'confirm',
    },
  },
});
