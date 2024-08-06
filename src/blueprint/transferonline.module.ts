import { bigPlatformBuilder, transferonline } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('transferonline', 'ฝากเงินออนไลน์', {
  list: {
    root: transferonline,     
  },
  create: {
    root: { //จำนวนเงิน 
      entity: transferonline,
      post: true,
      role: 'stepedit',
    },   
    qrcode: {  // gen QR code 
      entity: transferonline,
      post: true,   
      role: 'stepedit',   
    },
    confirm: {  
      entity: transferonline,
      post: true,
      role: 'stepconfirm',
    },   
    steps: {
      entity: transferonline,
      role: 'steps',
    }
  },
  each: {
    root: transferonline, // success    
  },
});