import { bigPlatformBuilder, register } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('inspection', 'ตรวจสอบข้อมูล', {
  list: {
    root: register, // ตรวจสอบข้อมูล
    completed: register, // เสร็จสิ้น
    closed: register, 

  },
  create: {
    root: {
      entity: register, //เจ้าหน้าที่รับคิว (แสดงข้อมูลที่สมาชิกกรอก)
      post: true,
      role: 'stepedit',
    },
    verificationDoc: {
      entity: register, //ตรวจสอบข้อมูล (เงินเดือน)
      post: true,
    },
    reportDoc: {
      entity: register, //print รายงานเข้าที่ประชุมประจำเดือน
      post: true,
    },
    confirm: {
      entity: register, //ยืนยันข้อมูล
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: register,
      role: 'steps',
    },
    closed: {
      entity: register,
      post: true,
    },
  },
  each: {
    root: register,
    cancel: {
      entity: register, //ยกเลิกรายการ
      post: true,
      role: 'confirm',
    },
    edit: {
      entity: register, //แก้ไข
      post: true,
      role: 'edit',
      subName: 'edit',
    },
  },
});
