import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loansharemember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoansharememberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
