import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/appauthorities.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useAppauthoritiesModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
