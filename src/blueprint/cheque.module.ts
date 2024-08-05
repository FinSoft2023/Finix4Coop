import { bigPlatformBuilder, withdraw } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('cheque', 'Cheque', {
  list: {
    root: withdraw, // ดำเนินการปริ้นเช็ค
    active: withdraw, // ดำเนินการบันทึกรูปเช็ค
    completed: withdraw, // เสร็จสิ้นบันทึกรูปขั่วเช็ค
  },
  create: {
    root: {
      entity: withdraw,
      post: true,
    },
  },
  each: {
    root: withdraw,
    print: { // ปริ้นเช็ค
      entity: withdraw,
      role: 'print',
    },
    scan: withdraw, // แสกนสั่งจ่ายเช็ค
    takePhoto: { // บันทึกรูปเช็ค
      entity: withdraw,
      post: true,
    },
    scan2: withdraw, // แสกนจ่ายเช็ค
    takePhoto2: { // บันทึกรูปขั่วเช็ค
      entity: withdraw,
      post: true,
    },
  },
}
);