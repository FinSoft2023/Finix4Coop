import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/officer.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useOfficerModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
