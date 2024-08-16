import { createBigDataDefinitionBuilder } from 'bigplatdefibp';

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
  ]
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
  ]
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
  ]
})


export const register = defineEntity({
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
  ]
})