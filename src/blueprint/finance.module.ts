import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('finances', 'Finance', {
  list: {
    root: withdraw, // รายการคำอนุมัติ
    transaction: withdraw, // สั่งจ่ายเช็ค -ทำรายการโอนเงิน
    completed: withdraw, // จ่ายเช็ค - โอนเงินเสร็จสิ้น
    closed: withdraw, // ปิดยอด
    printDoc: {
      entity: withdraw,
      role: 'print',
    },
    scan: withdraw, // สแกน Qr Code โอนเงิน
    printReport: {
      entity: withdraw,
      role: 'print',
    },
    sendReport: withdraw, // ส่งรายงานบัญชี
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
    },
    close: {
      entity: withdraw,
      post: true,
    },
  },
  each: {
    root: withdraw,
  },
});