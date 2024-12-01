import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/newmembership.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useMembershipModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
