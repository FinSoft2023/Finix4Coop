import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/tracking.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTrackingModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
