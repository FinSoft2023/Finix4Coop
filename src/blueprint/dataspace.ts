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

export const methodStates = defineChoicesList('method-states', {
  transfer: 'เงินโอน',
  cheque: 'เช็ค',
});

export const withdraw = defineEntity({
  name: 'withdraw',
  root: [
    {
      model: 'method',
      label: 'ช่องทาง',
      spec: {},
      component: 'radio',
      choices: methodStates,
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
          model: 'memberid',
          label: 'รหัสสมาชิก',
          spec: {},
          component: 'text',
        },
        {
          model: 'account',
          label: 'เลขบัญชีธนาคาร',
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
