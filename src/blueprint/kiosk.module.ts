import { bigPlatformBuilder, kiosk } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('kiosks', 'คู้คิว', {
  list: {
    root: kiosk, // หน้า welcome
    scanqr: kiosk, // หน้าสแแกน QR ในโทรศัพท์
    addline: kiosk, // หน้าเพิ่มเพื่อนในไลน์
  },
  create: {
    root: { // หน้าเตรียมถ่ายรูปยืนยันตัวตน
      entity: kiosk,
      post: true,
    },
    takephoto: { // หน้าถ่ายรูปยืนยันตัวตน
      entity: kiosk,
      post: true,
      subName: 'takephoto',
    },
    numpad: { // หน้ากรอกเลขสมาชิก
      entity: kiosk,
      post: true,
      subName: 'searchmember',
    },
    memberinfo: { // หน้าแสดงข้อมูลสมาชิก
      entity: kiosk,
      post: true,
      subName: 'memberdata',
    },
    transaction: { // หน้าเลือกธุรกรรม
      entity: kiosk,
      post: true,
      subName: 'transaction',
    },
  },
  each: {
    root: kiosk, // หน้าเลขคิว
  },
});
