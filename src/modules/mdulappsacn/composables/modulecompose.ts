import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/appsacn.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useAppsacnModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
