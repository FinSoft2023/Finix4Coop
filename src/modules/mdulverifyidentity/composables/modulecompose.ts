import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/verifyidentity.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useIdentificationcounterModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
