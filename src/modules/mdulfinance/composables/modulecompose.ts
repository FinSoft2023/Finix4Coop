import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/finance.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useFinancesModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
