import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/resign.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useResignModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
