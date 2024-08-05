import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/withdraw.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useWithdrawalsModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
