import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loanordinarymember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoanordinarymemberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
