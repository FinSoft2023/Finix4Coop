import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/membershipcounter.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useMembershipcounterModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
