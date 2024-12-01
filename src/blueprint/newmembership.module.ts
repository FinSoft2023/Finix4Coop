import { bigPlatformBuilder, membership } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('membership', 'สมัครสมาชิก', {
  list: {
    root: membership, // Home
    closeTheBalance : membership, // ปิดยอด
    closed : membership, // ยอดแล้ว 
    printReport : membership, // รายงาน 
  },
  create: {
    root: {
      entity: membership,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: membership,
      post: true,
      role: 'stepconfirm',
    }, 
    steps: {
      entity: membership,
      role: 'steps',
    },
    close: {
      entity: membership,
      post: true,
    },
  },
  each: {
    root: membership,
    printDocument: { // ปริ้นเอกสาร
      entity: membership,
      post: true,
      role: 'print',
    },
    scanPaper: {  // สแกนเอกสาร
      entity: membership,
      post: true,
    },
    verifyIdentity: { // ยืนยันตัวตน
      entity: membership,
      post: true,
    },
    printQR: { // ปริ้นท์ QR ทับเอกสาร
      entity: membership,
      post: true,
      role: 'print',
    },
    fillInformation: {  // กรอกข้อมูล
      entity: membership,
      post: true,
    },
    takePhoto: {  // ถ่ายรูป ยืนยันตัวตน
      entity: membership,
      post: true,
    },
    signature: {  // ลายเซ็น ยืนยันตัวตน
      entity: membership,
      post: true,
    },
    verifyIdentityQR: {  // สแกน QR ยืนยันตัวตน
      entity: membership,
      post: true,
    },
    closed: {  // สแกน QR ยืนยันตัวตน
      entity: membership,
      post: true,
    },
    approve: { // อนุมัติ
      entity: membership,
      post: true,
      role: 'confirm',
    },
    cancel: { // ยกเลิก
      entity: membership,
      post: true,
      role: 'confirm',
    },
  },
});