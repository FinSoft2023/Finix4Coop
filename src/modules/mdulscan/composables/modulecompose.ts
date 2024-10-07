import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/scan.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useScanModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
