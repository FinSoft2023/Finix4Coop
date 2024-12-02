import { bigPlatformBuilder, generalloan } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('generalloan', 'รับเรื่องกู้สามัญทั่วไป', {
  list: {
    root: generalloan, // Home
    closeTheBalance : generalloan, // ปิดยอด
    closed : generalloan, // ยอดแล้ว 
    printReport : generalloan, // รายงาน 
  },
  create: {
    root: {
      entity: generalloan,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: generalloan,
      post: true,
      role: 'stepconfirm',
    }, 
    steps: {
      entity: generalloan,
      role: 'steps',
    },
    close: {
      entity: generalloan,
      post: true,
    },
  },
  each: {
    root: generalloan,
    printDocument: { // ปริ้นเอกสาร
      entity: generalloan,
      post: true,
      role: 'print',
    },
    scanPaper: {  // สแกนเอกสาร
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    verifyIdentity: { // ยืนยันตัวตน
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    printQR: { // ปริ้นท์ QR ทับเอกสาร
      entity: generalloan,
      post: true,
      role: 'print',
    },
    fillInformation: {  // กรอกข้อมูล
      entity: generalloan,
      post: true,
      role: 'edit',      
      subName: 'generalloan',
    },
    takePhoto: {  // ถ่ายรูป ยืนยันตัวตน
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    signature: {  // ลายเซ็น ยืนยันตัวตน
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    verifyIdentityQR: {  // สแกน QR ยืนยันตัวตน
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    closed: {  // สแกน QR ยืนยันตัวตน
      entity: generalloan,
      post: true,
      role: 'edit',      
    },
    approve: { // อนุมัติ
      entity: generalloan,
      post: true,
      role: 'confirm',
    },
    cancel: { // ยกเลิก
      entity: generalloan,
      post: true,
      role: 'confirm',
    },
  },
});