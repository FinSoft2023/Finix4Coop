import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/phonequeue.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTransactionphoneModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
