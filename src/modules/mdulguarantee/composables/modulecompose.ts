import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/guarantee.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useGuaranteeModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
