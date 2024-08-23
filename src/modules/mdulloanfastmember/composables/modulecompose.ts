import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loanfastmember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoanfastmemberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
