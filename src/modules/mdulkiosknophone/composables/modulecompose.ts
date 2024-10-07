import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/kiosknophone.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTransactionkioskModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
