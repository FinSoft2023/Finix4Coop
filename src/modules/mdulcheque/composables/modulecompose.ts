import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/cheque.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useChequesModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
