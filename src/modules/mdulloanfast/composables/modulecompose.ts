import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loanfast.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoanFastModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
