import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/deduction.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useDeductionModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
