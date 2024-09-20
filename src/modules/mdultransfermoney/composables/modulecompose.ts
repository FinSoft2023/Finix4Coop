import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/transfermoney.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTransfermoneyModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
