import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/kiosk.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useKiosksModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
