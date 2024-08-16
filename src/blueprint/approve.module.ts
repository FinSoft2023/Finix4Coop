import { bigPlatformBuilder, register } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('approve', 'อนุมัติรายการคำขอ', {
  list: {
    root: register, // รับเรื่อง
    attendance: register, // เข้าที่ประชุม
    coversheet: register, // ใบปะหน้า
    approval: register, // เซ็นอนุมัติคำขอ
    completed: register, // เสร็จสิ้น
    closed: register, 
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: register,
      post: true,
      role: 'print',
    },

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
    reportDoc: {
      entity: register, //print รายงานเข้าที่ประชุมประจำเดือน
      post: true,
    },
    approval: {
      entity: register, //อนุมัติคำขอ
      post: true,
    },
    deduction: {
      entity: register, // ส่งหักเงินค่าหุ้น ให้การเงิน
      post: true,
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
    printReport: {
      entity: register, //print สรุปใบรายงานเช็นอนุมัติ (ใบประหน้า)
      post: true,
      role: 'print',
    },
    scan: {
      entity: register, //Scan ส่งแบบฟอร์มเอกสารทั้งหมด (รายเซ็น)
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
