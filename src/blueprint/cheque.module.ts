import { bigPlatformBuilder, accTransactions } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('cheques', 'ใบเช็ค', {
  list: {
    root: accTransactions, // ดำเนินการปริ้นเช็ค
    active: accTransactions, // ดำเนินการบันทึกรูปเช็ค
    deliver: accTransactions, // จ่ายเช็ค
    completed: accTransactions, // เสร็จสิ้นบันทึกรูปขั่วเช็ค
  },
  create: {
    root: {
      entity: accTransactions,
      post: true,
    },
    close: {
      entity: accTransactions,
      post: true,
    },
  },
  each: {
    root: accTransactions,
    print: { // ปริ้นเช็ค
      entity: accTransactions,
      post: true,
      role: 'print',
    },
    scan: {  // แสกนสั่งจ่ายเช็ค
      entity: accTransactions,
      post: true,
    },
    takePhoto: { // บันทึกรูปเช็ค
      entity: accTransactions,
      post: true,
    },
    scan2deliver: {  // แสกนจ่ายเช็ค
      entity: accTransactions,
      post: true,
    },
    takePhotoDeliver: { // บันทึกรูปขั่วเช็ค
      entity: accTransactions,
      post: true,
    },
  },
});