import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/regmember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useRegmembersModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
