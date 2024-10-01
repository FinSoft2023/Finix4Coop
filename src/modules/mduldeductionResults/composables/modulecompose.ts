import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/deductionResults.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useDeductionResultsModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
