import { bigPlatformBuilder, updatedata } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('updatedata', 'เปลี่ยนแปลงลายเซ็น', {
  list: {
    root: updatedata, // รับเรื่อง
    completed: updatedata, // เสร็จสิ้น
    closed: updatedata, 

  },
  create: {
    root: {
      entity: updatedata, //เจ้าหน้าที่รับคิว (แสดงข้อมูลที่สมาชิกกรอก)
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: updatedata, //ยืนยันข้อมูล
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: updatedata,
      role: 'steps',
    },
    closed: {
      entity: updatedata,
      post: true,
    },
  },
  each: {
    root: updatedata,
    print: {
      entity: updatedata, //Print และเซ็นต์ฟอร์ม สมัครสมาชิก
      post: true,
      role: 'print',
    },
    scan: {
      entity: updatedata, //Scan ส่งแบบฟอร์มเอกสารทั้งหมด (รายเซ็น)
      post: true,
    },
    qrCode: {
      entity: updatedata, //Scan qr code add chat bot
      post: true,
    },
    takePhoto: {
      entity: updatedata, //ดูรูปถ่าย
      post: true,
    },
    cancel: {
      entity: updatedata, //ยกเลิกรายการ
      post: true,
      role: 'confirm',
    },
  },
});
