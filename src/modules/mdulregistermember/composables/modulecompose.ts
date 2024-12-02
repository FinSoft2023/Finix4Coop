import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/registermember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useRegistermemberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
