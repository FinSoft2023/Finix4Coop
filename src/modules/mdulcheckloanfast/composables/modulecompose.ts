import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/checkloanfast.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useCheckloanfastModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
