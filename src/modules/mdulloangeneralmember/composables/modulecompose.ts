import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loangeneralmember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoangeneralmemberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
