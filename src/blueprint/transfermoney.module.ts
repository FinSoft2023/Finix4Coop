import { bigPlatformBuilder, transfermoney } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('transfermoney', 'โอนเงิน', {
  list: {
    root: transfermoney, // list ฉ
    active: transfermoney, // ทั่วไป
    success: transfermoney, // เสร็จสิ้น
    qrcodeloanfast: transfermoney, // ทั่วไป
    qrcodeactive: transfermoney, // เสร็จสิ้น
  },
  create: {
    root: {
      entity: transfermoney,
      post: true,
    },
    close: {
      entity: transfermoney,
      post: true,
    },
  },
  each: {
    root: transfermoney,
    loanfast: { // ฉ
      entity: transfermoney,
      post: true,
    },    
    waitingmoney: { // รายการ
      entity: transfermoney,
      post: true,
    },    
    success: { 
      entity: transfermoney,
      post: true,
    },    
  },
});