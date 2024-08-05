import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('finances', 'Finance', {
  list: {
    root: withdraw, // รายการคำอนุมัติ
    active: withdraw, // รายการทำรายการโอนเงิน
    completed: withdraw, // รายการโอนเงินเสร็จสิ้น
    closed: withdraw, // รายการปิดยอด
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: withdraw,
      role: 'print',
    },
    scan: withdraw, // สแกน Qr Code โอนเงิน
    printReport: { // ปริ้น รายงาน ฝาก - ถอน ประจำวัน
      entity: withdraw,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
    },
    close: { // ส่งรายงานบัญชี (ปิดยอด)
      entity: withdraw, 
      post: true,
    },
  },
  each: {
    root: withdraw,
  },
});