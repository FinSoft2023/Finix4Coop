import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/inspection.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useInspectionModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
