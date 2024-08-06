import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/que.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useQueuesModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
