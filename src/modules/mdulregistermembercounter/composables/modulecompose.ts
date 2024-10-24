import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/registermembercounter.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useRegistermemberCounterModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
