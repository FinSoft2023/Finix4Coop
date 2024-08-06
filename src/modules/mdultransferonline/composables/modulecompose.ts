import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/transferonline.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTransferonlineModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
