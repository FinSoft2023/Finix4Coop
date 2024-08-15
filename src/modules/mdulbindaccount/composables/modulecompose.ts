import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/bindaccount.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useBindaccountModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
