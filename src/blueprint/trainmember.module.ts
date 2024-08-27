import { bigPlatformBuilder, trainmember } from './dataspace';

const { defineModule } = bigPlatformBuilder;

export const moduleBlueprint = defineModule('trainmember', 'อบรม', {
  list: {
    root: trainmember,     
  },
  create: {
    root: { 
      entity: trainmember,
      post: true,
      role: 'stepedit',
      subName: 'member',
    },   
    train: {  
      entity: trainmember,
      post: true,   
      role: 'stepedit',   
    },
    confirm: {  
      entity: trainmember,
      post: true,
      role: 'stepconfirm',
    },   
    steps: {
      entity: trainmember,
      role: 'steps',
    }
  },
  each: {
    root: trainmember,  
  },
});