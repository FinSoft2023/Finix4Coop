import { bigPlatformBuilder, deductionResults } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('deductionResults', 'บันทึกการหักเงินจากต้นสังกัด', {
  list: {
    root: deductionResults,
    completed: deductionResults,
    closed: deductionResults,
  },
  create: {
    root: {
      entity: deductionResults,
      post: true,
      role: 'stepedit',
    },
    confirm: {
      entity: deductionResults,
      post: true,
      role: 'stepconfirm',
    },
    steps: {
      entity: deductionResults,
      role: 'steps',
    },
    close: {
      entity: deductionResults,
      post: true,
    },
  },
  each: {
    root: deductionResults,
    cancel: {
      entity: deductionResults,
      post: true,
      role: 'confirm',
    },
  },
});
