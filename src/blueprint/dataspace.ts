import { createBigDataDefinitionBuilder } from 'bigplatdefibp';
import z from 'zod';

export const bigPlatformBuilder = createBigDataDefinitionBuilder('sample');

const { defineEntity, defineChoicesList } = bigPlatformBuilder;

export const product = defineEntity({
  name: 'product',
  root: [
    {
      model: 'name',
      label: 'Name',
      spec: {},
      component: 'text',
    },
    {
      model: 'price',
      label: 'Price',
      spec: {},
      component: 'number',
    },
    {
      model: 'description',
      label: 'Description',
      spec: {},
      component: 'text',
    },
    {
      model: 'categoryId',
      label: 'Category',
      spec: {},
      component: 'category',
      choices: 'ref:categories',
    },
  ],
  sub: [
    {
      name: 'code',
      component: 'entry',
      fields: [
        {
          model: 'qrCode',
          label: 'QR Code',
          spec: {},
          component: 'text',
        },
        {
          model: 'upcCode',
          label: 'UPC Code',
          spec: {},
          component: 'text',
        },
      ],
    },
  ],
});

export const order = defineEntity({
  name: 'order',
  root: [
    {
      model: 'customer',
      label: 'Customer Name',
      spec: {},
      component: 'text',
    },
    {
      model: 'orderDate',
      label: 'Order Date',
      spec: {},
      component: 'date',
    },
  ],
  sub: [
    {
      name: 'orderItems',
      component: 'list',
      fields: [
        {
          model: 'productId',
          label: 'Product',
          spec: {},
          component: 'product',
          choices: 'ref:products',
        },
        {
          model: 'quantity',
          label: 'Quantity',
          spec: {},
          component: 'number',
        },
        {
          model: 'unitPrice',
          label: 'Unit Price',
          spec: {},
          component: 'number',
        },
      ],
    },
  ],
});

export const categoyStates = defineChoicesList('category-states', {
  prep: 'Preparation',
  active: 'Active',
  inactive: 'Inactive',
});

export const category = defineEntity({
  name: 'category',
  root: [
    {
      model: 'name',
      label: 'Name',
      spec: {},
      component: 'text',
    },
    {
      model: 'state',
      label: 'State',
      spec: {},
      component: 'select',
      choices: categoyStates,
    },
  ],
  links: [
    {
      name: 'products',
      component: 'list',
      link2: 'product',
      look4: 'categoryId',
    },
  ],
});

export const accountTypes = defineChoicesList('account-types', {
  savings: 'ออมทรัพย์พิเศษ',
});
export const transactionCodes = defineChoicesList('codes-tx-operation', {
  svadps: 'ฝาก',
  svadol: 'ฝาก online',
  svawtd: 'ถอน',
});
export const transferChannels = defineChoicesList('transfer-channels', {
  online: 'โอน online',
  cheque: 'เช็ค',
});

export const accTransactions = defineEntity({
  name: 'ธุรกรรม',
  root: [
    {
      model: 'txcode',
      label: 'ประเภทธุรกรรม',
      spec: {},
      component: 'select',
      choices: transactionCodes,
    },
    {
      model: 'transferChannel',
      label: 'ช่องทางการรับเงิน',
      spec: {},
      component: 'radio',
      choices: transferChannels,
    },
    {
      model: 'amount',
      label: 'จำนวนเงิน (บาท)',
      spec: {},
      component: 'number',
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
        {
          model: 'balance',
          label: 'จำนวนเงินในบัญชี',
          spec: {},
          component: 'number',
        },
      ],
    },
  ],
});

export const queue = defineEntity({
  name: 'เรียกคิว',
  root: [
    {
      model: 'txcode',
      label: 'ค้นหาสมาชิก',
      spec: {},
      component: 'text',
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
        // {
        //   model: 'balance',
        //   label: 'จำนวนเงินในบัญชี',
        //   spec: {},
        //   component: 'number',
        // },
      ],
    },
  ],
});

export const transferonline = defineEntity({
  name: 'ฝากเงิน',
  root: [
    {
      model: 'amount',
      label: 'จำนวนเงิน (บาท)',
      spec: {},
      component: 'number',
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
        {
          model: 'balance',
          label: 'จำนวนเงินในบัญชี',
          spec: {},
          component: 'number',
        },
      ],
    },
  ],
});

export const officer = defineEntity({
  name: 'ผูกบัญชี',
  root: [
    {
      model: 'name',
      label: 'ชื่อสมาชิก',
      spec: {},
      component: 'text',
    },
    {
      model: 'idmember',
      label: 'รหัสสมาชิก',
      spec: {},
      component: 'text',
    },
    {
      model: 'phone',
      label: 'เบอร์โทร',
      spec: {},
      component: 'text',
    },
    {
      model: 'idcard',
      label: 'เลขบัตรประชาชน',
      spec: {},
      component: 'text',
    },
    {
      model: 'account',
      label: 'บัญชี',
      spec: {},
      component: 'select',
      choices: accountTypes,
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
      ],
    },
  ],
});


export const bankAccount = defineChoicesList('transfer-channels', {
  bank1: 'กรุงไทย',
  bank2: 'กสิกร',
});
export const purpose = defineChoicesList('codes-tx-operation', {
  option1: 'เพื่อการอันจำเป็น',
  option2: 'จัดหาสิ่งจำเป็นสำหรับครอบครัว',
  option3: 'อุปการะเลี้ยงดูบุคคลในครอบครัว',
  option4: 'ปลดเปลื้องหนี้สิ้นของครัวเรือน',
  option5: 'รักษาพยาบาลบุคคลในครอบครัว',
});

