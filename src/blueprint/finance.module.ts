import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('financials', 'การเงิน', {
  list: {
    root: accTransactions, // รายการคำอนุมัติ
    active: accTransactions, // รายการทำรายการโอนเงิน
    completed: accTransactions, // รายการโอนเงินเสร็จสิ้น
    closed: accTransactions, // รายการปิดยอด
    rptPaid: accTransactions, // รายงานการจ่ายเงิน
    rptDaily: accTransactions, // รายงานประจำวัน
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: accTransactions,
      post: true,
      role: 'print',
    },
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
    payout: { // สแกน Qr Code โอนเงิน
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