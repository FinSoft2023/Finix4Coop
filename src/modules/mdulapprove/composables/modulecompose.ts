import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/approve.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useApproveModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
