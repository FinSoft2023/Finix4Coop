import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/bindanaccount.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useBindanaccountModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
