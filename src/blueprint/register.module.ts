import { bigPlatformBuilder, register } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('register', 'สมัครสมาชิกใหม่', {
  list: {
    root: register, // รับเรื่อง
    completed: register, // เสร็จสิ้น
    closed: register, 

  },
  create: {
    root: {
      entity: register, //เจ้าหน้าที่รับคิว (แสดงข้อมูลที่สมาชิกกรอก)
      post: true,
      role: 'stepedit',
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
    print: {
      entity: register, //Print และเซ็นต์ฟอร์ม สมัครสมาชิก
      post: true,
      role: 'print',
    },
    scan: {
      entity: register, //Scan ส่งแบบฟอร์มเอกสารทั้งหมด (รายเซ็น)
      post: true,
    },
    qrCode: {
      entity: register, //Scan qr code add chat bot
      post: true,
    },
    takePhoto: {
      entity: register, //ดูรูปถ่าย
      post: true,
    },
    cancel: {
      entity: register, //ยกเลิกรายการ
      post: true,
      role: 'confirm',
    },
  },
});
