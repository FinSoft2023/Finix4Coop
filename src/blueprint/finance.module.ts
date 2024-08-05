import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('finances', 'Finance', {
  list: {
    root: accTransactions, // รายการคำอนุมัติ
    active: accTransactions, // รายการทำรายการโอนเงิน
    completed: accTransactions, // รายการโอนเงินเสร็จสิ้น
    closed: accTransactions, // รายการปิดยอด
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: accTransactions,
      post: true,
      role: 'print',
    },
    scan: accTransactions, // สแกน Qr Code โอนเงิน
    printReport: { // ปริ้น รายงาน ฝาก - ถอน ประจำวัน
      entity: accTransactions,
      post: true,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: accTransactions,
      post: true,
    },
    close: { // ส่งรายงานบัญชี (ปิดยอด)
      entity: accTransactions, 
      post: true,
    },
  },
  each: {
    root: accTransactions,
  },
});