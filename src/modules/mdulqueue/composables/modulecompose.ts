import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/queue.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useQueuesModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
