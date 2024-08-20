import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/updatedata.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useUpdatedataModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
