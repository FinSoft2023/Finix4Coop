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
export const generalloan = defineEntity({
  name: 'รับเรื่องสามัญทั่วไป',
  root: [
    {
      model: 'queue',
      label: 'เลขคิว',
      spec: {},
      component: 'number',
    },
    {
      model: 'searchmembers',
      label: 'ค้นหาสมาชิก',
      spec: {},
      component: 'number',
    },
  ],
  sub: [
    {
      name: 'generalloan',
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
export const loangeneralmember = defineEntity({
  name: 'ขอกู้สามัญ',
  root: [   
    // {
    //   model: 'Amount',
    //   label: 'ยอดที่ต้องการกู้ (บาท)',
    //   spec: z.number().gt(0).lte(30000),
    //   component: 'number',
    // },
    {
      model: 'installments',
      label: 'เลือกจำนวนงวด',
      spec: {},
      component: 'select',
      choices: installments,
    },
    {
      model: 'Amountsent',
      label: 'งวดละ',
      spec: {},
      component: 'number',
    },
  ], 
  sub: [
    {
      name: 'loanshare',
      component: 'entry',
      fields: [
        {
          model: 'Amount',
          label: 'ยอดที่ต้องการกู้ (บาท)',
          spec: z.number().gt(0).lte(30000),
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
          label: 'งวดละ',
          spec: {},
          component: 'number',
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
    },
  ]
})



export const prefix = defineChoicesList('prefix-channels', {
  option1: 'นาย',
  option2: 'นาง',
  option3: 'นางสาว',
  option4: 'เด็กชาย',
  option5: 'เด็กหญิง',
  option6: 'ดอกเตอร์',
  option7: 'แพทย์ชาย',
  option8: 'แพทย์หญิง',
});

export const relationship = defineChoicesList('relationship-channels', {
  option1: 'บุตร',
  option2: 'บิดา',
  option3: 'มารดา',
  option4: 'คู่สมรส',
});




export const registermember = defineEntity({
  name: 'สมัครสมาชิก',
  root: [   
    {
      model: 'prefix',
      label: 'คำนำหน้าชื่อ',
      spec: {},
      component: 'select',
      choices: prefix,
    },
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
      model: 'bornOn',
      label: 'เกิดวันที่',
      spec: {},
      component: 'text',
    },
    {
      model: 'birthMonth',
      label: 'เกิดเดือน',
      spec: {},
      component: 'text',
    },
    {
      model: 'birthYear',
      label: 'พ.ศ.',
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
      model: 'idCard',
      label: 'เลขบัตรประชาชน',
      spec: {},
      component: 'text',
    },
    {
      model: 'bankAccount',
      label: 'เลขบัญชีธนาคารกรุงไทย',
      spec: {},
      component: 'text',
    },
    {
      model: 'phoneNumber',
      label: 'เบอร์โทร',
      spec: {},
      component: 'text',
    },
    {
      model: 'zipCode',
      label: 'รหัสไปรษณีย์',
      spec: {},
      component: 'text',
    },
    {
      model: 'province',
      label: 'จังหวัด',
      spec: {},
      component: 'text',
    },
    {
      model: 'district',
      label: 'อำเภอ',
      spec: {},
      component: 'text',
    },
    {
      model: 'parish',
      label: 'ตำบล',
      spec: {},
      component: 'text',
    },
    {
      model: 'road',
      label: 'ถนน',
      spec: {},
      component: 'text',
    },
    {
      model: 'village',
      label: 'หมู่ที่',
      spec: {},
      component: 'text',
    },
    {
      model: 'jobPosition',
      label: 'ตําแหน่งงาน',
      spec: {},
      component: 'text',
    },
    {
      model: 'department',
      label: 'แผนก',
      spec: {},
      component: 'text',
    },
    {
      model: 'salary',
      label: 'เงินเดือน',
      spec: {},
      component: 'number',
    },
    {
      model: 'stockValue',
      label: 'ส่งเงินค่าหุ้นรายเดือนละ',
      spec: {},
      component: 'number',
    },
  ], 
  sub: [
    {
      name: 'beneficiary',
      component: 'entry',
      fields: [
        {
          model: 'prefix',
          label: 'คำนำหน้าชื่อ',
          spec: {},
          component: 'select',
          choices: prefix,
        },
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
          model: 'phoneNumber',
          label: 'เบอร์โทร',
          spec: {},
          component: 'text',
        },
        {
          model: 'relationship',
          label: 'ความสัมพันธ์กับสมาชิก',
          spec: {},
          component: 'select',
          choices: relationship,
        },
      ],
    },
    {
      name: 'memberFamily',
      component: 'entry',
      fields: [
        {
          model: 'prefix',
          label: 'คำนำหน้าชื่อ',
          spec: {},
          component: 'select',
          choices: prefix,
        },
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
          model: 'phoneNumber',
          label: 'เบอร์โทร (มือถือ)',
          spec: {},
          component: 'text',
        },
        {
          model: 'homeNumber',
          label: 'เบอร์โทร (บ้าน)',
          spec: {},
          component: 'text',
        },
        {
          model: 'email',
          label: 'Email Address',
          spec: {},
          component: 'text',
        },
        {
          model: 'relationship',
          label: 'ความสัมพันธ์กับสมาชิก',
          spec: {},
          component: 'select',
          choices: relationship,
        },
        {
          model: 'bithday',
          label: 'วันเกิด',
          spec: {},
          component: 'text',
        },
        {
          model: 'address',
          label: 'บ้านเลขที่',
          spec: {},
          component: 'text',
        },
        {
          model: 'zipCode',
          label: 'รหัสไปรษณีย์',
          spec: {},
          component: 'text',
        },
        {
          model: 'alley',
          label: 'ตรอก / ซอย',
          spec: {},
          component: 'text',
        },
        {
          model: 'province',
          label: 'จังหวัด',
          spec: {},
          component: 'text',
        },
        {
          model: 'district',
          label: 'อำเภอ / เขต',
          spec: {},
          component: 'text',
        },
        {
          model: 'parish',
          label: 'ตำบล /แขวง',
          spec: {},
          component: 'text',
        },
        {
          model: 'road',
          label: 'ถนน',
          spec: {},
          component: 'text',
        },
        {
          model: 'village',
          label: 'หมู่ที่',
          spec: {},
          component: 'text',
        },
      ],
    },
  ]
})

export const membershipcounter = defineEntity({
  name: 'สมัครสมาชิก',
  root: [
    {
      model: 'queue',
      label: 'เลขคิว',
      spec: {},
      component: 'number',
    },   
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
      model: 'salary',
      label: 'เงินเดือน',
      spec: {},
      component: 'text',
    },
    {
      model: 'position',
      label: 'ตำแหน่ง',
      spec: {},
      component: 'text',
    },
  ],
  sub: [
    {
      name: 'membershipcounter',
      component: 'entry',
      fields: [
        {
          model: 'fname',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'lname',
          label: 'สกุลสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'salary',
          label: 'เงินเดือน',
          spec: {},
          component: 'text',
        },
        {
          model: 'position',
          label: 'ตำแหน่ง',
          spec: {},
          component: 'text',
        },
      ],
    },
  ]
})


export const kiosk = defineEntity({
  name: 'kiosk',
  root: [
    {
      model: 'kiosk',
      label: 'เลขคิว',
      spec: {},
      component: 'text',
    },
  ],
  sub: [
    {
      name: 'takephoto',
      component: 'entry',
      fields: [
        {
          model: 'photo',
          label: 'รูปถ่าย',
          spec: {},
          component: 'text',
        },
      ],
    },
    {
      name: 'memberdata',
      component: 'entry',
      fields: [
        {
          model: 'name',
          label: 'ชื่อสมาชิก',
          spec: {},
          component: 'text',
        },
      ],
    },
    {
      name: 'transaction',
      component: 'entry',
      fields: [
        {
          model: 'transaction',
          label: 'ธุรกรรม',
          spec: {},
          component: 'text',
        },
      ],
    }
  ],
})