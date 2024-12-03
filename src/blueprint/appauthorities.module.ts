import { bigPlatformBuilder, membershipcounter } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('appauthorities', 'App', {
  list: {
    root: membershipcounter, // Home
    cameraScan: membershipcounter, // กล้อง sacn
    closed: membershipcounter, // ยอดแล้ว 
  },
  create: {
    root: {
      entity: membershipcounter,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: membershipcounter,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: membershipcounter,
      role: 'steps',
    },
    close: {
      entity: membershipcounter,
      post: true,
    },
  },
  each: {
    root: membershipcounter,   
    takePhoto: {  // ถ่ายรูปเก็บเอกสาร
      entity: membershipcounter,
      post: true,
      role: 'edit',
    },
    warn: {  // สแกน QR ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
    },
    approve: { // อนุมัติ
      entity: membershipcounter,
      post: true,
      role: 'confirm',
    },
    cancel: { // ยกเลิก
      entity: membershipcounter,
      post: true,
      role: 'confirm',
    },
  },
});