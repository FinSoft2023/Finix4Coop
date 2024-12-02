import { bigPlatformBuilder, membershipcounter } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('membershipcounter', 'รับเรื่องสมัครสมาชิก', {
  list: {
    root: membershipcounter, // Home
    closeTheBalance : membershipcounter, // ปิดยอด
    closed : membershipcounter, // ยอดแล้ว 
    printReport : membershipcounter, // รายงาน 
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
    printDocument: { // ปริ้นเอกสาร
      entity: membershipcounter,
      post: true,
      role: 'print',
    },
    scanPaper: {  // สแกนเอกสาร
      entity: membershipcounter,
      post: true,
      role: 'edit',      
    },
    verifyIdentity: { // ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
      role: 'edit',      
    },
    printQR: { // ปริ้นท์ QR ทับเอกสาร
      entity: membershipcounter,
      post: true,
      role: 'print',
    },
    fillInformation: {  // กรอกข้อมูล
      entity: membershipcounter,
      post: true,
      role: 'edit',      
      subName: 'membershipcounter',
    },
    takePhoto: {  // ถ่ายรูป ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
      role: 'edit',      
    },
    signature: {  // ลายเซ็น ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
      role: 'edit',      
    },
    verifyIdentityQR: {  // สแกน QR ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
      role: 'edit',      
    },
    closed: {  // สแกน QR ยืนยันตัวตน
      entity: membershipcounter,
      post: true,
      role: 'edit',      
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