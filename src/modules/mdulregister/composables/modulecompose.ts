import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/register.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useRegisterModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
