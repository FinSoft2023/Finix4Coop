import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/generalloan.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useGeneralloanModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