export const installments = defineChoicesList('installments', {
  option1: '12 งวด',
});



export const checkloanfast = defineEntity({
  name: 'ตรวจสอบขอกู้ฉุกเฉิน',
  root: [
    {
      model: 'Agency',
      label: 'หน่วยงาน',
      spec: {},
      component: 'text',
    },
    {
      model: 'phonenumber',
      label: 'เบอร์โทร',
      spec: {},
      component: 'text',
    },
    {
      model: 'income',
      label: 'รายได้',
      spec: {},
      component: 'text',
    },
    {
      model: 'Amount',
      label: 'ยอดที่ต้องการกู้ (บาท)',
      spec: z.number().gt(0).lte(20000),
      component: 'number',
    },
    {
      model: 'bankAccount',
      label: 'เลือกบัญชีธนาคาร',
      spec: {},
      component: 'radio',
      choices: transferChannels,
    },
    {
      model: 'installments',
      label: 'เลือกจำนวนงวด',
      spec: {},
      component: 'select',
      choices: installments,
    },
    {
      model: 'date',
      label: 'เริ่มส่งเงินกู้คืน',
      spec: {},
      component: 'text',
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
        {
          model: 'balance',
          label: 'จำนวนเงินในบัญชี',
          spec: {},
          component: 'number',
        },
      ],
    },
  ]
})

export const loanfastmember = defineEntity({
  name: 'ขอกู้ฉุกเฉิน',
  root: [
    {
      model: 'Amount',
      label: 'ยอดที่ต้องการกู้ (บาท)',
      spec: z.number().gt(0).lte(20000),
      component: 'number',
    },
    {
      model: 'installments',
      label: 'เลือกจำนวนงวด',
      spec: {},
      component: 'select',
      choices: installments,
    },
    {
      model: 'Amountsent',
      label: 'ยอดที่ส่ง',
      spec: {},
      component: 'number',
    },
    {
      model: 'date',
      label: 'เริ่มส่งเงินกู้คืน',
      spec: {},
      component: 'text',
    },
    {
      model: 'purpose',
      label: 'เพื่อวัตถุประสงค์',
      spec: {},
      component: 'select',
      choices: purpose,
    },
    {
      model: 'bankAccount',
      label: 'เลือกบัญชีธนาคาร',
      spec: {},
      component: 'radio',
      choices: transferChannels,
    },
  ],
  sub: [
    {
      name: 'account',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'memcode',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'accType',
          label: 'บัญชี',
          spec: {},
          component: 'select',
          choices: accountTypes,
        },
        {
          model: 'accNo',
          label: 'เลขบัญชี',
          spec: {},
          component: 'text',
        },
        {
          model: 'balance',
          label: 'จำนวนเงินในบัญชี',
          spec: {},
          component: 'number',
        },
      ],
    },
  ]
})

export const kiosk = defineEntity({
  name: 'ตู้คิว',
  root: [
    {
      model: 'Queue',
      label: 'รหัสสมาชิก',
      spec: {},
      component: 'text',
    },
  ],
})

export const bindanaccount = defineEntity({
  name: 'ผูกบัญชี',
  root: [   
    {
      model: 'iduser',
      label: 'รหัสสมาชิก',
      spec: {},
      component: 'number',
    },      
  ], 
  sub: [
    {
      name: 'idcard',
      component: 'entry',
      fields: [
        {
          model: 'idcard',
          label: 'เลข ปชช',
          spec: {},
          component: 'number',
        },       
      ],
    },
    {
      name: 'numberphone',
      component: 'entry',
      fields: [
        {
          model: 'numberphone',
          label: 'เบอร์โทร',
          spec: {},
          component: 'number',
        },       
      ],
    },
    {
      name: 'otp',
      component: 'entry',
      fields: [       
        {
          model: 'otp',
          label: 'OTP',
          spec: {},
          component: 'number',
        }, 
      ],
    },
  ]
 
})

export const registermember = defineEntity({
  name: 'สมัครสมาชิก',
  root: [   
    {
      model: 'fname',
      label: 'ชื่อ',
      spec: {},
      component: 'text',
    },
    {
      model: 'lname',
      label: 'สกุล',
      spec: {},
      component: 'text',
    },
    {
      model: 'Salary',
      label: 'วันเดือนปีเกิด',
      spec: {},
      component: 'text',
    },
    {
      model: 'idcard',
      label: 'เลขประจำตัวประชาชน',
      spec: {},
      component: 'text',
    },
    {
      model: 'phone',
      label: 'เบอร์โทร',
      spec: {},
      component: 'text',
    },
    {
      model: 'fnameguarantor1',
      label: 'ชื่อ (ผู้รับผลประโยชน์)',
      spec: {},
      component: 'text',
    },
    {
      model: 'lnameguarantor1',
      label: 'สกุล (ผู้รับผลประโยชน์)',
      spec: {},
      component: 'text',
    },
    {
      model: 'phoneguarantor1',
      label: 'เบอร์โทร',
      spec: {},
      component: 'text',
    },
  ], 
  sub: [
    {
      name: 'Spouse',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อ-สกุล',
          spec: {},
          component: 'text',
        },
        {
          model: 'age',
          label: 'อายุ',
          spec: {},
          component: 'text',
        },
        {
          model: 'address',
          label: 'ที่อยู่',
          spec: {},
          component: 'text',
        },
      ],
    },
  ]
})
