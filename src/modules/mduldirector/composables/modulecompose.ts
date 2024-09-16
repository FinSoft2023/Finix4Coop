import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/director.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useDirectorModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
