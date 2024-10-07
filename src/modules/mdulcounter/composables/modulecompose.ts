import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/counter.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useCounterModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
