import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/accounting.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useAccountingModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
