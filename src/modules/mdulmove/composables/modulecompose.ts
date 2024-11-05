import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/move.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useMoveModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
