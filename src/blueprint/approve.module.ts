import { bigPlatformBuilder, register } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('approve', 'อนุมัติรายการคำขอ', {
  list: {
    root: register, // ตรวจสอบข้อมูล
    attendance: register, // สร้างรายงาน
    coversheet: register, // ใบปะหน้า
    approval: register, // เซ็นอนุมัติคำขอ
    completed: register, // เสร็จสิ้น
    closed: register,
    printDoc: { // ปริ้นเอกสารใบประหน้า
      entity: register,
      post: true,
      role: 'print',
    },
    printReport: { // สร้างใบประหน้า
      entity: register,
      post: true,
      role: 'print',
    },
  },
  create: {
    root: {
      entity: register,
      post: true,
    },
    check: {
      entity: register, // ตรวจสอบข้อมูล (เงินเดือน)
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
    closed: {
      entity: register,
      post: true,
    },
  },
  each: {
    root: register,
    scan1: {
      entity: register, //บันทึกชุดใบสมัคร ที่ผ่านการอนุมัติแล้ว
      post: true,
    },
    scan2: {
      entity: register, //บันทึกใบยินยอมให้หักเงินเดือน
      post: true,
    },
    previewPhoto1: {
      entity: register, //ดูรูปถ่าย 1
      post: true,
    },
    previewPhoto2: {
      entity: register, //ดูรูปถ่าย 2
      post: true,
    },
    cancel: {
      entity: register, //ยกเลิกรายการ
      post: true,
      role: 'confirm',
    },
  },
});
